import React from 'react';
import Child from './child';

//親コンポーネント
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.ParentAddCount = this.ParentAddCount.bind(this)
  }

  //カウントアップ
  ParentAddCount() {
    let count = this.state.count + 1;
    this.setState({count:count});
  }

  render() {
    return (
      <div>
        <Child onCountUp={this.ParentAddCount}></Child>
        <div>{this.state.count}回押しました。</div>
      </div>);
  }
}
export default Parent;

//React.render(<Parent />, document.getElementById('app'));