import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledAppBar, StyledToolbar, StyledBox, StyledHamburgerIcon, StyledNavItemsContainer, StyledNavItem, StyledLoginContainer, StyledLoginButton } from './HeaderStyles';

import companyLogo from '../../assets/company-logo.png';
import currencyIcon from '../../assets/currency-icon.svg';
import languageIcon from '../../assets/language-icon.svg';

import headerConfig from '../../data/headerConfig.json';

const { logo, supportedLanguages, supportedCurrencies } = headerConfig;



const Header = () => {
  const [languageAnchor, setLanguageAnchor] = useState<HTMLDivElement | null>(null);
  const [currencyAnchor, setCurrencyAnchor] = useState<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setLanguageAnchor(event.currentTarget);
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
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <StyledBox onClick={() => window.location.href = '/'}>
            <img src={logo || companyLogo} alt="logo" className="logo-icon" />
            <Typography variant="h6" noWrap className="booking-engine-text">
              Internet Booking Engine
            </Typography>
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
                {supportedLanguages.length > 0 ? supportedLanguages[0] : 'En'}
              </Typography>
            </StyledNavItem>
            <Menu anchorEl={languageAnchor} open={Boolean(languageAnchor)} onClose={handleClose}>
              {supportedLanguages.map((language, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {language}
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
                Login
              </StyledLoginButton>
            </StyledLoginContainer>
          </StyledNavItemsContainer>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
