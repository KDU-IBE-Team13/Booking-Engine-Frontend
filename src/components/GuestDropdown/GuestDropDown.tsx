import React, { useState } from "react";
import { MenuItem, TextField, Button, Menu } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MenuItemStyled, GuestDropdownStyled } from "./GuestDropDownStyled";

interface GuestCounts {
  adults: number;
  children: number;
  old: number;
}

const GuestDropdown = () => {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 1,
    children: 0,
    old: 0,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCountChange = (type: keyof GuestCounts, value: number) => {
    setGuestCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + value, 0),
    }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <GuestDropdownStyled>
      <label className="property">Guests</label>
      <TextField
        label=""
        value={`${
          guestCounts.adults > 0 ? `Adults: ${guestCounts.adults}` : ""
        } ${
          guestCounts.children > 0 ? `Children: ${guestCounts.children}` : ""
        } ${guestCounts.old > 0 ? `Old: ${guestCounts.old}` : ""}`}
        InputProps={{
          endAdornment: (
            <Button
              aria-controls="guest-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ height: "50px", width: "20px", color: "black" }}
            >
              <ArrowDropDownIcon />
            </Button>
          ),
          readOnly: true,
        }}
      />
      <Menu
        id="guest-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <MenuItemStyled className="menu-item">
            <div className="guest">Adults</div>
            <div>
              <button onClick={() => handleCountChange("adults", -1)}>-</button>
              <span>{guestCounts.adults}</span>
              <button onClick={() => handleCountChange("adults", 1)}>+</button>
            </div>
          </MenuItemStyled>
        </MenuItem>

        <MenuItem>
          <MenuItemStyled className="menu-item">
            <div className="guest">Children</div>
            <div>
              <button onClick={() => handleCountChange("children", -1)}>
                -
              </button>
              <span>{guestCounts.children}</span>
              <button onClick={() => handleCountChange("children", 1)}>
                +
              </button>
            </div>
          </MenuItemStyled>
        </MenuItem>

        <MenuItem>
          <MenuItemStyled className="menu-item">
            <div className="guest">Old</div>
            <div>
              <button onClick={() => handleCountChange("old", -1)}>-</button>
              <span>{guestCounts.old}</span>
              <button onClick={() => handleCountChange("old", 1)}>+</button>
            </div>
          </MenuItemStyled>
        </MenuItem>
      </Menu>
    </GuestDropdownStyled>
  );
};

export default GuestDropdown;
