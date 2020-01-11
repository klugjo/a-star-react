import React from 'react';
import Grid from './Grid';
import Controls from './Controls';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Controls />
      <Grid />
      <div className="footer">Created by <a target="_blank" href="http://www.codeblocq.com/"> Jonathan Klughertz</a> - Source Code available on <a target="_blank" href="https://github.com/klugjo/a-star-react"> GitHub</a></div>
    </div>
  );
}

export default App;
