import React from 'react';
import { render } from '@testing-library/react';
import configureStore from '../app/store';
import { Provider } from 'react-redux';
import App from '../app/App';

import styles from '../app//Grid/Grid.module.css';
import { A_STAR } from '../app/presets';
import { GRID_SIZE } from '../app/constants';
import { calculatePath } from '../app/actions';

test('Main Grid React Tests', async () => {
  const store = configureStore();
  const { getAllByTestId, getByTestId } = render(<Provider store={store}>
    <App />
  </Provider>);

  const cells = await getAllByTestId(/cell-*/);

  // Render the whole grid
  expect(cells.length).toEqual(1024);

  // Renders start in green
  let { x, y } = store.getState().start;
  const start = await getByTestId(`cell-${x}-${y}`);
  expect(start).toHaveClass(styles.start);

  // Renders end in red
  ({ x, y } = store.getState().end);
  const end = await getByTestId(`cell-${x}-${y}`);
  expect(end).toHaveClass(styles.end);

  // Has a-star text preset
  expect(store.getState().preset).toEqual('a-star-text');

  // render cells with the right class
  store.dispatch(calculatePath());
  expect(store.getState().path).not.toBeUndefined();
  const path = store.getState().path!;

  for (x = 0; x < GRID_SIZE; x = x + 1) {
    for (y = 0; y < GRID_SIZE; y = y + 1) {
      const cell = await getByTestId(`cell-${x}-${y}`);

      // Blocked and non blocked cells
      if (A_STAR[x][y].status === 'blocked') {
        expect(cell).toHaveClass(styles.blocked);
      } else {
        expect(cell).not.toHaveClass(styles.blocked);
      }
      
      // Computed cells
      const visitedCell = path[x][y];
      
      if (visitedCell.isPath) {
        expect(cell).toHaveClass(styles.path);
      }

      if (visitedCell.isClosed) {
        expect(cell).toHaveClass(styles.closed);
      }
      
      if (visitedCell.fCost !== 0) {
        expect(cell).toHaveClass(styles.checked);
      }
    }
  }
});