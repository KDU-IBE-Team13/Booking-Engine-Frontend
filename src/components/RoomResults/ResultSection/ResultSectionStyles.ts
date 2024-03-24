import styled from "styled-components";

export const ResultSectionContainer = styled.div`
    padding: 20px 40px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: stretch;
        padding: 0;

        & > * {
            padding: 0;
        }
    }
`;
