import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class SearchDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: false,
      searchTerm: "",
      currentUsers: [],
      cursor: 0,
     }

    this._handleInput = this.handleInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this._toggleSearch = this._toggleSearch.bind(this)
    this._clearState = this._clearState.bind(this)
    this.changeCursor = this.changeCursor.bind(this)
  }

 //TODO アロー関数ってなんだっけ.. アロー関数だったり何も返さなかったりする件
  _toggleSearch2(event){
      return () => {

        if(event ==='focus'){
                

        }

      }
  }


  _toggleSearch(event){
    return () => {
      if (event === 'focus' || this.state.dropdown) {
        setTimeout( () => {
          this.setState({ dropdown: !this.state.dropdown })
        }, 150)
      }
    }
  }

  handleInputSearch(e){

    //再代入だめなletの使い方 TODO
      let _currentUsers = _.filter(


      )

      //入力されなかったらNot Found
      if(e.target.value === ""){
         _currentUser = []
      }
      
      


  }

  handleInput(e){
    let currentUsers = _.filter(this.props.users, user => (
      user.fullName.toLowerCase()
                    .includes(e.target.value.toLowerCase())
    ));
    if (e.target.value === "") {
      currentUsers = [];
    }
    this.setState({searchTerm: e.target.value, currentUsers})
  }

  handleKeyDown(e) {
    const { cursor, currentUsers } = this.state
    if (e.keyCode === 40 && cursor < currentUsers.length - 1 ) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 13) {
      let userId = this.state.currentUsers[this.state.cursor].id
      this._clearState();
      this.setState({ dropdown:false })
      this.props.history.push(`/users/${userId}`)
    }
  }

  changeCursor(i){
    return () => {
      this.setState({ cursor: i})
    }
  }

  _clearState(){
    this.setState( {
      searchTerm: "",
      currentUsers: [],
      cursor: 0,
    })
  }


  render(){
    
    const _userList = this.state.currentUsers.map( (u,i) =>{
       return (
                    <Link to={``}>
                      
                    </Link>
       )
    })


    const userList = this.state.currentUsers.map( (user, i) => {
      return (
        <div key={user.id}
             onMouseOver={this.changeCursor(i)}
             onClick={this._clearState}
        >
          <Link to={`/users/${user.id}`}>
            {/* 一旦コメントアウト */}
            {/* <figure className={ this.state.cursor === i ? 'active' : ''}>
              <img src={user.profile_picture_url}
                  width="22px"
                  height="22px"
                  className='circle-thumb'
              /> */}
                {user.fullName}
            {/* </figure> */}
          </Link>
        </div>
      )
    })
    return (
      <div>
        <input onFocus={this._toggleSearch('focus')} 
               //onFocus フォーカスがあたったとき dropダウンメニューだしているだけ
               onBlur={this._toggleSearch('blur')}
               //onBlur フォーカスが離れたとき　↑なんの処理もしていないので.. 実質いらない..
               onChange={this._handleInput}
               onKeyDown={this.handleKeyDown}
               id='search-bar'
               placeholder='Search users'
               value={this.state.searchTerm}>
        </input>
        {this.state.dropdown &&
        <div id='search-dropdown' onKeyDown={this.handleKeyDown}>
           {/* {userList.length > 0 ? alert(userList) : <h4>No Search Results Found</h4>} */}
          {userList.length > 0 ? userList : <h4>No Search Results Found</h4>}
        </div>}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  //TODO なぜこれがそもそもstateなのか.. propos.entitiesじゃないのか。。
  users: state.entities.users
})

export default withRouter(connect(mapStateToProps)(SearchDropdown))
