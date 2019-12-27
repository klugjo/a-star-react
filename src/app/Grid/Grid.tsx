import React, { useState, useEffect } from 'react';
import { ICell, ICoordinates, Mode, IVisitedCell, IPath } from '../../typings';
import GridCell from './GridCell';

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
  const onCellClick = (rowIndex: number, colIndex: number) => () => {
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
            {row.map((cell: ICell, colIndex: number) => <GridCell
              {...{
                key: `${rowIndex}-${colIndex}`,
                cell,
                rowIndex,
                colIndex,
                start,
                end,
                path,
                setCellAsBlocked,
                isPressed,
                onCellClick
              }}
            />)}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
