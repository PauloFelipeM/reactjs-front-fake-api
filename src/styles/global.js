import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @media(min-width: 992px){
    .container {
      max-width: 992px;
    }
  }
`;
