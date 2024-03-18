import { IGuestType } from "./IGuestType";

export interface IGuests {
    enabled: boolean;
    maxGuests: number;
    guestTypes: IGuestType[];
}