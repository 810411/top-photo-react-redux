import React from 'react';
import {connect} from 'react-redux';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Топ фото</h1>
      </header>
      <p className="App-intro">Самые залайканые фото</p>
      <p>Имя: {props.user}</p>
    </div>
  )
};

const mapStateToProps = store => {
  return {
    user: store.user
  }
};

export default connect(mapStateToProps)(App)
