import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';

import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">      
      <MainPage />
      
    </div>
  );
}

export default withRouter(App);
