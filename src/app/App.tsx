import React from 'react';
import Grid from './Grid';
import Controls from './Controls';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Controls />
      <Grid />
    </div>
  );
}

export default App;
