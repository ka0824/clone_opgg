import React, { ReactNode } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />

    </div>
  );
}

export default App;
