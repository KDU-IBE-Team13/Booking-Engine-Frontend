import { Box } from '@mui/material';
import { FooterContainer, Logo, CompanyInfo, StyledContainer } from './FooterStyles';
import companyLogoWhite from '../../assets/company-logo-white.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useEffect } from 'react';
import { fetchFooterConfig } from '../../redux/slices/configSlice';

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const footerConfig = useSelector((state: RootState) => state.config.footerConfig);
  const loading = useSelector((state: RootState) => state.config.loading);
  const error = useSelector((state: RootState) => state.config.error);
  const { logo, companyName } = footerConfig;

  useEffect(() => {
    dispatch(fetchFooterConfig());
  }, [dispatch]);

  if (loading) {
    return <div>{t('landingPage.loading')}...</div>;
  }

  if (error) {
    return <div>{t('landingPage.error')}: {error}</div>;
  }

  return (
    <FooterContainer>
    <StyledContainer maxWidth={false}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Logo data-testid="logo" src={logo || companyLogoWhite} alt="logo" />
        </Box>
  
        <Box>
          <CompanyInfo variant="body2">
            <span data-testid="company-name">© {companyName}</span> <br />
            <span data-testid="description">{t('description.footer')}</span>
          </CompanyInfo>
        </Box>
      </Box>
    </StyledContainer>
  </FooterContainer>
  
  );
};

export default Footer;