import roomBannerImg from "../../assets/hotel-room-banner.jpg";
import { BannerContainer, BannerContainerImg } from "./RoomBannerStyles";
const RoomBanner = () => {
  return (
    <BannerContainer>
        <BannerContainerImg src={roomBannerImg} alt="banner" />
    </BannerContainer>
  );
};

export default RoomBanner;
