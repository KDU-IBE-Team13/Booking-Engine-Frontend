import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { SelectForm } from "../../components/RoomResults/SelectForm/SelectForm";
import { LandingPageStyled } from "./LandingPageStyles";

export const LandingPage = () => {
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

