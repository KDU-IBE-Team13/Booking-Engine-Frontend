import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
    && {
        background-color: #26266d;
        color: #fff;
        padding: 0 2rem;
        font-weight: 800;

        @media screen and (max-width: 1300px){
            padding: 1rem;
        }

    }
    
`