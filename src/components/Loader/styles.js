import styled from 'styled-components';

import { Spinner } from 'reactstrap';

export const Container = styled.div.attrs({
  className: 'preloader',
})``;

export const Status = styled.div.attrs({
  className: 'status',
})`
  text-align: center;
  margin: ${(props) => (props.isbutton ? '0' : '15px 0')};
`;

export const SpinnerLoader = styled(Spinner)`
  width: ${(props) => (props.isbutton ? '20px' : '2rem')};
  height: ${(props) => (props.isbutton ? '20px' : '2rem')};
`;
