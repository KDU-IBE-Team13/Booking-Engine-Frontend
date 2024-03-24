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

  @media screen and (max-width: 570px){
    && {
      padding: 0 1.8rem;
    }
  }
`

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;

  @media screen and (max-width: 570px){
    && {
      width: 95px;
      height: auto;
      margin-right: 10px;
    }
  }
`;

export const CompanyInfo = styled(Typography)`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: right;
`;
