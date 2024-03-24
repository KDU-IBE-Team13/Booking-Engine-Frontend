export interface ICard {
    roomsDetails: RoomsDetail[];
}

export interface RoomsDetail {
    roomTypeId:        number;
    roomTypeName:      string;
    areaInSquareFeet:  number;
    singleBed:         number;
    doubleBed:         number;
    maxCapacity:       number;
    propertyAddress:   string;
    basicNightlyPrice: number;
}
