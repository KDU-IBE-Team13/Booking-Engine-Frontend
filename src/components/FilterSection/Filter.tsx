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

const Filter = () => {


  const filters = [
    {
      filterName: 'Bed Type',
      show: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOptions: ['Option 1'], 
    },
    {
      filterName: 'Room Type',
      show: true,
      options: ['Option A', 'Option B', 'Option C'],
      selectedOptions: [], 
    },
    {
      filterName: 'Price',
      show: true,
      options: ['Option X', 'Option Y', 'Option Z'],
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
          {"Narrow Your Results"}
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
                      <Typography>{filter.filterName}</Typography>
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