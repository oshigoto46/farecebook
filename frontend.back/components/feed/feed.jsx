import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions'
import { fetchTrends } from '../../actions/trending_actions'
import { Link } from 'react-router-dom';
import PostShow from '../feed/post_show'
import PostForm from './feed_post_form'
import LeftSide from './left_side'
import RightSide from './right_side'
import { ScaleLoader } from 'react-spinners';
import _ from 'lodash';

class Feed extends React.Component{
  // componentDidMount(){
  //   this.props.fetchUsers();
  // }

  render(){
    if (this.props.loading) {
      return (
        <div className='loading'>
          <ScaleLoader color='#93949b'  />
        </div>
      )
    }
    const { postIds, currentUser, trends,
            trendLoading, fetchTrends} = this.props
    const postList = this.props.postIds.map( id => {
      return (
        <PostShow key={id} postId={id}
                           areFriends={true}
                           isCurrentUser={true}
                           profileId={currentUser.id}/>
      )
    });

    return (
      <div id='main-container'>
        <main className='main-body'>
          <LeftSide currentUser={currentUser}/>
          <div className='main-center flex-col pos-rel'>
            <PostForm />
            {postList}
          </div>
          <RightSide trends={trends}
                     loading={trendLoading}
                     fetchTrends={fetchTrends}/>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTrends: (source) => dispatch(fetchTrends(source)),
});

//state.session.currentUser
// {
//   "id": 2,
//   "email": "hoge@gmail.com",
//   "birth_date": "1999-02-01",
//   "hometown": null,
//   "current_city": null,
//   "school": null,
//   "workplace": null,
//   "gender": "female",
//   "firstName": "hoge",
//   "fullName": "Hoge Hoge",
//   "profile_picture_url": "https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpeg",
//   "cover_photo_url": "https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpg",
//   "friend_ids": [],
//   "postIds": [
//     2,
//     1
//   ],
//   "unreadNotifications": 0,
//   "feedIds": [
//     2,
//     1
//   ]
// }

const mapStateToProps = state => {
  console.log("======feed mapStateToProps" +(JSON.stringify(state)));
  const postIds = state.session.currentUser.feedIds
  return {
    postIds,
    currentUser: state.session.currentUser,
    loading: state.ui.feedLoading || state.ui.loading,
    trends: _.values(state.entities.trends) || [],
    trendLoading: state.ui.trendLoading,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Feed)
