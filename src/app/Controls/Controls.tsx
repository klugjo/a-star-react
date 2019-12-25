import React from 'react';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';

import styles from './Controls.module.css';

interface IGridProps {

}

const Grid: React.FC<IGridProps> = ({
}) => {
  return (
    <div className={styles.root}>
      <ButtonGroup>
        <Button text="Set Start" icon={<Icon icon="stop" color="#0F9960" />} />
        <Button text="Set End" icon={<Icon icon="stop" color="#DB3737" />} />
      </ButtonGroup>
    </div>
  );
};

export default Grid;
