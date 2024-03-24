import styled from "styled-components";
import { Accordion, AccordionSummary, AccordionDetails, Box, Checkbox, MenuItem, Typography } from "@mui/material";

export const StyledBox = styled(Box)`
    && {
        background-color: #EFF0F1;
        padding: 0.7rem 1.2rem;
        width: 293px;
        flex-grow: 1;
        height: fit-content;

        @media screen and (max-width: 1300px){
            width: 90%;
            margin: 0 auto 20px;
        }
    }
    

`
export const StyledAccordion = styled(Accordion)`
  && {
    box-shadow: none;
    background-color: transparent;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    padding: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    padding: 0;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 700;
    font-size: 1.25rem;

    @media screen and (max-width: 1300px){
        font-size: 1rem;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    padding: 0;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  && {
    /* Add any custom styles for Checkbox */
  }
`;
