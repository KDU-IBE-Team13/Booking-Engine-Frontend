
import RoomCard from "../../RoomCard/RoomCard";
import { CardWrapper } from "./CardContainerStyles";

const CardContainer = () => {
  return (
    <CardWrapper>
       <RoomCard />
       <RoomCard />
       <RoomCard />
    </CardWrapper>
  );
};

export default CardContainer;
