export interface ConfigType {
  lengthOfStay: number;
  guests: Guests;
  rooms: Rooms;
  wheelchairAccessible: boolean;
}

export interface Guests {
  enabled: boolean;
  maxGuests: number;
  guestTypes: GuestType[];
}

export interface GuestType {
  type: string;
  maxCount: number;
  ageRange: string;
  enabled: boolean;
}

export interface Rooms {
  enabled: boolean;
  options: number[];
}
