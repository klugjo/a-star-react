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
          <td>g cost</td>
          <td>{cell.gCost}</td>
        </tr>
        <tr>
          <td>h cost</td>
          <td>{cell.hCost}</td>
        </tr>
        <tr>
          <td>f cost</td>
          <td>{cell.fCost}</td>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default TooltipContent;
