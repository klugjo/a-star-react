import React from 'react';
import { IVisitedCell } from '../../typings';

interface ITooltipContentProps {
  cell: IVisitedCell;
}

const TooltipContent: React.FC<ITooltipContentProps> = ({
  cell
}) => {
  return <div>
    <table>
      <tbody>
        <tr>
          <td>Distance to start</td>
          <td>{cell.gCost}</td>
        </tr>
        <tr>
          <td>Distance to end</td>
          <td>{cell.hCost}</td>
        </tr>
        <tr>
          <td>Sum</td>
          <td>{cell.fCost}</td>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default TooltipContent;
