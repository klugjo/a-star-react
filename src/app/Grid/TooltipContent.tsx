import React from 'react';
import { IVisitedCell } from '../../typings';

import styles from './Grid.module.css';

interface ITooltipContentProps {
  cell: IVisitedCell;
}

const getLabel = (cell: IVisitedCell) => {
  if (cell.isPath) {
    return 'Optimal Path';
  } else if (cell.isClosed) {
    return 'Considered for the optimal path';
  } else {
    return 'Computed but never considered';
  }
}

const TooltipContent: React.FC<ITooltipContentProps> = ({
  cell
}) => {
  return <div className={styles.tooltipRoot}>
    <table>
      <tbody>
        <tr>
          <td colSpan={2}><b>{getLabel(cell)}</b></td>
        </tr>
        <tr>
          <td>Distance from Start</td>
          <td>{cell.gCost}</td>
        </tr>
        <tr>
          <td>Distance to End</td>
          <td>{cell.hCost}</td>
        </tr>
        <tr>
          <td>Sum of the Two</td>
          <td>{cell.fCost}</td>
        </tr>
        <tr>
          <td>Steps to reach</td>
          <td>{cell.counter}</td>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default TooltipContent;
