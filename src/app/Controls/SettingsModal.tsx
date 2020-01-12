import React, { useState } from 'react';
import { Button, ButtonGroup, Icon, Dialog } from '@blueprintjs/core';
import { IPreset } from '../../typings';

import styles from './Controls.module.css';

interface ISettingsModalProps {
  preset: IPreset;
  changePreset: (preset: IPreset) => void;
}

const SettingsModal: React.FC<ISettingsModalProps> = ({
  preset,
  changePreset
}) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ButtonGroup className={styles.buttonGroup}>
        <Button
          data-testid="settings-modal-test-id"
          text="Info"
          icon={<Icon icon="info-sign" color="#BBBBBB" iconSize={14} />}
          onClick={() => setOpen(true)}
          style={{ outline: 0 }}
        />
      </ButtonGroup>
      <Dialog
        className={styles.modalRoot}
        onClose={() => setOpen(false)}
        title="A Star Pathfinding React Demo"
        isOpen={isOpen}
      >
        <div className={styles.modalContent}>
          <div className={styles.section}>
            <h3>How does it work ?</h3>
            <ul>
              <li>Press start to compute the path</li>
              <li>Hover over the cells to see more details about the result</li>
              <li>Use the set start/end and draw button to change the obstacles</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>Change Pattern</h3>
            <ButtonGroup>
              {
                ([
                  { preset: 'a-star-text', text: 'A-Star Text' },
                  { preset: 'labyrinth', text: 'Labyrinth' },
                  { preset: 'random', text: 'Random' },
                  { preset: 'blank', text: 'Blank Canvas' },
                ] as { preset: IPreset, text: string }[]).map(item => (
                  <Button
                    key={item.preset}
                    text={item.text}
                    active={preset === item.preset}
                    onClick={() => changePreset(item.preset)}
                    style={{ outline: 0 }}
                  />
                ))
              }
            </ButtonGroup>
          </div>
          <div className={styles.section}>
            <h3>Ressources I found useful</h3>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-L-WgKMFuhE">Sebastian Lague's Youtube Video</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://briangrinstead.com/blog/astar-search-algorithm-in-javascript/">Brian Grinstead's blog article</a></li>
            </ul>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SettingsModal;
