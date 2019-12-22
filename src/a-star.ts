import { range } from 'lodash';
import { ICell } from './typings';

export const createGrid = (numberOfRows: number, numberOfColumns: number): ICell[][] => {
  return range(numberOfRows).map(() =>
    range(numberOfColumns).map(() => ({
      status: 'empty'
    })));
};
