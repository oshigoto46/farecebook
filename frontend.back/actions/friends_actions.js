import * as FriendAPIUtil from '../util/friends_api_util';
import { receiveErrors } from './session_actions'

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveRequests = ({received, sent}) => ({
  type: RECEIVE_REQUESTS,
  received,
  sent,
});

const sendRequest = (request) => ({
  type: SEND_REQUEST,
  request
});

const removeRequest = ({ request, receiver, requester}) => ({
  type: REMOVE_REQUEST,
  request,
  receiver,
  requester
});

////{"received":{"3":{"id":3,"requester_id":5,"requester_name":"hogehoge hogeo","
//profile_picture_url":"https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpeg"}},"sent":[]}

export const fetchFriendRequests = () => dispatch => {
  return FriendAPIUtil.fetchFriendRequests().then(
    payload => dispatch(receiveRequests(payload)),
    errors => dispatch(receiveErrors(errors, 'friends'))
  )
};

export const sendFriendRequest = userId => dispatch => {
  return FriendAPIUtil.sendFriendRequest(userId).then(
    request => dispatch(sendRequest(request)),
    errors => dispatch(receiveErrors(errors, 'friends'))
  )
};

export const acceptFriendRequest = userId => dispatch => {
  return FriendAPIUtil.acceptFriendRequest(userId).then(
    payload => dispatch(removeRequest(payload)),
    errors => dispatch(receiveErrors(errors, 'friends'))
  )
};

export const deleteFriendRequest = userId => dispatch => {
  return FriendAPIUtil.deleteFriendRequest(userId).then(
    payload => dispatch(removeRequest(payload)),
    errors => dispatch(receiveErrors(errors, 'friends'))
  )
}
