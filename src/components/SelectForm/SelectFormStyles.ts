import styled from "styled-components";
import Banner from "../../assets/banner.png";

export const SelectFormStyled = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  height: 42.5rem;
  width: 100vw;
  display: flex;

  .searchForm {
    box-sizing: border-box;
    background-color: white;
    height: 38.9375rem;
    width: 23.75rem;
    margin: 2.5% 0 0 3.8%;
    border-radius: 0.3125rem;
    padding: 2.75rem;
    display: flex;
    flex-direction: column;
  }

  .searchButton {
    margin: auto;
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
    margin-top: 0.5rem;
  }

  .property {
    font-size: 0.875rem;
  }

  .room-property {
    margin-left: 1rem;
  }

  .property-select {
    height: 3rem;
  }
`;
