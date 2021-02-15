import React from 'react';


//子コンポーネント
class Child extends React.Component {
  render() {
    return <button onClick={this.props.onCountUp}>加算</button>
  }
}

export default Child;