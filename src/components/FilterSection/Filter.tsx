import { Box, Checkbox, ListItemIcon, ListItemText, MenuItem, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { StyledBox } from "./FilterStyled";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledTypography,
  StyledMenuItem,
  StyledCheckbox,
} from "./FilterStyled";
import { useTranslation } from "react-i18next";

const Filter = () => {
const {t} = useTranslation();

  const filters = [
    {
      filterName: 'bedType',
      show: true,
      options: ['singleBed', 'doubleBed'],
      selectedOptions: ['singleBed'], 
    },
    {
      filterName: 'RoomType',
      show: true,
      options: ['deluxe', 'suite'],
      selectedOptions: ['DELUXE'], 
    },
    {
      filterName: 'price',
      show: true,
      options: [ '$150', '$300', '$600'],
      selectedOptions: [],
    },
  ];
  

  return (
    <StyledBox>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
        <StyledTypography>
          {t("roomPage.narrowYourResults")}
        </StyledTypography>                
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <div>
            {filters.map((filter) => {
              return (
                filter.show && (
                  <StyledAccordion
                    key={filter.filterName}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{t(`filter.${filter.filterName}`)}</Typography>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      {filter.options.map((option) => {
                        return (
                          <MenuItem key={option}>
                            <ListItemIcon>
                              <Checkbox
                                disabled={false}
                                checked={filter.selectedOptions?.includes(option)}
                              />
                            </ListItemIcon>
                            <ListItemText primary={t(`filter.selectedPriceRange`,{option})} />
                          </MenuItem>
                        );
                      })}
                    </StyledAccordionDetails>
                  </StyledAccordion>
                )
              );
            })}
          </div>
        </StyledAccordionDetails>
      </StyledAccordion>
    </StyledBox>
  );
};

export default Filter;