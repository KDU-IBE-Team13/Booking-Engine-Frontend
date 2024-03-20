import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const ResortName = styled.div`
    word-wrap: break-word;
    font-size: 1rem;
    font-weight: 800;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin: 5px 0;
`

export const ContentWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin: 5px 0;
    color: #5d5d5d;
`

export const StarRating = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 1em; /* Adjust as needed */
    margin-right: 0.5em; /* Add space between icon and text */
  }
`;

export const NewPropertyLabel = styled.div`
  background-color: #cdcded;
  text-wrap: nowrap;
  padding: 0 10px;
  height: fit-content;
  border-radius: 5px;

`

export const LocationWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;

`

export const InclusiveText = styled.div`
  font-style: italic;
`

export const BannerFlag = styled.div`
  position: relative;
`

export const DealText = styled.div`
  position: absolute;
  color: #fff;
  vertical-align: center;
  margin-left: 20px;
  font-size: 1rem;
  line-height: 32px;
`

export const BannerImg = styled.img`
  width: 140px;
  height: 32px;
`

export const PromoDesc = styled.p`
  && {
    padding: 0 10px;
    margin: 0;
    font-size: 14px;
    color: #5D5D5D;
  }
  
`

export const PriceText = styled.div`
  font-weight: 800;
`
export const PerNightLabel = styled.div`
  font-size: 14px;
  color: #858685;
`

export const StyledButton = styled(Button)`
    && {
        background-color: #26266d;
        color: #fff;
        padding: 0.5rem 1rem;
        font-weight: 800;
        margin-top: 10px;
    }
`