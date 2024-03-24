
import RoomCard from "../RoomCard/RoomCard";
import { CardContainerSection, CardWrapper, ContainerHeader } from "./CardContainerStyles";
import roomPic1 from "../../../assets/room-pic-1.jpg";
import roomPic2 from "../../../assets/room-pic-2.jpg";
import roomPic3 from "../../../assets/room-pic-3.jpg";
import roomPic4 from "../../../assets/room-pic-4.jpg";
import roomPic5 from "../../../assets/room-pic-5.jpg";
import roomPic6 from "../../../assets/room-pic-6.jpg";

const CardContainer = () => {
  return (
    <CardContainerSection>
    <ContainerHeader>Room Results</ContainerHeader>
    <CardWrapper>
       <RoomCard carouselImg1={roomPic1} carouselImg2={roomPic2} carouselImg3={roomPic3}/>
       <RoomCard carouselImg1={roomPic4} carouselImg2={roomPic5} carouselImg3={roomPic6}/>
       <RoomCard carouselImg1={roomPic1} carouselImg2={roomPic2} carouselImg3={roomPic3}/>
    </CardWrapper>
    </CardContainerSection>
  );
};

export default CardContainer;
