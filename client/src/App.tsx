import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FindMatch from './components/Findmatch';
import './styles.css'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FindMatch></FindMatch>
    </div>
  );
}

export default App;
