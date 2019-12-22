import React from 'react';
import cn from 'classnames';
import { ICell } from '../typings';

interface IGridProps {
  grid: ICell[][];
}

const Grid: React.FC<IGridProps> = ({ grid }) => {
  return (
    <div className="grid-root">
      <table className="grid-table">
        {grid.map((row: ICell[]) => <tr>
          {row.map((cell: ICell) => <td className={cn('grid-cell', cell.status)}>
            
          </td>)}
        </tr>)}
      </table>
    </div>
  );
}

export default Grid;
