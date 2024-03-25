import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import starIcon from "../../assets/star-icon.svg";
import { Grid } from '@mui/material';
import { BannerFlag, BannerImg, CarouselImg, ContentHeader, ContentWrapper, DealText, HeaderWrapper, InclusiveText, LocationWrapper, NewPropertyLabel, PerNightLabel, PriceText, PromoDesc, ResortName, StarRating, StyledButton, KeyboardArrowLeftStyled, KeyboardArrowRightStyled } from './RoomCardStyles';
import locationIcon from "../../../assets/location-icon.svg";
import userIcon from "../../../assets/user-icon.svg";
import bedIcon from "../../../assets/bed-icon.svg";
import promotionFlag from "../../../assets/promotion-flag.png";
import { IRooomCard } from '../../../types/IRoomCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export default function RoomCard({carouselImg1, carouselImg2, carouselImg3}: IRooomCard) {
  const { t } = useTranslation();
  let room = "SUPER_DELUXE";
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );
  const selectedCurrencySymbol = useSelector(
    (state: RootState) => state.currency.selectedCurrencySymbol
  );
  const exchangeRate = useSelector(
    (state: RootState) => state.currency.exchangeRates[selectedCurrency]
  );

  const price = 132;
  let convertedPrice;

    if (selectedCurrency === "USD") {
      convertedPrice = price;
    } else {
      if (price != null && exchangeRate != null) {
        const tempConvertedPrice = (price * exchangeRate).toFixed(1);
        if (tempConvertedPrice.length > 5) {
          convertedPrice = Number(tempConvertedPrice).toPrecision(7);
        } else {
          convertedPrice = tempConvertedPrice;
        }
      } else {
        convertedPrice = null;
      }
    }

  return (
    <Card sx={{ maxWidth: 293 }}>
    <Carousel 
        autoPlay
        infiniteLoop 
        interval={2000} 
        showStatus={false} 
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <KeyboardArrowLeftStyled onClick={onClickHandler} />
            )
          }
        renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <KeyboardArrowRightStyled onClick={onClickHandler} />
            )
        }
    >
      <div>
        <CarouselImg src={carouselImg1} alt="resort" />
      </div>
      <div>
        <CarouselImg src={carouselImg2} alt="resort" />
      </div>
      <div>
        <CarouselImg src={carouselImg3} alt="resort" />
      </div>
    </Carousel>
    <CardContent>
        <HeaderWrapper>
            <ResortName>
            {t(`roomType.${room}`)}
            </ResortName>
            <NewPropertyLabel>{t("roomPage.newProperty")}</NewPropertyLabel>
        </HeaderWrapper>
        <LocationWrapper>
        <img src={locationIcon} alt="location"/>
        <Typography variant="body2" color="text.secondary">
            Near city center
        </Typography>
        </LocationWrapper>
        <ContentWrapper>
            <InclusiveText>        
                <Typography>
                    Inclusive
                </Typography>
            </InclusiveText>
            <Typography>
                    301 ft
            </Typography>
        </ContentWrapper>
        <ContentWrapper>
            <img src={userIcon} alt="user" />
            <Typography>1-2</Typography>
        </ContentWrapper>
        <ContentWrapper>
            <img src={bedIcon} alt="bed"/>
            <Typography>{t('bedType.singleBed')} or 2 {t('bedType.doubleBed')}</Typography>
        </ContentWrapper>
     
    </CardContent>
    <BannerFlag>
        <DealText>{t('roomPage.specialDeal')}</DealText>
        <BannerImg src={promotionFlag} alt="promotion" />
    </BannerFlag>
    <PromoDesc>{t('roomPage.promo')}</PromoDesc>
    <CardContent>
        <PriceText>{selectedCurrencySymbol}{convertedPrice}</PriceText>
        <PerNightLabel>{t('roomPage.perNight')}</PerNightLabel>
        <StyledButton variant="contained">{t('roomPage.selectRoom')}</StyledButton>
    </CardContent>
  </Card>
  );
}