import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>BTS</div>
    );
  }
}

ReactDom.render(<App/>,
  document.getElementById('app')
);
export default App;