import React, {Component} from 'react';

import Loader from 'react-loader-spinner';
export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
        style={{zIndex: '100', position: 'fixed', top: '50%', left: '50%'}}
      />
    );
  }
}
