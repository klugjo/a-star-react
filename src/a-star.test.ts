import { createGrid, getDistance } from './a-star';

describe('getDistance', () => {  
  test('horizontal line', () => {
    expect(getDistance({ col: 0, row: 0 }, { col: 4, row: 0 })).toEqual(40);
  });
  
  test('vertical line', () => {
    expect(getDistance({ col: 0, row: 0 }, { col: 0, row: 3 })).toEqual(30);
  });

  test('diagonal line', () => {
    expect(getDistance({ col: 0, row: 0 }, { col: 3, row: 3 })).toEqual(3 * 14);
  });
  
  test('mixed line', () => {
    expect(getDistance({ col: 0, row: 0 }, { col: 1, row: 4 })).toEqual(44);
    expect(getDistance({ col: 0, row: 0 }, { col: 4, row: 1 })).toEqual(44);
  });
  
  test('no distance', () => {
    expect(getDistance({ col: 0, row: 0 }, { col: 0, row: 0 })).toEqual(0);
  });
});