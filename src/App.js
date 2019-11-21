import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';

import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">      
      <MainPage />
      <Footer />
    </div>
  );
}

export default withRouter(App);
