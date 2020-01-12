import { range, minBy, remove } from 'lodash';
import { ICoordinates, ICell, IVisitedCell } from './typings';

const generateGrid = <T extends { x: number; y: number; }>(numberOfRows: number, numberOfColumns: number, value: T): T[][] => {
  return range(numberOfRows).map((x) =>
    range(numberOfColumns).map((y) => ({ ...value, x, y })));
};

const coordinatesToCheck: ICoordinates[] = [
  { y: 0, x: -1 },
  { y: 1, x: -1 },
  { y: 1, x: 0 },
  { y: 1, x: 1 },
  { y: 0, x: 1 },
  { y: -1, x: 1 },
  { y: -1, x: 0 },
  { y: -1, x: -1 },
];

const getDistance = (a: ICoordinates | IVisitedCell, b: ICoordinates | IVisitedCell) => {
  const colOffset = Math.abs(a.y - b.y);
  const rowOffset = Math.abs(a.x - b.x);
  const numberOfStraightSegments = Math.abs(colOffset - rowOffset);
  const numberOfDiagonalSegments = Math.max(colOffset, rowOffset) - numberOfStraightSegments;

  return numberOfStraightSegments * 10 + numberOfDiagonalSegments * 14; // 14 ~ 10 * sqrt(2)
}

export const computePath = (mainGrid: ICell[][], start: ICoordinates, end: ICoordinates): IVisitedCell[][] => {
  const gridLength = mainGrid.length;
  let counter = 0;
  let openList: IVisitedCell[] = [];
  const grid = generateGrid<IVisitedCell>(gridLength, gridLength, {
    fCost: 0,
    gCost: 0,
    hCost: 0,
    parent: undefined,
    isClosed: false,
    isPath: false,
    counter: 0,
    x: 0,
    y: 0
  });

  openList.push(grid[start.x][start.y]);

  while (openList.length > 0) {
    const currentCell = minBy(openList, c => c.fCost);

    if (!currentCell) {
      // No path found
      return grid;
    }

    if (currentCell.x === end.x && currentCell.y === end.y) {
      let curr = currentCell;

      while (curr.parent) {
        grid[curr.x][curr.y].isPath = true;
        curr = curr.parent;
      }

      return grid;
    }

    remove(openList, c => (c.x === currentCell.x && c.y === currentCell.y));
    currentCell.isClosed = true;

    // eslint-disable-next-line no-loop-func
    coordinatesToCheck.forEach(coordinatesToCheck => {
      const { x, y }: ICoordinates = { x: currentCell.x + coordinatesToCheck.x, y: currentCell.y + coordinatesToCheck.y };
      
      if (
        x < 0 ||
        x >= gridLength ||
        y < 0 ||
        y >= gridLength
        || (start.x === x && start.y === y) ||
        grid[x][y].isClosed ||
        mainGrid[x][y].status === 'blocked') {
        return;
      }
      
      const neighborCell = grid[x][y];

      const gCost = currentCell.gCost + getDistance(currentCell, neighborCell);
      let gCostIsBest = false;

      if (!openList.find(c => c.x === x && c.y === y)) {
        gCostIsBest = true;
        neighborCell.hCost = getDistance(neighborCell, end);
        openList.push(neighborCell);
      } else if (gCost < neighborCell.gCost) {
        gCostIsBest = true;
      }

      if (gCostIsBest) {
        neighborCell.parent = currentCell;
        neighborCell.gCost = gCost;
        neighborCell.fCost = neighborCell.gCost + neighborCell.hCost;
        counter = counter + 1;
        neighborCell.counter = counter;
      }
    });
  }
  // No path found
  return grid;
};

