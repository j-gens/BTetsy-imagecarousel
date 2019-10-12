import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import exampleStyle from './style.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1 style={exampleStyle.header}>Hello Style!</h1>
        <p style={exampleStyle.box}>Add a little style!</p>

        <div style={exampleStyle.xxxcomponentStyle.listdiv}>
          <li style={exampleStyle.xxxcomponentStyle.listitem}> item </li>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App/>,
  document.getElementById('app')
);
export default App;