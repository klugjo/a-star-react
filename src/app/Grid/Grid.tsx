import React from 'react';
import cn from 'classnames';
import { ICell, ICoordinates } from '../../typings';

interface IGridProps {
  grid: ICell[][];
  setCellAsBlocked: (coordinates: ICoordinates) => void;
}

const Grid: React.FC<IGridProps> = ({
  grid,
  setCellAsBlocked
}) => {
  return (
    <div className="grid-root">
      <table className="grid-table">
        <tbody>
          {grid.map((row: ICell[], rowIndex: number) => <tr key={rowIndex}>
            {row.map((cell: ICell, colIndex: number) => <td
              key={`${rowIndex}-${colIndex}`}
              className={cn('grid-cell', cell.status)}
              onClick={() => setCellAsBlocked({ row: rowIndex, col: colIndex })}
            />)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
