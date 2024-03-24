import React, { useEffect, useState } from "react";
import { MenuItem, Box, Typography, FormControl } from "@mui/material";
import { MenuItemWrapper, MenuItemStyled, GuestDropdownStyled, StyledSelectField } from "./GuestDropdownStyled";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation } from "react-router-dom";


interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

const GuestDropdown = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const adultCountParamStr = searchParams.get('adults');
  const teenCountParamStr = searchParams.get('teens');
  const kidCountParamStr = searchParams.get('kids');

  const guestCountsString = localStorage.getItem('guestCounts');
  const guestCountsLocal = guestCountsString ? JSON.parse(guestCountsString) : {};

  let adultCountParam;
  let teenCountParam;
  let kidCountParam;

  if(adultCountParamStr)
  {
    adultCountParam = Number(searchParams.get('adults'));
    localStorage.setItem('guestCounts', JSON.stringify({...guestCountsLocal, adults: adultCountParam}));
  }
  else
  {
    adultCountParam = guestCountsLocal?.["adults"] ? guestCountsLocal["adults"] : 1;
  }

  if(teenCountParamStr)
  {
    teenCountParam = Number(searchParams.get('teens'));
    localStorage.setItem('guestCounts', JSON.stringify({...guestCountsLocal, teens: teenCountParam}));
  }
  else
  {
    teenCountParam = guestCountsLocal?.["teens"] ? guestCountsLocal["teens"] : 0;
  }

  if(kidCountParamStr)
  {
    kidCountParam = Number(searchParams.get('kids'));
    localStorage.setItem('guestCounts', JSON.stringify({...guestCountsLocal, adults: kidCountParam}));
  }
  else
  {
    kidCountParam = guestCountsLocal?.["kids"] ? guestCountsLocal["kids"] : 0;
  }


  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: adultCountParam,
    teens: teenCountParam,
    kids: kidCountParam,
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

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);

    urlSearchParams.set('adults', guestCounts.adults.toString());
    urlSearchParams.set('teens', guestCounts.teens.toString());
    urlSearchParams.set('kids', guestCounts.kids.toString());

    console.log(urlSearchParams)
  
    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);

    localStorage.setItem('guestCounts', JSON.stringify(guestCounts));
  }, [guestCounts, location.search]);
  

  const handleCountChange = (type: keyof GuestCounts, value: number) => {
    setGuestCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + value, 0),
    }));
    localStorage.setItem('guestCounts', JSON.stringify(guestCounts));

  };



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
        <StyledSelectField
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
          {isAdultsOptionEnabled && 
            <MenuItem>
              <MenuItemWrapper className="menu-item">
                <MenuItemStyled>
                  <div className="guest">{t('landingPage.adultsLabel')}</div>
                  <div>
                    <button onClick={(e) => { e.stopPropagation(); handleCountChange("adults", -1); }}>-</button>
                    <span>{guestCounts.adults}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleCountChange("adults", 1); }}>+</button>
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
                      <button onClick={(e) =>{ e.stopPropagation(); handleCountChange("teens", -1)}}>-</button>
                      <span>{guestCounts.teens}</span>
                      <button onClick={(e) => { e.stopPropagation(); handleCountChange("teens", 1)}}>+</button>
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
                    <button onClick={(e) => {e.stopPropagation(); handleCountChange("kids", -1)}}>
                      -
                    </button>
                    <span>{guestCounts.kids}</span>
                    <button onClick={(e) => {e.stopPropagation(); handleCountChange("kids", 1)}}>
                      +
                    </button>
                  </div>
                </MenuItemStyled>
                  <div className="age-range">{`${t('landingPage.ageRangeLabel')} ${kidsAgeRange}`}</div>
              </MenuItemWrapper>
            </MenuItem>
          }
          </StyledSelectField>
      </FormControl>
    </GuestDropdownStyled>
  );
};

export default GuestDropdown;
