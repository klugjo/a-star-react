import React from 'react';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';
import { Mode, IPreset } from '../../typings';
import SettingsModal from './SettingsModal';

import styles from './Controls.module.css';

interface IGridProps {
  mode: Mode;
  preset: IPreset;
  setMode: (mode: Mode) => void;
  calculatePath: () => void;
  clearGrid: () => void;
  changePreset: (preset: IPreset) => void;
}

const Grid: React.FC<IGridProps> = ({
  mode,
  preset,
  setMode,
  calculatePath,
  clearGrid,
  changePreset
}) => {
  return (
    <div className={styles.root}>
      <div>
        <ButtonGroup>
          <Button
            text="Set Start"
            icon={<Icon icon="stop" color="#4dd276" />}
            active={mode === Mode.setStart}
            onClick={() => setMode(mode === Mode.setStart ? Mode.draw : Mode.setStart)}
            style={{ outline: 0 }}
          />
          <Button
            text="Set End"
            icon={<Icon icon="stop" color="#EC605B" />}
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
            text="Start"
            icon={<Icon icon="play" color="#BBBBBB" iconSize={14} />}
            onClick={calculatePath}
            style={{ outline: 0 }}
          />
          <Button
            text="Reset"
            icon={<Icon icon="cross" color="#BBBBBB" iconSize={14} />}
            onClick={clearGrid}
            style={{ outline: 0 }}
          />
        </ButtonGroup>
        <SettingsModal
          preset={preset}
          changePreset={changePreset}
        />
      </div>
    </div >
  );
};

export default Grid;
