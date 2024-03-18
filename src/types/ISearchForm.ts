import { IGuests } from "./IGuests";
import { IRooms } from "./IRooms";

export interface ISearchForm {
    lengthOfStay: number;
    guests: IGuests;
    rooms: IRooms;
    wheelchairAccessible: boolean;
}