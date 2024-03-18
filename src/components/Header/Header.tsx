import React, { useEffect, useState } from 'react';

import { Box, Typography, Menu, MenuItem } from '@mui/material';
import { StyledAppBar, StyledToolbar, StyledBox, StyledHamburgerIcon, StyledNavItemsContainer, StyledNavItem, StyledLoginContainer, StyledLoginButton, TitleTypography, StyledContainer } from './HeaderStyles';

import companyLogo from '../../assets/company-logo.png';
import languageIcon from '../../assets/language-icon.svg';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeRates, selectCurrency } from '../../redux/slices/currencySlice';
import { AppDispatch, RootState } from '../../redux/store';
import { changeLanguage } from '../../redux/slices/languageSlice';
import { fetchHeaderConfig } from '../../redux/slices/configSlice';
import { ICurrency } from '../../types/ICurrency';


const Header = () => {
  const [languageAnchor, setLanguageAnchor] = useState<HTMLDivElement | null>(null);
  const [currencyAnchor, setCurrencyAnchor] = useState<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const dispatch = useDispatch<AppDispatch>();
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const headerConfig = useSelector((state: RootState) => state.config.headerConfig);
  const loading = useSelector((state: RootState) => state.config.loading);
  const error = useSelector((state: RootState) => state.config.error);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);
  const selectedCurrencySymbol = useSelector((state: RootState) => state.currency.selectedCurrencySymbol);

  const { logo, supportedLanguages, supportedCurrencies } = headerConfig;
  
  const { i18n, t } = useTranslation();

  useEffect(() => {
    dispatch(fetchHeaderConfig());
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  if (loading) {
    return <div>{t('landingPage.loading')}...</div>;
  }

  if (error) {
    return <div>{t('landingPage.error')}: {error}</div>;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageChange = (language: {key: string, langName: string}) => {
    dispatch(changeLanguage(language));
    setLanguageAnchor(null);
    i18n.changeLanguage(language.key);
  };

  const handleCurrencyChange = (currency: ICurrency) => {
    dispatch(selectCurrency(currency)); 
    setCurrencyAnchor(null);

  };

  const handleCurrencyClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurrencyAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setLanguageAnchor(null);
    setCurrencyAnchor(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth={false}>
        <StyledToolbar disableGutters>
          <StyledBox onClick={() => window.location.href = '/'}>
            <Box>
              <img src={logo || companyLogo} alt="logo" className="logo-icon" />
            </Box>
            <TitleTypography variant="h6" noWrap className="booking-engine-text">
              {t('description.headerTitle')}
            </TitleTypography>
          </StyledBox>

          <StyledHamburgerIcon onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6H22M2 12H22M2 18H22" stroke="#26266D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </StyledHamburgerIcon>

          <StyledNavItemsContainer className={`nav-items-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <StyledNavItem onClick={handleLanguageClick}>
              <img src={languageIcon} alt="language" />
              <Typography variant="caption" className="language-text">
                {selectedLanguage.langName}
              </Typography>
            </StyledNavItem>
            <Menu anchorEl={languageAnchor} open={Boolean(languageAnchor)} onClose={handleClose}>
              {supportedLanguages.length > 0 && supportedLanguages.map((language, index) => (
                <MenuItem key={index} onClick={() => handleLanguageChange(language)}>
                  {language.langName}
                </MenuItem>
              ))}
            </Menu>

            <StyledNavItem onClick={handleCurrencyClick}>
              <Typography variant="caption" className="currency-text">
                {selectedCurrencySymbol} {selectedCurrency}
              </Typography>
            </StyledNavItem>
            <Menu anchorEl={currencyAnchor} open={Boolean(currencyAnchor)} onClose={handleClose}>
              {supportedCurrencies.map((supportedCurrency, index) => (
                <MenuItem key={index} onClick={() => handleCurrencyChange(supportedCurrency)}>
                  {supportedCurrency.currencySymbol} {supportedCurrency.currency}
                </MenuItem>
              ))}
            </Menu>

            <StyledLoginContainer>
              <StyledLoginButton variant="contained" color="primary">
                {t('description.login')}
              </StyledLoginButton>
            </StyledLoginContainer>
          </StyledNavItemsContainer>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Header;