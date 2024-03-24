import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

export const FooterContainer = styled.footer`
  background-color: #26266d;
  color: white;
  padding: 20px 0;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 999;
`;

export const StyledContainer = styled (Container)`
  && {
    padding: 0 5rem;
  }
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
`;

export const CompanyInfo = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: right;
`;
