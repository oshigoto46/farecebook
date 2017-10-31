import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertTime } from '../../util/profile_util';
import PostDropdown from '../dropdowns/post_dropdown'
import { deletePost } from '../../actions/posts_actions'
import { deleteComment } from '../../actions/comments_actions'
import { openModal, closeModal } from '../../actions/ui_actions';
import { like, unlike } from '../../actions/likes_actions';
import CommentForm from './comment_form'
import CommentShow from './comment_show'
import moment from 'moment'

class PostShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading : true, dropdown: false, likerShow: false }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.setNameInput = this.setNameInput.bind(this)
    this._toggleLike = this._toggleLike.bind(this)
    this._toggleLikerShow = this._toggleLikerShow.bind(this)
  }

  componentDidMount(){
    const { receiver, author } = this.props;
    if (receiver || author) {
      this.setState({ loading: false })
    }
  }

  componentWillReceiveProps(newProps){
    const { receiver, author } = newProps;
    if (receiver || author) {
      this.setState({ loading: false })
    }
  }

  setNameInput(input){
    this.nameInput = input
  }

  toggleDropdown(){
    this.setState( { dropdown: !this.state.dropdown})
  }

  _toggleLike(){
    if (this.props.post.currentUserLikes) {
      this.props.unlike(this.props.post.id)
    } else {
      this.props.like(this.props.post.id)
    }
  }

  _toggleLikerShow(){
    this.setState({ likerShow: !this.state.likerShow })
  }


  render(){
    const { body, updated_at, id,
          currentUserLikes, liker_ids } = this.props.post;
    const { receiver, author, isWallPost, likerNames,
          currentUserId, comments, profileId,
          deleteComment, areFriends, isCurrentUser} = this.props;
    if (this.state.loading) {
      return null
    }
    const postTime = moment(updated_at);
    const likerList = likerNames.map ( (name, i) => <li key={i}>{name}</li>)
    const commentList = comments.map( comment => {
      const show = (comment.author_id === currentUserId) ||
                  (profileId === currentUserId)
      return <CommentShow key={comment.id}
                          commentId={comment.id}
                          deleteComment={deleteComment(comment.id)}
                          showX={show}/>
    })
    const currUserIsAuthorOrReceiver = (author.id === currentUserId) ||
                                        (receiver.id === currentUserId)
    return (
      <div className='post-show'>
        {currUserIsAuthorOrReceiver &&
        <h3 className='pos-abs' onClick={this.toggleDropdown}>...</h3>}
        {this.state.dropdown &&
                  <PostDropdown close={this.toggleDropdown}
                                delete={this.props.delete(id)}
                                postId={id}
                                isAuthor={author.id === currentUserId}/> }
        <div className='flex-row'>
          <img src={author.profile_picture_url}></img>
          <div>
            <Link to={`/users/${author.id}`}>
              <h2>{author.fullName}</h2>
            </Link>
            {isWallPost &&
              <i className="fa fa-caret-right" aria-hidden="true"></i>}
            {isWallPost &&
            <Link to={`/users/${receiver.id}`}>
              <h2>{receiver.fullName}</h2>
            </Link> }

            <br></br>
            <i title={postTime.format("dddd, MMMM Do YYYY, h:mm:ss a")}>
              {convertTime(updated_at)}
            </i>
          </div>
        </div>
        <p>{body}</p>
        <ul className='flex-row' id='post-nav'>
          <li style={ currentUserLikes ? { color: '#598dfb'} : {} }
              onClick={this._toggleLike}>
            <i
              style={ currentUserLikes ? { color: '#598dfb'} : {} }
              className="fa fa-thumbs-o-up"
              aria-hidden="true"></i>
            Like
          </li>
          <li onClick={ () => this.nameInput.focus()}>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            Comment
          </li>
        </ul>
        <div className='comment-area flex-col'>
          {liker_ids.length > 0 &&
            <h5 className='post-likes-show'>
              <i className="fa fa-thumbs-up pos-rel"
                aria-hidden="true"
                onMouseEnter={this._toggleLikerShow}
                onMouseLeave={this._toggleLikerShow}>
                { (this.state.likerShow &&  liker_ids.length > 0) &&
                <aside>
                  <h3>Like</h3>
                  <ul>{likerList}</ul>
                </aside>
                }
                </i>
              {liker_ids.length}
            </h5>
          }

          {commentList}
          {(areFriends || isCurrentUser) && <CommentForm postId={id}
                                                        nameInput={this.setNameInput}/> }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.postId] ||
                                      { comment_ids: [], liker_ids: []}
  const comments = post.comment_ids.map( id => {
    return state.entities.comments[id]
  })
  const likerNames = post.liker_ids.map( id => {
    return state.entities.users[id].fullName
  })
  return {
    post,
    comments,
    likerNames,
    receiver: state.entities.users[post.receiver_id],
    author: state.entities.users[post.author_id],
    isWallPost: post.receiver_id !== post.author_id,
    currentUserId: state.session.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  delete: postId =>  () => dispatch(deletePost(postId)),
  deleteComment: commentId => () => dispatch(deleteComment(commentId)),
  like: postId => dispatch(like('posts', postId)),
  unlike: postId => dispatch(unlike('posts', postId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
