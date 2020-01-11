import React, { useState, useEffect } from 'react';
import { ICell, ICoordinates, Mode, IVisitedCell, IPath } from '../../typings';
import GridCell from './GridCell';
import cn from 'classnames';

import styles from './Grid.module.css';

interface IGridProps {
  grid: ICell[][];
  start: ICoordinates;
  end: ICoordinates;
  mode: Mode;
  path?: IPath;
  setCellAsBlocked: (coordinates: ICoordinates) => void;
  setStart: (coordinates: ICoordinates) => void;
  setEnd: (coordinates: ICoordinates) => void;
}

interface IGridState {
  isPressed: boolean;
}

class Grid extends React.Component<IGridProps, IGridState> {

  constructor(props: IGridProps) {
    super(props);

    this.state = { isPressed: false };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown = () => this.setState({ isPressed: true });
  onMouseUp = () => this.setState({ isPressed: false });

  onCellClick = (rowIndex: number, colIndex: number) => () => {
    const {
      mode,
      setCellAsBlocked,
      setEnd,
      setStart,
    } = this.props;

    if (mode === Mode.draw) {
      setCellAsBlocked({ x: rowIndex, y: colIndex });
    } else if (mode === Mode.setStart) {
      setStart({ x: rowIndex, y: colIndex });
    } else if (mode === Mode.setEnd) {
      setEnd({ x: rowIndex, y: colIndex });
    }
  };

  render() {
    const {
      end,
      grid,
      setCellAsBlocked,
      start,
      path
    } = this.props;

    const { isPressed } = this.state;

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
                  onCellClick: this.onCellClick
                }}
              />)}
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Grid;
