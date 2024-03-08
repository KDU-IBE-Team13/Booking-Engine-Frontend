import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import './Header.scss';

import companyLogo from '../../assets/company-logo.png';
import headerConfig from '../../data/headerConfig.json';

const { logo, supportedLanguages, supportedCurrencies } = headerConfig;


function Header() {
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
    <AppBar position="static" className="nav-header">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header-toolbar">
          <Box className="logo-container" onClick={() => window.location.href = '/'}>
            <img src={logo || companyLogo} alt="logo" className="logo-icon"/>
            <Typography variant="h6" noWrap className="booking-engine-text">
              Internet Booking Engine
            </Typography>
          </Box>

          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6H22M2 12H22M2 18H22" stroke="#26266D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <Box className={`nav-items-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <Box className="nav-item" onClick={handleLanguageClick}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_5085_11800)">
                  <path d="M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668Z" stroke="#26266D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.33325 8H14.6666" stroke="#26266D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99992 1.3335C9.66744 3.15906 10.6151 5.52819 10.6666 8.00016C10.6151 10.4721 9.66744 12.8413 7.99992 14.6668C6.3324 12.8413 5.38475 10.4721 5.33325 8.00016C5.38475 5.52819 6.3324 3.15906 7.99992 1.3335V1.3335Z" stroke="#26266D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5085_11800">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              <Typography variant="caption" className="language-text">
                {supportedLanguages.length > 0
                  ? supportedLanguages[0]
                  : 'En'
                }
              </Typography>
            </Box>
            <Menu
              anchorEl={languageAnchor}
              open={Boolean(languageAnchor)}
              onClose={handleClose}
            >
              {supportedLanguages.map((language, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {language}
                </MenuItem>
              ))}
            </Menu>

            <Box className="nav-item" onClick={handleCurrencyClick}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 7.3335H6.66667C6.31304 7.3335 5.97391 7.19302 5.72386 6.94297C5.47381 6.69292 5.33333 6.35379 5.33333 6.00016C5.33333 5.64654 5.47381 5.3074 5.72386 5.05735C5.97391 4.80731 6.31304 4.66683 6.66667 4.66683H10C10.1768 4.66683 10.3464 4.73707 10.4714 4.86209C10.5964 4.98712 10.6667 5.15669 10.6667 5.3335C10.6667 5.51031 10.7369 5.67988 10.8619 5.8049C10.987 5.92992 11.1565 6.00016 11.3333 6.00016C11.5101 6.00016 11.6797 5.92992 11.8047 5.8049C11.9298 5.67988 12 5.51031 12 5.3335C12 4.80306 11.7893 4.29436 11.4142 3.91928C11.0391 3.54421 10.5304 3.3335 10 3.3335H8.66667V2.00016C8.66667 1.82335 8.59643 1.65378 8.4714 1.52876C8.34638 1.40373 8.17681 1.3335 8 1.3335C7.82319 1.3335 7.65362 1.40373 7.5286 1.52876C7.40357 1.65378 7.33333 1.82335 7.33333 2.00016V3.3335H6.66667C5.95942 3.3335 5.28115 3.61445 4.78105 4.11454C4.28095 4.61464 4 5.29292 4 6.00016C4 6.70741 4.28095 7.38568 4.78105 7.88578C5.28115 8.38588 5.95942 8.66683 6.66667 8.66683H9.33333C9.68696 8.66683 10.0261 8.80731 10.2761 9.05735C10.5262 9.3074 10.6667 9.64654 10.6667 10.0002C10.6667 10.3538 10.5262 10.6929 10.2761 10.943C10.0261 11.193 9.68696 11.3335 9.33333 11.3335H6C5.82319 11.3335 5.65362 11.2633 5.5286 11.1382C5.40357 11.0132 5.33333 10.8436 5.33333 10.6668C5.33333 10.49 5.2631 10.3204 5.13807 10.1954C5.01305 10.0704 4.84348 10.0002 4.66667 10.0002C4.48986 10.0002 4.32029 10.0704 4.19526 10.1954C4.07024 10.3204 4 10.49 4 10.6668C4 11.1973 4.21071 11.706 4.58579 12.081C4.96086 12.4561 5.46957 12.6668 6 12.6668H7.33333V14.0002C7.33333 14.177 7.40357 14.3465 7.5286 14.4716C7.65362 14.5966 7.82319 14.6668 8 14.6668C8.17681 14.6668 8.34638 14.5966 8.4714 14.4716C8.59643 14.3465 8.66667 14.177 8.66667 14.0002V12.6668H9.33333C10.0406 12.6668 10.7189 12.3859 11.219 11.8858C11.719 11.3857 12 10.7074 12 10.0002C12 9.29292 11.719 8.61464 11.219 8.11454C10.7189 7.61445 10.0406 7.3335 9.33333 7.3335Z" fill="#26266D"/>
                </svg>            
              <Typography variant="caption" className="currency-text">
                {supportedCurrencies.length > 0
                  ? supportedCurrencies[0]
                  : 'USD'
                }
              </Typography>
            </Box>
            <Menu
              anchorEl={currencyAnchor}
              open={Boolean(currencyAnchor)}
              onClose={handleClose}
            >
              {supportedCurrencies.map((currency, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {currency}
                </MenuItem>
              ))}
            </Menu>

            <Box className="login-container">
              <Button variant="contained" color="primary" className="login-button">
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
