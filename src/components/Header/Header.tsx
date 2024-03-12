import React, { useState } from 'react';

import { Box, Typography, Menu, MenuItem } from '@mui/material';
import { StyledAppBar, StyledToolbar, StyledBox, StyledHamburgerIcon, StyledNavItemsContainer, StyledNavItem, StyledLoginContainer, StyledLoginButton, TitleTypography, StyledContainer } from './HeaderStyles';

import companyLogo from '../../assets/company-logo.png';
import currencyIcon from '../../assets/currency-icon.svg';
import languageIcon from '../../assets/language-icon.svg';

import headerConfig from '../../data/headerConfig.json';
import { useTranslation } from 'react-i18next';

const { logo, supportedLanguages, supportedCurrencies } = headerConfig;



const Header = () => {
  const [languageAnchor, setLanguageAnchor] = useState<HTMLDivElement | null>(null);
  const [currencyAnchor, setCurrencyAnchor] = useState<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(supportedLanguages[0].langName);

  const { i18n, t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageChange = (language: {key: string, langName: string}) => {
    setSelectedLanguage(language.langName);
    setLanguageAnchor(null);
    i18n.changeLanguage(language.key);
    console.log(language)
    console.log(i18n.store);

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
                {selectedLanguage}
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
              <img src={currencyIcon} alt="currency" />
              <Typography variant="caption" className="currency-text">
                {supportedCurrencies.length > 0 ? supportedCurrencies[0] : 'USD'}
              </Typography>
            </StyledNavItem>
            <Menu anchorEl={currencyAnchor} open={Boolean(currencyAnchor)} onClose={handleClose}>
              {supportedCurrencies.map((currency, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {currency}
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
