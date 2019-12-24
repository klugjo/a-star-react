import React from 'react';
import cn from 'classnames';
import { ICell, ICoordinates } from '../../typings';
import { Button, ButtonGroup } from '@blueprintjs/core';

import styles from './Controls.module.css';

interface IGridProps {

}

const Grid: React.FC<IGridProps> = ({
}) => {
  return (
    <div className={styles.root}>
      <ButtonGroup>
        <Button text="Set Start" active={true} />
        <Button text="Set End" />
      </ButtonGroup>
    </div>
  );
};

export default Grid;
