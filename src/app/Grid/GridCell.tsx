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
  path: IPath
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
  const isClosed = path[rowIndex][colIndex]?.closed;
  const isChecked = !!path[rowIndex][colIndex]?.fCost;
  const gCost = path[rowIndex][colIndex]?.gCost;

  return <td
    key={`${rowIndex}-${colIndex}`}
    className={cn(
      styles.gridCell,
      styles[cell.status],
      { [styles.start]: rowIndex === start.row && colIndex === start.col },
      { [styles.end]: rowIndex === end.row && colIndex === end.col },
      { [styles.closed]: isClosed },
      { [styles.checked]: isChecked },
    )}
    onMouseEnter={() => {
      if (isPressed) {
        setCellAsBlocked({ row: rowIndex, col: colIndex });
      }
    }}
    onClick={onCellClick(rowIndex, colIndex)}
    style={{ animationDelay: gCost ? `${gCost * 5}ms` : undefined }}
  >
    {
      (isClosed || isChecked) ?
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