import React from 'react';
import cn from 'classnames';
import { ICell, ICoordinates } from '../../typings';

import styles from './Grid.module.css';

interface IGridProps {
  grid: ICell[][];
  setCellAsBlocked: (coordinates: ICoordinates) => void;
}

const Grid: React.FC<IGridProps> = ({
  grid,
  setCellAsBlocked
}) => {
  return (
    <div className={styles.gridRoot}>
      <table className={styles.gridTable}>
        <tbody>
          {grid.map((row: ICell[], rowIndex: number) => <tr key={rowIndex}>
            {row.map((cell: ICell, colIndex: number) => <td
              key={`${rowIndex}-${colIndex}`}
              className={cn(styles.gridCell, styles[cell.status])}
              onClick={() => setCellAsBlocked({ row: rowIndex, col: colIndex })}
            />)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
