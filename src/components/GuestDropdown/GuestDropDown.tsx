import React, { useState } from "react";
import { MenuItem, TextField, Button, Menu, Paper } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface GuestCounts {
  adults: number;
  children: number;
  old: number;
}

const GuestDropdown: React.FC = () => {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 0,
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
    <div>
      <label htmlFor="properties" className="property">
        Guests
      </label>
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
              style={{ padding: 0, minWidth: "unset" }}
              sx={{ height: "60px", width: "35px", color: "black" }}
            >
              <ArrowDropDownIcon />
            </Button>
          ),
          readOnly: true,
        }}
        sx={{ width: "200px" }}
      />
      <Menu
        sx={{ width: "300px" }}
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
        <MenuItem sx={{ width: "200px" }}>
          <div>
            Adults
            <Button onClick={() => handleCountChange("adults", 1)}>+</Button>
            <span>{guestCounts.adults}</span>
            <Button onClick={() => handleCountChange("adults", -1)}>-</Button>
          </div>
        </MenuItem>
        <MenuItem sx={{ width: "200px" }}>
          <div>
            Children
            <Button onClick={() => handleCountChange("children", 1)}>+</Button>
            <span>{guestCounts.children}</span>
            <Button onClick={() => handleCountChange("children", -1)}>-</Button>
          </div>
        </MenuItem>
        <MenuItem sx={{ width: "200px" }}>
          <div>
            Old
            <Button onClick={() => handleCountChange("old", 1)}>+</Button>
            <span>{guestCounts.old}</span>
            <Button onClick={() => handleCountChange("old", -1)}>-</Button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default GuestDropdown;
