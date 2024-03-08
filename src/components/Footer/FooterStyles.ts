import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const FooterContainer = styled.footer`
  background-color: #26266d;
  color: white;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

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
