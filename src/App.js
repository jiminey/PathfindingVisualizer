import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
