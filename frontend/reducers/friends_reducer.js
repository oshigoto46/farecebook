import _ from 'lodash';
import { RECEIVE_REQUESTS,
        SEND_REQUEST,
        REMOVE_REQUEST } from '../actions/friends_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const FriendsReducer = (state = { received: {}, sent: []}, action) => {

  switch (action.type) {
    case RECEIVE_REQUESTS: {

      // {"received":{"2":{"id":2,"requester_id":3,"requester_name":
      // "daisan sya","profile_picture_url":
      // "https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpeg"},"3
      // ":{"id":3,"requester_id":4,"requester_name":"aa bb","profile_picture_url"
      // :"https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpeg"}},"sent":[]}%
      
      console.log("========== 👇RECEIVE_REQUESTS");
      console.log(JSON.stringify(state));
      console.log("========== 👆RECEIVE_REQUESTS");
      console.log(JSON.stringify(action));
      console.log("========== 👆RECEIVE_REQUESTS");
      const received = _.merge({}, state.received, action.received);
      const sent = state.sent.concat(action.sent);
      return { received, sent }
    }
    case SEND_REQUEST: {
      const sent = state.sent.concat(action.request.receiver);
      return _.merge({}, state, { sent } )
    }
    case REMOVE_REQUEST: {
      const newState = _.merge({}, state)
      delete newState.received[action.request.id]
      return newState
    }
    case RECEIVE_CURRENT_USER: {
      if (action.user === null) {
        return { received: {}, sent: []};
      }
    }
    default:
      return state
  }
};

export default FriendsReducer
