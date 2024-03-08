import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './Footer.scss';

import companyLogoWhite from '../../assets/company-logo-white.png';
import footerConfig from '../../data/footerConfig.json';

const { logo, companyName } = footerConfig;


function Footer() {

  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <img src={logo || companyLogoWhite} className="logo" alt="logo"/>
          </Box>

          <Box>
            <Typography variant="body2" className="company-info">
              © {companyName} <br />
              All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
