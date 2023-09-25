import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
