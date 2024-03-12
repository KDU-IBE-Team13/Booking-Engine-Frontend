import Box from '@mui/material/Box';
import { FooterContainer, Logo, CompanyInfo, StyledContainer } from './FooterStyles';

import companyLogoWhite from '../../assets/company-logo-white.png';
import footerConfig from '../../data/footerConfig.json';

import { useTranslation } from 'react-i18next';

const { logo, companyName } = footerConfig;


const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <StyledContainer maxWidth={false}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Logo src={logo || companyLogoWhite} alt="logo" />
          </Box>

          <Box>
            <CompanyInfo variant="body2">
              © {companyName} <br />
              {t('description.footer')}
            </CompanyInfo>
          </Box>
        </Box>
      </StyledContainer>
    </FooterContainer>
  );
};

export default Footer;
