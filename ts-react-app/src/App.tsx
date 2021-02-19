import * as React from 'react';
import HogeContainer from './containers/HogeContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        { <HogeContainer />}
      </div>
    );
  }
}

export default App;
