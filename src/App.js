import React from 'react';
import { NavBar } from './components/NavBar'
import { ImageCard } from './components/ImageCard'
import './stylesheets/App.css';

function App() {
  return (
    <div class="app">
      <ImageCard />
      <NavBar />
    </div>
  );
}

export default App;
