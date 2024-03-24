import styled from "styled-components";

export const CardContainerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 2;
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 1300px){
        justify-content: center;
    }
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media screen and (max-width: 1300px){
        flex-direction: column;
        justify-content: center;
        margin: 20px auto;
    }

`

export const RoomResultsText = styled.div`
    font-weight: 800;
    font-size: 1.2rem;
    padding: 0 20px;
    line-height: 40px;
`

export const ResultsPaginationText = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
    color: #2F2F2F;
`

export const SortSection = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 20px;
`