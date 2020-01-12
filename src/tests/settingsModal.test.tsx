import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from '../app/store';
import { Provider } from 'react-redux';
import App from '../app/App';

test('Settings Modal React Tests', async () => {
  const store = configureStore();
  const { getByTestId, getByText } = render(<Provider store={store}>
    <App />
  </Provider>);

  // Titles present
  const openModalBtn = await getByTestId('settings-modal-test-id');
  await fireEvent.click(openModalBtn);
  expect(getByText('How does it work ?')).toBeTruthy();
  expect(getByText('Change Pattern')).toBeTruthy();
  expect(getByText('Ressources I found useful')).toBeTruthy();

  // Set Preset
  expect(store.getState().preset).not.toEqual('labyrinth');
  const setLabyrinthPresetBtn = await getByText('Labyrinth');
  await fireEvent.click(setLabyrinthPresetBtn);
  expect(store.getState().preset).toEqual('labyrinth');
});