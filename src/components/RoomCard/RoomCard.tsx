import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import resortPic from "../../assets/5627.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import starIcon from "../../assets/star-icon.svg";
import { Grid } from '@mui/material';
import { BannerFlag, BannerImg, ContentHeader, ContentWrapper, DealText, HeaderWrapper, InclusiveText, LocationWrapper, NewPropertyLabel, PerNightLabel, PriceText, PromoDesc, ResortName, StarRating, StyledButton } from './RoomCardStyles';
import locationIcon from "../../assets/location-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import bedIcon from "../../assets/bed-icon.svg";
import promotionFlag from "../../assets/promotion-flag.png";

export default function RoomCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <Carousel 
        autoPlay 
        infiniteLoop 
        interval={2000} 
        showStatus={false} 
        showThumbs={false}
    >
      <div>
        <img src={resortPic} alt="resort" />
      </div>
      <div>
        <img src={resortPic} alt="resort" />
      </div>
      <div>
        <img src={resortPic} alt="resort" />
      </div>
    </Carousel>
    <CardContent>
        <HeaderWrapper>
            <ResortName>
                Long Beautiful Resort Name
            </ResortName>
                {/* <StarRating>
                <img src={starIcon} alt="star" />
                <Typography variant="body1">3.5</Typography>
                </StarRating>
                <div>128 reviews</div> */}
            <NewPropertyLabel>New property</NewPropertyLabel>
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
            <Typography>Queen or 2 doubles</Typography>
        </ContentWrapper>
     
    </CardContent>
    <BannerFlag>
        <DealText>Special Deal</DealText>
        <BannerImg src={promotionFlag} alt="promotion" />
    </BannerFlag>
    <PromoDesc>Save 10% when you book 2+ nights</PromoDesc>
    <CardContent>
        <PriceText>132$</PriceText>
        <PerNightLabel>per night</PerNightLabel>
        <StyledButton variant="contained">Select Room</StyledButton>
    </CardContent>
  </Card>
  );
}