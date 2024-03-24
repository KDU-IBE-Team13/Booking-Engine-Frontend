import styled from "styled-components";
import Box from '@mui/material/Box';
import { Stepper } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export const StyledBox = styled(Box)`
  margin: 0 auto;
  width: 100%;
  padding: 30px 0;
  background-color: #e4e4e4;
`;

export const StyledStepper = styled(Stepper)`
  width: 417px;
  margin: auto;
`

export const StyledCheckIcon = styled(CheckIcon)`
  && {
    width: 15px;
    height: 20px;
    font-weight: 900;
  }
`