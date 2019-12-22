import React from 'react';
import './styles.css';
import { createGrid } from '../a-star';
import Grid from './Grid';

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid grid={createGrid(64, 64)} />
    </div>
  );
}

export default App;
