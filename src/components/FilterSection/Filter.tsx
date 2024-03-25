import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Checkbox, ListItemIcon, ListItemText, MenuItem, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OptionText, StyledBox } from "./FilterStyled";
import { StyledAccordion, StyledAccordionSummary, StyledAccordionDetails, StyledTypography } from "./FilterStyled";
import { setMinPrice, setMaxPrice, setBeds, setRoomTypes, setBedType } from "../../../src/redux/slices/roomsSlice"

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const handleOptionToggle = (filterName: string, option: string) => {
    switch (filterName) {
      case "Min Price":
        dispatch(setMinPrice(parseInt(option)));
        break;
      case "Max Price":
        dispatch(setMaxPrice(parseInt(option)));
        break;
      case "Beds":
        dispatch(setBeds(parseInt(option)));
        break;
      case "Room Types":
        dispatch(setRoomTypes([option]));
        break;
      case "Bed Type":
        dispatch(setBedType(option));
        break;
      default:
        break;
    }
  };

  const filters = [
    {
      filterName: 'Min Price',
      show: true,
      options: ['70', '90', '100'],
    },
    {
      filterName: 'Max Price',
      show: true,
      options: ['70', '90', '100'],
    },
    {
      filterName: 'Beds',
      show: true,
      options: ['1', '2', '3'], // Example options
    },
    {
      filterName: 'Room Types',
      show: true,
      options: ['Deluxe', 'Suite'],
    },
    {
      filterName: 'Bed Type',
      show: true,
      options: ['double', 'single'],
    },
  ];

  return (
    <StyledBox>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography>{"Narrow Your Results"}</StyledTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <div>
            {filters.map((filter) => {
              return (
                filter.show && (
                  <StyledAccordion key={filter.filterName}>
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{filter.filterName}</Typography>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      {filter.options.map((option) => {
                        return (
                          <MenuItem key={option} onClick={() => handleOptionToggle(filter.filterName, option)}>
                            <ListItemIcon>
                              <Checkbox
                                disabled={false}
                                // checked={/* Add your checked logic here */}
                                
                              />
                              <OptionText>{option}</OptionText>
                            </ListItemIcon>
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
