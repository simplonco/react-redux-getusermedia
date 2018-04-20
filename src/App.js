import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/appStore';

import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Users/>
      </Provider>
    );
  }
}

export default App;
