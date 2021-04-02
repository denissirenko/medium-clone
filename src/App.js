import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './navigation';
import { history } from './navigation/history';

import { Topbar } from './components/topBar'

function App() {
  return (
    <Router history={history}>
      <Topbar />
      <Routes />
    </Router>
  );
}

export default App;
