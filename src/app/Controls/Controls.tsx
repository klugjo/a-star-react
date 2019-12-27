import React from 'react';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { Mode } from '../../typings';

import styles from './Controls.module.css';

interface IGridProps {
  mode: Mode;
  width: number;
  height: number;
  setMode: (mode: Mode) => void;
  calculatePath: () => void;
  clearGrid: () => void;
  changeGridSize: (size: { width: number, height: number }) => void;
}

const Grid: React.FC<IGridProps> = ({
  mode,
  width,
  height,
  setMode,
  calculatePath,
  clearGrid,
  changeGridSize
}) => {
  const SizeSelect = Select.ofType<{ width: number, height: number }>();

  return (
    <div className={styles.root}>
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
          text="Go"
          onClick={calculatePath}
          style={{ outline: 0 }}
        />
        <Button
          text="Clear"
          onClick={clearGrid}
          style={{ outline: 0 }}
        />
        <SizeSelect
          filterable={false}
          items={[
            { width: 32, height: 32 },
            { width: 64, height: 64 },
            { width: 128, height: 128 },
          ]}
          itemRenderer={(item: { width: number, height: number }) => <div
            className={styles.listItem}
            key={`${item.width}${item.height}`}
            onClick={() => changeGridSize(item)}
          >
            {`${item.width} x ${item.height}`}
          </div>}
          onItemSelect={(item: { width: number, height: number }) => changeGridSize(item) }
        >
          <Button
            text={`${width} x ${height}`}
            onClick={clearGrid}
            style={{ outline: 0 }}
          />
        </SizeSelect>
      </ButtonGroup>
    </div>
  );
};

export default Grid;
