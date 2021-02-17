import styled from 'styled-components';

export const Container = styled.div``;

export const NavPaginator = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlPaginator = styled.ul.attrs({ className: 'pagination' })``;

export const LinkPaginator = styled.a.attrs({
  className: 'page-link',
  href: '#',
})``;
