import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../actions/hello_action.js';

class HelloRedux extends React.Component {
  constructor(props){
    super(props);
    

  }

  render() {
    const {helloVar} = this.props;
    return (
      <div>
        <p className="helloLabel">state {JSON.stringify(this.state)}  </p>
        <p className="helloLabel">Hello props {JSON.stringify(this.props)} { this.props.name } </p>
        <p className="helloLabel">Hello props.hello {JSON.stringify(helloVar)} { this.props.name } </p>
      
       
        <a href="#" onClick={ () => this.props.changeName("NEKO") }>NEKO</a>
        <br />
        <a href="#" onClick={ () => this.props.changeName("INU") } >INU</a>
      </div>
    )
  }
}
const mapStateToProps = (state) => ( {
   state
})

const  mapDispatchToProps = (dispatch) =>( {
    /* nameの値を変更する. */ 
    changeName: text => dispatch(changeName(text))
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(HelloRedux);