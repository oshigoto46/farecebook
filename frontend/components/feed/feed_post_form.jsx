import { connect } from 'react-redux'
import PostForm from './post_form'
import { createPost } from '../../actions/posts_actions'

const mapStateToProps = state => ({
  receiver: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
