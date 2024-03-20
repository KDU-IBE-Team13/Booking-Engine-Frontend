import { Select } from "@mui/material";
import styled from "styled-components";

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const MenuItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  .guest {
    font-weight: 700;
  }

  .age {
    font-size: 0.875rem;
  }

  button {
    border: none;
    width: 2rem;
    font-size: 1.3rem;
    background-color: transparent;
  }
`;

export const GuestDropdownStyled = styled.div`
flex-grow: 2;

  
`;

export const StyledTextField = styled(Select)`
  font-weight: 900;
`