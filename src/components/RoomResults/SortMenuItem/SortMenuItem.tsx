import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledButton = styled(Button)`
    && {
        text-transform: capitalize;
        color: #000;
        padding: 6px 20px;
        font-weight: 700;
        font-size: 16px;

    }
`

export default function SortMenu() {

  const sorts = [
    {
      sortType: 'PriceLow',
      show: true,
    },
    {
      sortType: 'PriceHigh',
      show: true,
    },
    {
      sortType: 'BedsLow',
      show: true,
    },
    {
      sortType: 'BedsHigh',
      show: true,
    },
    {
      sortType: 'AreaLow',
      show: true,
    },
    {
      sortType: 'AreaHigh',
      show: false,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {t} = useTranslation();

  return (
    <div>
      <StyledButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        None <KeyboardArrowDownIcon />
      </StyledButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
          {sorts
          .filter((sort) => sort.show)
          .map((sort, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {t(`sort.${sort.sortType}`)}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
