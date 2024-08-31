export type exploreItem = {
  image: string;
  location: string;
  distance: string;
};
export type exploreDataType = exploreItem[];
export type liveItem = {
  image: string;
  title: string;
};
export type liveDataType = liveItem[];
export type outDoorsType = {
  image: string;
  title: string;
  description: string;
  linkText: string;
};
export type searchParamsTypes = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
export type listingCardType = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
