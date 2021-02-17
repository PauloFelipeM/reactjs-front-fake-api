import React from 'react';
import PropTypes from 'prop-types';

import { Container, NavPaginator, UlPaginator, LinkPaginator } from './styles';

function Paginator({ pageClick, page }) {
  return (
    <Container>
      <NavPaginator>
        <UlPaginator>
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <LinkPaginator tabIndex="-1" onClick={() => pageClick(page - 1)}>
              Anterior
            </LinkPaginator>
          </li>
          {page > 1 && (
            <li className="page-item">
              <LinkPaginator onClick={() => pageClick(page - 1)}>
                {String(page - 1)}
              </LinkPaginator>
            </li>
          )}
          <li className="page-item active">
            <LinkPaginator>{String(page)}</LinkPaginator>
          </li>
          <li className="page-item">
            <LinkPaginator onClick={() => pageClick(page + 1)}>
              {String(page + 1)}
            </LinkPaginator>
          </li>
          <li className="page-item">
            <LinkPaginator onClick={() => pageClick(page + 1)}>
              Próxima
            </LinkPaginator>
          </li>
        </UlPaginator>
      </NavPaginator>
    </Container>
  );
}

export default Paginator;

Paginator.propTypes = {
  pageClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
