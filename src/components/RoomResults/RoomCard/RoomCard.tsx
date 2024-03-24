import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Grid } from '@mui/material';
import { BannerFlag, BannerImg, CarouselImg, ContentHeader, ContentWrapper, DealText, HeaderWrapper, InclusiveText, LocationWrapper, NewPropertyLabel, PerNightLabel, PriceText, PromoDesc, ResortName, StarRating, StyledButton, KeyboardArrowLeftStyled, KeyboardArrowRightStyled } from './RoomCardStyles';
import locationIcon from "../../../assets/location-icon.svg";
import userIcon from "../../../assets/user-icon.svg";
import bedIcon from "../../../assets/bed-icon.svg";
import promotionFlag from "../../../assets/promotion-flag.png";
import { RoomsDetail } from '../../../types/ICard';
import roomPic1 from "../../../assets/room-pic-1.jpg";
import roomPic2 from "../../../assets/room-pic-2.jpg";
import roomPic3 from "../../../assets/room-pic-3.jpg";

interface RoomCardProps {
  roomDetails: RoomsDetail; // Define the type for roomDetails
}

const RoomCard: React.FC<RoomCardProps> = ({ roomDetails }) => {
  const { roomTypeName, areaInSquareFeet, singleBed, doubleBed, maxCapacity, propertyAddress, basicNightlyPrice } = roomDetails;
  console.log(roomDetails)
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
        <CarouselImg src={roomPic1} alt="resort" />
      </div>
      <div>
        <CarouselImg src={roomPic2} alt="resort" />
      </div>
      <div>
        <CarouselImg src={roomPic3} alt="resort" />
      </div>
    </Carousel>
      <CardContent>
        <HeaderWrapper>
          <ResortName>{roomTypeName}</ResortName>
          <NewPropertyLabel>New property</NewPropertyLabel>
        </HeaderWrapper>
        <LocationWrapper>
          <img src={locationIcon} alt="location" />
          <Typography variant="body2" color="text.secondary">
            {propertyAddress}
          </Typography>
        </LocationWrapper>
        <ContentWrapper>
          <InclusiveText>
            <Typography>Inclusive</Typography>
          </InclusiveText>
          <Typography>{areaInSquareFeet} ft</Typography>
        </ContentWrapper>
        <ContentWrapper>
          <img src={userIcon} alt="user" />
          <Typography>{maxCapacity}</Typography>
        </ContentWrapper>
        <ContentWrapper>
          <img src={bedIcon} alt="bed" />
          {singleBed > 0 && <Typography>{`${singleBed}`}{singleBed > 1 ? ` Queens` : ` Queen`}</Typography>}
          {singleBed > 0 && doubleBed > 0 && <Typography>{` or`}</Typography>}
          {doubleBed > 0 && <Typography>{`${doubleBed}`}{doubleBed > 1 ? ` Doubles` : ` Double`}</Typography>}
        </ContentWrapper>
      </CardContent>
      <BannerFlag>
        <DealText>Special Deal</DealText>
        <BannerImg src={promotionFlag} alt="promotion" />
      </BannerFlag>
      <PromoDesc>Save 10% when you book 2+ nights</PromoDesc>
      <CardContent>
        <PriceText>{basicNightlyPrice}$</PriceText>
        <PerNightLabel>per night</PerNightLabel>
        <StyledButton variant="contained">Select Room</StyledButton>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
