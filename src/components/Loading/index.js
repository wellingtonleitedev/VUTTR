import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Overlay, Content } from './styles';

export function Loading({ show }) {
  return (
    <Overlay loading={show}>
      <Content>
        <FaSpinner className="pulse" size={50} color="#FFF" />
      </Content>
    </Overlay>
  );
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
};
