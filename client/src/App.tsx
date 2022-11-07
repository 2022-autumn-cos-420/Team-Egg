import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FindMatch from './components/Findmatch';
import './styles.css';
import CreateReview from './pages/CreateReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FindMatch></FindMatch>
      <CreateReview></CreateReview>
    </div>
  );
}

export default App;
