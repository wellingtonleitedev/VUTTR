import React, { useState, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Overlay, Content, ModalHeader } from './styles';
import { IconButton } from '..';

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
          <IconButton
            onClick={handleModal}
            color="transparent"
            icon={<FaTimes color="#365df0" size={13} />}
          />
        </ModalHeader>
        {children}
      </Content>
    </Overlay>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
