import React from 'react';
import PropTypes from 'prop-types';

import { Container, Status, SpinnerLoader } from './styles';

const Loader = ({ color, isButton }) => {
  return (
    <Container>
      <Status isbutton={isButton}>
        <SpinnerLoader color={color} isbutton={isButton} />
      </Status>
    </Container>
  );
};

export default Loader;

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  isButton: PropTypes.string,
};

Loader.defaultProps = {
  isButton: '',
};
