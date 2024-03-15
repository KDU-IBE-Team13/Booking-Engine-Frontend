import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { SelectForm } from "../components/SelectForm/SelectForm";
import { LandingPageStyled } from "./LandingPageStyles";

const LandingPage = () => {
  return (
    <>
      <Header />
      <LandingPageStyled>
        <SelectForm />
      </LandingPageStyled>
      <Footer />
    </>
  );
};

export default LandingPage;
