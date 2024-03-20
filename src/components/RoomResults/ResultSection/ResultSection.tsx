
import Filter from "../../FilterSection/Filter";
import CardContainer from "../CardContainer/CardContainer";
import { ResultSectionContainer } from "./ResultSectionStyles";

const ResultContainer = () => {
  return (
    <ResultSectionContainer>
        <Filter />
        <CardContainer />
    </ResultSectionContainer>
  );
};

export default ResultContainer;
