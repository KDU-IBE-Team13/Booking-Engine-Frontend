import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { FooterContainer, Logo, CompanyInfo } from './FooterStyles';

import companyLogoWhite from '../../assets/company-logo-white.png';
import footerConfig from '../../data/footerConfig.json';

const { logo, companyName } = footerConfig;


const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Logo src={logo || companyLogoWhite} alt="logo" />
          </Box>

          <Box>
            <CompanyInfo variant="body2">
              © {companyName} <br />
              All rights reserved.
            </CompanyInfo>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
