import React from 'react';

export class FriendButton extends React.Component {
  constructor(props){
    super(props)
    this.state = { dropdown: false }
    this._onClick = this._onClick.bind(this);
    this._removeFriend = this._removeFriend.bind(this);
  }

  _onClick(e){
    e.preventDefault();
    setTimeout( () => {
      this.setState( { dropdown: !this.state.dropdown } )
    }, 150)
  }


  _removeFriend(){
    this.props.removeFriend(this.props.user.id)();
  }

  render() {
    const { friendRequestPending, isCurrentUser,
            areFriends, removeFriend, user, addFriend, currentUserId} = this.props;
    if (isCurrentUser || !user.friend_ids) return null;


    if (user.friend_ids.includes(currentUserId)) {
      return (
        <div>
          <button id="already-friends" onClick={this._onClick}
                                        onBlur={this._onClick}>
            Friends
            &nbsp; <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          {this.state.dropdown && <button id='remove-friend'
                                          onClick={this._removeFriend}>
                                  Remove Friend</button>}
        </div>

      )
    } else if (!friendRequestPending) {
      return (
        <button id="add-friend"
                onClick={addFriend(user.id)}>
          <i className="fa fa-user" aria-hidden="true"></i>+
          &nbsp; Add Friend
        </button>
      )
    } else if (friendRequestPending){
      return (
        <button id="pending-friend" disabled>
          Friend Request Pending
        </button>
      )
    }
  }
}

export const requestPending = (state, user) => {
  const hasSentRequest = state.entities.friendRequests.sent.includes(parseInt(user));
  const hasReceivedRequest = _.values(state.entities.friendRequests.received)
                                  .some( request => {
                                    return request.requester_id === (parseInt(user))
                                  });
  return (hasSentRequest || hasReceivedRequest)
}
