import _ from 'lodash';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { IVisitedCell } from './typings';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toMatchClosedCells(toMatch: boolean[][]): {};
      toMatchPath(toMatch: boolean[][]): {};
      toMatchFCost(toMatch: number[][]): {};
      toMatchGCost(toMatch: number[][]): {};
      toMatchHCost(toMatch: number[][]): {};
    }
  }
}

function printGrid<T>(grid: IVisitedCell[][], selector: (c: IVisitedCell) => T) {
  const formatter = (val: any) => {
    if (val === true) {
      return 'Y';
    } else if (val === false) {
      return 'N';
    } else if (!isNaN(val)) {
      return _.padStart(val, 3);
    }

    return val;
  };

  return `${grid.map(row => `\n[${row.map(cell => `${formatter(selector(cell))}`)}]`)}`;
}

function genericGridMatcher<T>(grid: IVisitedCell[][], toMatch: T[][], selector: (c: IVisitedCell) => T) {
  if (grid.length !== toMatch.length) {
    return {
      message: () => 'Not the same length',
      pass: false
    }
  }

  for (let x = 0; x < grid.length; x = x + 1) {
    for (let y = 0; y < grid[x].length; y = y + 1) {
      if (selector(grid[x][y]) !== toMatch[x][y]) {
        return {
          message: () => `Cell [${x}, ${y}] mismatch. Expected ${toMatch[x][y]}, received ${selector(grid[x][y])}\n\n${printGrid(grid, selector)}`,
          pass: false
        }
      }
    }
  }

  return {
    message: () => 'OK',
    pass: true
  }
}

expect.extend({
  toMatchClosedCells(grid: IVisitedCell[][], toMatch: boolean[][]) {
    return genericGridMatcher<boolean>(grid, toMatch, (c: IVisitedCell) => c.isClosed);
  },
  toMatchPath(grid: IVisitedCell[][], toMatch: boolean[][]) {
    return genericGridMatcher<boolean>(grid, toMatch, (c: IVisitedCell) => c.isPath);
  },
  toMatchFCost(grid: IVisitedCell[][], toMatch: number[][]) {
    return genericGridMatcher<number>(grid, toMatch, (c: IVisitedCell) => c.fCost);
  },
  toMatchGCost(grid: IVisitedCell[][], toMatch: number[][]) {
    return genericGridMatcher<number>(grid, toMatch, (c: IVisitedCell) => c.gCost);
  },
  toMatchHCost(grid: IVisitedCell[][], toMatch: number[][]) {
    return genericGridMatcher<number>(grid, toMatch, (c: IVisitedCell) => c.hCost);
  }
});
