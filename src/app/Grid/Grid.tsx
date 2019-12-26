import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ICell, ICoordinates, Mode, IVisitedCell, IPath } from '../../typings';

import styles from './Grid.module.css';

interface IGridProps {
  grid: ICell[][];
  start: ICoordinates;
  end: ICoordinates;
  mode: Mode;
  path: IPath;
  setCellAsBlocked: (coordinates: ICoordinates) => void;
  setStart: (coordinates: ICoordinates) => void;
  setEnd: (coordinates: ICoordinates) => void;
}

const Grid: React.FC<IGridProps> = ({
  end,
  grid,
  mode,
  setCellAsBlocked,
  setEnd,
  setStart,
  start,
  path
}) => {
  const onClick = (rowIndex: number, colIndex: number) => () => {
    if (mode === Mode.draw) {
      setCellAsBlocked({ row: rowIndex, col: colIndex });
    } else if (mode === Mode.setStart) {
      setStart({ row: rowIndex, col: colIndex });
    } else if (mode === Mode.setEnd) {
      setEnd({ row: rowIndex, col: colIndex });
    }
  };

  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    document.addEventListener('mousedown', () => setIsPressed(true));
    return () => {
      document.addEventListener('mouseup', () => setIsPressed(false));
    }
  });

  return (
    <div className={styles.gridRoot}>
      <table className={styles.gridTable}>
        <tbody>
          {grid.map((row: ICell[], rowIndex: number) => <tr key={rowIndex}>
            {row.map((cell: ICell, colIndex: number) => <td
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                styles.gridCell,
                styles[cell.status],
                { [styles.start]: rowIndex === start.row && colIndex === start.col },
                { [styles.end]: rowIndex === end.row && colIndex === end.col },
                { [styles.closed]: path[rowIndex][colIndex]?.closed  },
                { [styles.checked]: !!path[rowIndex][colIndex]?.fCost },
              )}
              onMouseEnter={() => {
                if (isPressed) {
                  setCellAsBlocked({ row: rowIndex, col: colIndex });
                }
              }}
              onClick={onClick(rowIndex, colIndex)}
            />)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
