import React from 'react';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';
import { Mode } from '../../typings';

import styles from './Controls.module.css';

interface IGridProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  calculatePath: () => void;
  clearGrid: () => void;
}

const Grid: React.FC<IGridProps> = ({
  mode,
  setMode,
  calculatePath,
  clearGrid,
}) => {
  return (
    <div className={styles.root}>
      <div>
        <ButtonGroup>
          <Button
            text="Set Start"
            icon={<Icon icon="stop" color="#0F9960" />}
            active={mode === Mode.setStart}
            onClick={() => setMode(mode === Mode.setStart ? Mode.draw : Mode.setStart)}
            style={{ outline: 0 }}
          />
          <Button
            text="Set End"
            icon={<Icon icon="stop" color="#DB3737" />}
            active={mode === Mode.setEnd}
            onClick={() => setMode(mode === Mode.setEnd ? Mode.draw : Mode.setEnd)}
            style={{ outline: 0 }}
          />
          <Button
            text="Draw"
            icon={<Icon icon="stop" color="#BBBBBB" />}
            active={mode === Mode.draw}
            onClick={() => setMode(Mode.draw)}
            style={{ outline: 0 }}
          />
        </ButtonGroup>
        <ButtonGroup className={styles.buttonGroup}>
          <Button
            text="Compute Path"
            icon={<Icon icon="build" color="#182026" iconSize={14} />}
            onClick={calculatePath}
            style={{ outline: 0 }}
          />
          <Button
            text="Clear"
            icon={<Icon icon="cross" color="#182026" iconSize={14} />}
            onClick={clearGrid}
            style={{ outline: 0 }}
          />
        </ButtonGroup>
      </div>
    </div >
  );
};

export default Grid;
