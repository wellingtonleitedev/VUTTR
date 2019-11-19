import React, { useState, useMemo } from 'react';
import { Overlay, Content, ModalHeader } from './styles';
import { FaTimes } from 'react-icons/fa';
import { IconButton } from '../';

export function Modal({ open, header, children, onClose }) {
  const [situation, setSituation] = useState(open);

  useMemo(() => {
    setSituation(open);
  }, [open]);

  const handleModal = () => {
    setSituation(!open);
    onClose();
  };

  return (
    <Overlay onClose={onClose} modalOpen={situation}>
      <Content>
        <ModalHeader>
          {header}
          <IconButton onClick={handleModal} color="transparent">
            <FaTimes color="#365df0" size={13} />
          </IconButton>
        </ModalHeader>
        {children}
      </Content>
    </Overlay>
  );
}
