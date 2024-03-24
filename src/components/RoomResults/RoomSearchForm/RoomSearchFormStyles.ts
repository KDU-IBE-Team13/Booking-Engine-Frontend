import styled from "styled-components";

export const RoomSearchFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0;
  gap: 20px;
  width: 90%;
  margin: 0 auto;

  .tileContentPrice {
    text-align: center;
    margin: 0;
    font-weight: 400;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;
