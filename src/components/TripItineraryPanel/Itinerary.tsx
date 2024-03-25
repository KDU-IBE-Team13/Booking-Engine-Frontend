import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #EFF0F1;
  width: 330px;
  padding: 10px;
  height: 494px;

  @media screen and (max-width: 1300px){
    width: 90%;
    margin: 0 auto;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    font-weight: 700;
    text-align: left;
    font-size: 20px;
    padding: 10px 20px;
  }
`

const StyledButton = styled(Button)`
  && {
    color: #26266d;
    border: 3px solid #26266d;
    padding: 12px 24px;
    border-radius: 4px;
    width: 193px;
    font-weight: 700;
    margin: 10px auto;
  }
  
`;

const TripItinerary: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Container>
          <StyledTypography gutterBottom>
            
          </StyledTypography>
          <StyledButton variant="outlined">{t('roomPage.checkOutLabel')}</StyledButton>
    </Container>
  );
};

export default TripItinerary;