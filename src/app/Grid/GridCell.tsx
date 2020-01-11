import React from 'react';
import cn from 'classnames';
import { ICoordinates, IPath, ICell } from '../../typings';
import { Tooltip } from '@blueprintjs/core';
import TooltipContent from './TooltipContent';

import styles from './Grid.module.css';

interface IGridCellProps {
  cell: ICell;
  rowIndex: number;
  colIndex: number;
  start: ICoordinates;
  end: ICoordinates;
  path?: IPath
  setCellAsBlocked: (coords: ICoordinates) => void;
  isPressed: boolean;
  onCellClick: (rowIndex: number, colInde: number) => () => void;
}

const GridCell: React.FC<IGridCellProps> = ({
  cell,
  rowIndex,
  colIndex,
  start,
  end,
  path,
  setCellAsBlocked,
  isPressed,
  onCellClick
}) => {
  const isClosed = path && path[rowIndex][colIndex]?.isClosed;
  const isPath = path && path[rowIndex][colIndex]?.isPath;
  const isChecked = path && path[rowIndex][colIndex]?.fCost !== 0;
  const animationOffset = path ? path[rowIndex][colIndex]?.counter : 0;

  return <td
    key={`${rowIndex}-${colIndex}`}
    className={cn(
      styles.gridCell,
      styles[cell.status],
      { [styles.start]: rowIndex === start.x && colIndex === start.y },
      { [styles.end]: rowIndex === end.x && colIndex === end.y },
      { [styles.closed]: isClosed },
      { [styles.checked]: isChecked },
      { [styles.path]: isPath },
    )}
    onMouseEnter={() => {
      if (isPressed) {
        setCellAsBlocked({ x: rowIndex, y: colIndex });
      }
    }}
    onClick={onCellClick(rowIndex, colIndex)}
    style={{ animationDelay: animationOffset ? `${animationOffset * 10}ms` : undefined }}
  >
    {
      (path && (isClosed || isChecked || isPath)) ?
      <Tooltip
        className={styles.gridTooltip}
        content={<TooltipContent cell={path[rowIndex][colIndex]!} />}>
          <div className={styles.gridTooltip} style={{ color: 'transparent' }} />
        </Tooltip> :
      null
    }
  </td>;
}

export default React.memo(GridCell);