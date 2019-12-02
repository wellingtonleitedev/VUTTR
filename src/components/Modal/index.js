import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Overlay, Content, ModalHeader } from './styles';
import { IconButton } from '..';
import { handleModal } from '../../store/modules/modal/actions';

export function Modal({ open, header, children }) {
  const dispatch = useDispatch();

  return (
    <Overlay modalOpen={open}>
      <Content>
        <ModalHeader>
          {header}
          <IconButton
            onClick={() => dispatch(handleModal(false))}
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
};
