import { computePath } from './algorithm';
import { ICell } from './typings';

const O: ICell = { status: 'empty' };
const X: ICell = { status: 'blocked' };

const Y = true;
const N = false;

test('when no path found, should check all the cells available', () => {
  const grid = [
    [O, O, X, O, O],
    [O, O, X, O, O],
    [O, O, X, O, O],
    [O, O, X, O, O],
    [O, O, X, O, O],
  ];
  const result = computePath(grid, { x: 0, y: 0 }, { x: 4, y: 4 });

  expect(result).toMatchClosedCells([
    [Y, Y, N, N, N],
    [Y, Y, N, N, N],
    [Y, Y, N, N, N],
    [Y, Y, N, N, N],
    [Y, Y, N, N, N],
  ]);

  expect(result).toMatchPath([
    [N, N, N, N, N],
    [N, N, N, N, N],
    [N, N, N, N, N],
    [N, N, N, N, N],
    [N, N, N, N, N],
  ]);
});

test('when there are no obstacles and the start and end are on the same line', () => {
  const grid = [
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
  ]
  const result = computePath(grid, { x: 2, y: 0 }, { x: 2, y: 4 });

  expect(result).toMatchPath([
    [N, N, N, N, N],
    [N, N, N, N, N],
    [N, Y, Y, Y, Y],
    [N, N, N, N, N],
    [N, N, N, N, N],
  ]);

  expect(result).toMatchClosedCells([
    [N, N, N, N, N],
    [N, N, N, N, N],
    [Y, Y, Y, Y, N],
    [N, N, N, N, N],
    [N, N, N, N, N],
  ]);
});

test('when there are no obstacles and the start and end are on a diagonal', () => {
  const grid = [
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
    [O, O, O, O, O],
  ]
  const result = computePath(grid, { x: 0, y: 0 }, { x: 4, y: 4 });

  expect(result).toMatchPath([
    [N, N, N, N, N],
    [N, Y, N, N, N],
    [N, N, Y, N, N],
    [N, N, N, Y, N],
    [N, N, N, N, Y],
  ]);

  expect(result).toMatchClosedCells([
    [Y, N, N, N, N],
    [N, Y, N, N, N],
    [N, N, Y, N, N],
    [N, N, N, Y, N],
    [N, N, N, N, N],
  ]);
});

test('Full example', () => {
  const grid = [
    [O, O, O, O, O, O, O, O],
    [O, O, O, O, O, O, O, O],
    [O, X, O, O, O, O, O, O],
    [O, X, X, X, X, X, O, O],
    [O, O, O, O, O, O, O, O],
    [O, O, O, O, O, O, O, O],
    [O, O, O, O, O, O, O, O],
    [O, O, O, O, O, O, O, O],
  ];

  const result = computePath(grid, { x: 5, y: 5 }, { x: 2, y: 2 });

  expect(result).toMatchPath([
    [N, N, N, N, N, N, N, N],
    [N, N, N, N, N, N, N, N],
    [N, N, Y, Y, Y, Y, N, N],
    [N, N, N, N, N, N, Y, N],
    [N, N, N, N, N, Y, N, N],
    [N, N, N, N, N, N, N, N],
    [N, N, N, N, N, N, N, N],
    [N, N, N, N, N, N, N, N],
  ]);

  expect(result).toMatchClosedCells([
    [N, N, N, N, N, N, N, N],
    [N, N, N, N, N, N, N, N],
    [N, N, N, Y, Y, Y, N, N],
    [N, N, N, N, N, N, Y, N],
    [N, Y, Y, Y, Y, Y, Y, N],
    [N, N, Y, Y, Y, Y, Y, N],
    [N, N, N, Y, Y, Y, N, N],
    [N, N, N, N, N, N, N, N]
  ]);
})

