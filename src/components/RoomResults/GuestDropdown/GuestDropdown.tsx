import React, { useState } from "react";
import { MenuItem, Box, Typography, FormControl } from "@mui/material";
import { MenuItemWrapper, MenuItemStyled, GuestDropdownStyled, StyledTextField } from "./GuestDropdownStyled";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

const GuestDropdown = () => {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 1,
    teens: 0,
    kids: 0,
  });

  const { t } = useTranslation();

  const adultsOption = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.guests.guestTypes.filter((guestType) => guestType.type === "Adults")[0]
  );

  const teensOption = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.guests.guestTypes.filter((guestType) => guestType.type === "Teens")[0]
  );

  const kidsOption = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.guests.guestTypes.filter((guestType) => guestType.type === "Kids")[0]
  );

  const isAdultsOptionEnabled = adultsOption?.enabled;
  const adultsAgeRange = adultsOption?.ageRange;

  const isTeensOptionEnabled = teensOption?.enabled;
  const teensAgeRange = teensOption?.ageRange;

  const isKidsOptionEnabled = kidsOption?.enabled;
  const kidsAgeRange = kidsOption?.ageRange;
  

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCountChange = (type: keyof GuestCounts, value: number) => {
    setGuestCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + value, 0),
    }));
  };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const GuestMenuInput = () => {
    return (
      <Box>
        <Typography fontSize={{ md: "0.7rem", xs: "0.875rem", lg: "0.875rem" }} color={"#858685"}>
          {"Guests"}
        </Typography>
        <Typography fontWeight={700}>{`${
          guestCounts.adults > 0 ? (guestCounts.adults > 1 ? `${guestCounts.adults} ${t('landingPage.adultsLabel')}` : `${guestCounts.adults} ${t('landingPage.adultsLabelSingular')}` ): ""
        }${
          guestCounts.teens > 0 ? (guestCounts.teens > 1 ? `, ${guestCounts.teens} ${t('landingPage.teensLabel')}` : `, ${guestCounts.teens} ${t('landingPage.teensLabelSingular')}` ): ""
        }${
          guestCounts.kids > 0 ? (guestCounts.kids > 1 ? `, ${guestCounts.kids} ${t('landingPage.kidsLabel')}` : `, ${guestCounts.kids} ${t('landingPage.kidsLabelSingular')}` ): ""
        }`}</Typography>
      </Box>
    );
  };

  return (
    <GuestDropdownStyled>
      <FormControl fullWidth>
      <StyledTextField
        sx={{
            "& .MuiSelect-select": {
              padding: "0.7rem",
            },
        }}
        renderValue={() => <GuestMenuInput />}
        displayEmpty={true}
        defaultValue=""
          // onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
      >
      {/* <Menu
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
      > */}
        {isAdultsOptionEnabled && 
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
                <div className="guest">{t('landingPage.adultsLabel')}</div>
                <div>
                  <button onClick={() => handleCountChange("adults", -1)}>-</button>
                  <span>{guestCounts.adults}</span>
                  <button onClick={() => handleCountChange("adults", 1)}>+</button>
                </div>
              </MenuItemStyled>
                <div className="age-range">{`${t('landingPage.ageRangeLabel')} ${adultsAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        }

        {isTeensOptionEnabled &&
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
                <div className="guest">{t('landingPage.teensLabel')}</div>
                  <div>
                    <button onClick={() => handleCountChange("teens", -1)}>-</button>
                    <span>{guestCounts.teens}</span>
                    <button onClick={() => handleCountChange("teens", 1)}>+</button>
                  </div>
              </MenuItemStyled>
                <div className="age-range">{`${t('landingPage.ageRangeLabel')} ${teensAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        }
        
        {isKidsOptionEnabled &&
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
              <div className="guest">{t('landingPage.kidsLabel')}</div>
                <div>
                  <button onClick={() => handleCountChange("kids", -1)}>
                    -
                  </button>
                  <span>{guestCounts.kids}</span>
                  <button onClick={() => handleCountChange("kids", 1)}>
                    +
                  </button>
                </div>
              </MenuItemStyled>
                <div className="age-range">{`${t('landingPage.ageRangeLabel')} ${kidsAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        }
        
      {/* </Menu> */}
      </StyledTextField>
      </FormControl>
    </GuestDropdownStyled>
  );
};

export default GuestDropdown;
