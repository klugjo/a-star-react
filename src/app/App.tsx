import React from 'react';
import './styles.css';
import Grid from './Grid';
import Controls from './Controls';

const App: React.FC = () => {
  return (
    <div className="App">
      <Controls />
      <Grid />
    </div>
  );
}

export default App;
