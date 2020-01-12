import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from '../app/store';
import { Provider } from 'react-redux';
import App from '../app/App';

test('Main Grid React Tests', async () => {
  const store = configureStore();
  const { getByTestId } = render(<Provider store={store}>
    <App />
  </Provider>);

  // Set Start
  expect(store.getState().start).not.toEqual({ x: 0, y: 0 });
  const setStartBtn = await getByTestId('set-start-testid');
  await fireEvent.click(setStartBtn);
  const newStartCell = await getByTestId(`cell-0-0`);
  await fireEvent.click(newStartCell);
  expect(store.getState().start).toEqual({ x: 0, y: 0 });

  // Set End
  expect(store.getState().end).not.toEqual({ x: 31, y: 31 });
  const setEndBtn = await getByTestId('set-end-testid');
  await fireEvent.click(setEndBtn);
  const newEndCell = await getByTestId(`cell-31-31`);
  await fireEvent.click(newEndCell);
  expect(store.getState().end).toEqual({ x: 31, y: 31 });

  // Draw
  expect(store.getState().grid[0][1].status).not.toEqual('blocked');
  const drawCell = await getByTestId(`cell-0-1`);
  await fireEvent.click(drawCell);
  expect(store.getState().grid[0][1].status).toEqual('blocked');

  // Start
  expect(store.getState().path).toBeUndefined();
  const startBtn = await getByTestId('start-testid');
  await fireEvent.click(startBtn);
  expect(store.getState().path).not.toBeUndefined();

  // Reset
  expect(store.getState().path).not.toBeUndefined();
  const resetBtn = await getByTestId('reset-testid');
  await fireEvent.click(resetBtn);
  expect(store.getState().path).toBeUndefined();

  // Draw when path present should reset path
  await fireEvent.click(startBtn);
  expect(store.getState().path).not.toBeUndefined();
  await fireEvent.click(drawCell);
  expect(store.getState().grid[0][1].status).toEqual('blocked');
  expect(store.getState().path).toBeUndefined();
});