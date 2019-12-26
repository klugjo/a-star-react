import { range, isEqual } from 'lodash';
import { ICell, ICoordinates, IVisitedCell, IPath } from './typings';

export const generateGrid = <T>(numberOfRows: number, numberOfColumns: number, value: T): T[][] => {
  return range(numberOfRows).map(() =>
    range(numberOfColumns).map(() => (value)));
};

const coordinatesToCheck: ICoordinates[] = [
  { col: 0, row: -1 },
  { col: 1, row: -1 },
  { col: 1, row: 0 },
  { col: 1, row: 1 },
  { col: 0, row: 1 },
  { col: -1, row: 1 },
  { col: -1, row: 0 },
  { col: -1, row: -1 },
];

export const getDistance = (a: ICoordinates, b: ICoordinates) => {
  const colOffset = Math.abs(a.col - b.col);
  const rowOffset = Math.abs(a.row - b.row);
  const numberOfStraightSegments = Math.abs(colOffset - rowOffset);
  const numberOfDiagonalSegments = Math.max(colOffset, rowOffset) - numberOfStraightSegments;

  return numberOfStraightSegments * 10 + numberOfDiagonalSegments * 14;
}

const getMinOfGrid = (cells: IPath, grid: ICell[][]): ICoordinates => {
  let result: ICoordinates = { row: 0, col: 0 };
  let fCostMin: number = Number.MAX_SAFE_INTEGER;
  let hCostMin: number = Number.MAX_SAFE_INTEGER;
  grid.forEach((row: ICell[], rowIndex: number) => {
    row.forEach((_: ICell, colIndex: number) => {
      const cell = cells[rowIndex][colIndex] !== undefined ?
        cells[rowIndex][colIndex] :
        undefined;

      if (!!cell && !cell.closed && (cell.fCost < fCostMin || cell.fCost === fCostMin && cell.hCost < hCostMin)) {
        fCostMin = cell.fCost;
        hCostMin = cell.hCost;
        result = { col: colIndex, row: rowIndex };
      }
    });
  });

  if (fCostMin === Number.MAX_SAFE_INTEGER) {
    throw new Error('Count not locate a minimum');
  }

  return result;
}

export const computePath = (grid: ICell[][], start: ICoordinates, end: ICoordinates) => {
  const calculateNeighbors = () => coordinatesToCheck.forEach(({ col, row }) => {
    const c: ICoordinates = { col: col + currentCell.col, row: row + currentCell.row };

    if (
      calculatedCells[c.row] &&
      grid[c.row] &&
      !calculatedCells[c.row][c.col] &&
      grid[c.row][c.col]?.status !== 'blocked') {
      const gCost = getDistance(c, start);
      const hCost = getDistance(c, end);
      calculatedCells[c.row][c.col] = {
        gCost,
        hCost,
        fCost: gCost + hCost,
        closed: false
      };
    }
  });
  
  const calculatedCells: IPath = generateGrid<IVisitedCell | undefined>(grid.length, grid[0].length, undefined);
  let currentCell = start;
  while (!isEqual(currentCell, end)) {
    calculateNeighbors();
    currentCell = getMinOfGrid(calculatedCells, grid);
    calculatedCells[currentCell.row][currentCell.col]!.closed = true;
  }

  return calculatedCells;
};
