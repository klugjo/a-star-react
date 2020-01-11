import React, { useState } from 'react';
import { Button, ButtonGroup, Icon, Dialog } from '@blueprintjs/core';
import { Mode } from '../../typings';

import styles from './Controls.module.css';

interface ISettingsModalProps {
}

const SettingsModal: React.FC<ISettingsModalProps> = ({
}) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ButtonGroup className={styles.buttonGroup}>
        <Button
          text="Info"
          icon={<Icon icon="info-sign" color="#8293AE" iconSize={14} />}
          onClick={() => setOpen(true)}
          style={{ outline: 0 }}
        />
      </ButtonGroup>
      <Dialog
        icon="info-sign"
        onClose={() => setOpen(false)}
        title="A Star Pathfinding React Demo"
        isOpen={isOpen}
      >
        <div>dsfjsdfsdfsdfsdfsdf</div>
      </Dialog>
    </>
  );
};

export default SettingsModal;
