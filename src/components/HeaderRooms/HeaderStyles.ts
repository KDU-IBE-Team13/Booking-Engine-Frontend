import styled, { keyframes } from "styled-components";

import {
  Container,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
} from "@mui/material";

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    box-shadow: none;
    padding: 5px 0;
    position: sticky;
  }
`;

export const StyledContainer = styled(Container)`
  && {
    padding: 0 5rem;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    animation: ${slideIn} 0.3s ease;
  }
`;

export const StyledBox = styled(Box)`
  && {
    flex-grow: 4;
    display: flex;
    align-items: center;
    cursor: pointer;

    .booking-engine-text {
      color: #26266d;
      margin-left: 8px;
      font-family: "Lato", sans-serif;
      font-weight: 600;
    }

    .logo-icon {
      box-sizing: border-box;
      max-width: 6rem;
      height: auto;
      margin-top: 0.4rem;
    }

    .logoContainer {
      display: flex;
      align-items: center;
    }
  }

  @media screen and (max-width: 455px) {
    .booking-engine-text {
      display: none;
    }
  }
`;

export const StyledHamburgerIcon = styled.div`
  && {
    display: none;
    cursor: pointer;

    @media (max-width: 887px) {
      display: block;
    }
  }
`;

export const StyledNavItemsContainer = styled(Box)`
  && {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;

    @media (max-width: 887px) {
      display: none;

      &.mobile-menu-open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 100;
      }
    }
  }
`;

export const StyledNavItem = styled(Box)`
  && {
    display: flex;
    align-items: center;
    margin-right: 16px;

    .language-text,
    .currency-text {
      margin-left: 4px;
      color: #26266d;
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

export const StyledLoginContainer = styled(Box)`
  && {
    display: flex;
    align-items: center;
  }
`;

export const StyledLoginButton = styled(Button)`
  && {
    background-color: #26266d;
    color: white;
    box-shadow: none;
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
`;

export const TitleTypography = styled(Typography)`
  && {
    font-size: 1.2rem;
  }
`;

export const StyledBookingbutton = styled(Button)`
  && {
    background-color: white;
    color: #26266d;
    box-shadow: none;
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      background-color: transparent;
    }
  }
`;