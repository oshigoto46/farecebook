import React from 'react';
import CommentShow from './comment_show'
import { deleteComment } from '../../actions/comments_actions'
import { connect } from 'react-redux';


class NestedCommentList extends React.Component {
  constructor(props){
    super(props)
    const { childComments, currentUserId, deleteComment } = props;
    console.log('===childComments子どもたち====' + JSON.stringify(childComments));
  }
  render () {
    const { childComments, currentUserId, deleteComment } = this.props;
    const commentsList = childComments.map( comment => {
      const show = (comment.author_id === currentUserId)
      //this.hoge();
      return (
        <CommentShow key={comment.id}
                    commentId={comment.id}
                    deleteComment={deleteComment(comment.id)}
                    showX={show}
                    areFriends={this.props.areFriends}
                    isCurrentUser={comment.author_id === currentUserId}/>
      )
    })

    return (
      <div>
        {commentsList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
})

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => () => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NestedCommentList);
