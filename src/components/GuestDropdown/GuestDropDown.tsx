import React, { useEffect, useState } from "react";
import { MenuItem, TextField, Button, Menu } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  MenuItemWrapper,
  MenuItemStyled,
  GuestDropdownStyled,
} from "./GuestDropDownStyled";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

export interface GuestSelectProps {
  rooms: number;
}


const GuestDropdown = (rooms: GuestSelectProps) => {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>(() => {
    const storedCounts = localStorage.getItem("guestCounts");
    return storedCounts ? JSON.parse(storedCounts) : { adults: 1, teens: 0, kids: 0 };
  });

  const { t } = useTranslation();

  const adultsOption = useSelector(
    (state: RootState) =>
      state.landingPageConfig.searchForm.guests.guestTypes.filter(
        (guestType) => guestType.type === "Adults"
      )[0]
  );

  const teensOption = useSelector(
    (state: RootState) =>
      state.landingPageConfig.searchForm.guests.guestTypes.filter(
        (guestType) => guestType.type === "Teens"
      )[0]
  );

  const kidsOption = useSelector(
    (state: RootState) =>
      state.landingPageConfig.searchForm.guests.guestTypes.filter(
        (guestType) => guestType.type === "Kids"
      )[0]
  );

  const MAX_GUEST_COUNT = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.guests.maxGuests
  );

  const isAdultsOptionEnabled = adultsOption?.enabled;
  const adultsAgeRange = adultsOption?.ageRange;

  const isTeensOptionEnabled = teensOption?.enabled;
  const teensAgeRange = teensOption?.ageRange;

  const isKidsOptionEnabled = kidsOption?.enabled;
  const kidsAgeRange = kidsOption?.ageRange;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCountChange = (type: keyof GuestCounts, value: number) => {
    const totalCount =
      guestCounts.adults + guestCounts.teens + guestCounts.kids;
    const updatedCount = guestCounts[type] + value;

    if (totalCount + value <= MAX_GUEST_COUNT && updatedCount >= 0) {
      setGuestCounts((prevCounts) => {
        const updatedCounts = { ...prevCounts, [type]: Math.max(prevCounts[type] + value, 0) };
        localStorage.setItem("guestCounts", JSON.stringify(updatedCounts));
        return updatedCounts;
      });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (rooms.rooms > guestCounts.adults) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        adults: rooms.rooms,
      }));
    }
  }, [rooms, guestCounts.adults]);

  return (
    <GuestDropdownStyled>
      <label className="property">{t("landingPage.guestsLabel")}</label>
      <TextField
        label=""
        value={`${
          guestCounts.adults > 0
            ? `${t("landingPage.adultsLabel")}: ${guestCounts.adults}`
            : ""
        }${
          guestCounts.adults > 0 &&
          (guestCounts.teens > 0 || guestCounts.kids > 0)
            ? ", "
            : ""
        }${
          guestCounts.teens > 0
            ? `${t("landingPage.teensLabel")}: ${guestCounts.teens}`
            : ""
        }${
          (guestCounts.adults > 0 || guestCounts.teens > 0) &&
          guestCounts.kids > 0
            ? ", "
            : ""
        }${
          guestCounts.kids > 0
            ? `${t("landingPage.kidsLabel")}: ${guestCounts.kids}`
            : ""
        }`}
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
        {isAdultsOptionEnabled && (
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
                <div className="guest">{t("landingPage.adultsLabel")}</div>
                <div>
                  <button onClick={() => handleCountChange("adults", -1)}>
                    -
                  </button>
                  <span>{guestCounts.adults}</span>
                  <button onClick={() => handleCountChange("adults", 1)}>
                    +
                  </button>
                </div>
              </MenuItemStyled>
              <div className="age-range">{`${t(
                "landingPage.ageRangeLabel"
              )} ${adultsAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        )}

        {isTeensOptionEnabled && (
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
                <div className="guest">{t("landingPage.teensLabel")}</div>
                <div>
                  <button onClick={() => handleCountChange("teens", -1)}>
                    -
                  </button>
                  <span>{guestCounts.teens}</span>
                  <button onClick={() => handleCountChange("teens", 1)}>
                    +
                  </button>
                </div>
              </MenuItemStyled>
              <div className="age-range">{`${t(
                "landingPage.ageRangeLabel"
              )} ${teensAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        )}

        {isKidsOptionEnabled && (
          <MenuItem>
            <MenuItemWrapper className="menu-item">
              <MenuItemStyled>
                <div className="guest">{t("landingPage.kidsLabel")}</div>
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
              <div className="age-range">{`${t(
                "landingPage.ageRangeLabel"
              )} ${kidsAgeRange}`}</div>
            </MenuItemWrapper>
          </MenuItem>
        )}
      </Menu>
    </GuestDropdownStyled>
  );
};

export default GuestDropdown;
