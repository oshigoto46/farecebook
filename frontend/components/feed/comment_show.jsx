import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';

const CommentShow = ({ comment, author }) => {
  return(
    <div className='flex-row' id='comment-show'>
      <img className='circle-thumb' src={author.profile_picture_url}></img>
      <div className='flex-col'>
        <p>
          <Link to={`/users/${author.id}`} ><h2>{author.fullName}</h2></Link>
          {comment.body}
        </p>
        <div className='comment-show-bottom flex-row'>
          <ul className='flex-row' id='comment-nav'>
            <li>Like</li>
            <li>Reply</li>
          </ul>
          <i alt='asdf'>{moment(comment.updated_at).fromNow(true)}</i>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.commentId]
  const author = state.entities.users[comment.author_id]
  return {
    comment,
    author,
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentShow);
