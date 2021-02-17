import styled from 'styled-components';
import { Col } from 'reactstrap';

export const Container = styled.div.attrs({
  className: 'container',
})`
  margin-top: 25px;

  span {
    color: #bf2626;
  }
`;

export const Label = styled.label``;

export const ColBtns = styled(Col)`
  display: flex;
  justify-content: space-between;
`;
