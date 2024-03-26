import styled from "styled-components";

type BannerStyledProps = {
  backgroundimage: string;
};

export const SelectFormStyled = styled.div<BannerStyledProps>`
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  min-height: 87vh;
  width: 100vw;
  display: flex;

  .searchForm {
    box-sizing: border-box;
    background-color: white;
    height: 38.9375rem;
    width: 23.75rem;
    margin: 3% 0 0 3.8%;
    border-radius: 0.3125rem;
    padding: 2.75rem;
    display: flex;
    flex-direction: column;
  }

  .searchButton {
    margin: 9.5rem auto;
    border-radius: 0.25rem;
    padding: 0.75rem 1.25rem;
    width: 8.75rem;
    height: 2.75rem;
    background-color: #26266d;
    gap: 4rem;
    font: Lato;
    font-weight: 700;
  }

  .roomsSpecification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8rem;
  }

  .property {
    font-size: 0.875rem;
  }

  .room-property {
    margin-left: 1rem;
  }

  .property-select {
    height: 3.1rem;
  }

  .rooms-dropdown {
    width: 6.4rem;
  }

  .property-select-label-hidden {
    display: none;
  }

  .tileContentPrice {
    text-align: center;
    margin: 0;
    font-weight: 400;
    font-size: 0.875rem;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    padding: 0 0.25rem 0 0;
  }

  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0 0 0 0.5rem;
    height: 3.1rem;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0.6575rem 0.71875rem 0.975rem;
  }

  .css-14ux82-MuiButtonBase-root-MuiButton-root {
    min-width: 2.5rem;
  }

  .accessibleChair {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
  }
  .wheelChair-img {
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem
  }

`;
