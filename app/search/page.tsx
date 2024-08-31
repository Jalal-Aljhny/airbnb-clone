import { format } from "date-fns";
import { listingCardType, searchParamsTypes } from "@/app/types/type";
import Header from "../components/layout/Header";
import { getSearchResult } from "../utils/api";
import ListingCard from "../components/ui/ListingCard";
import Map from "../components/ui/Map";

const page = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: searchParamsTypes;
}) => {
  const range = `${format(new Date(startDate), "dd MMMM yy")} - ${format(
    new Date(endDate),
    "dd MMMM yy"
  )}`;

  const searchResult: listingCardType[] = await getSearchResult();
  console.log(searchResult);
  return (
    <>
      <Header
        placeHolder={`${location} | ${range} | ${numOfGuests} guests`}
        preventInput={true}
      />
      <main>
        <section className="section">
          <p className="text-sm">
            300+ stays - {range} - for {numOfGuests} guests
          </p>
          <h2 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h2>
          <div className="hidden lg:inline-flex mb-3 gap-3 text-gray-800 ">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex md:flex-row gap-2 md:justify-between">
            <div className="w-full md:w-3/5">
              {searchResult.map((listing, id) => (
                <ListingCard
                  key={`${listing.title}-${id}`}
                  img={listing.img}
                  location={listing.location}
                  title={listing.title}
                  description={listing.description}
                  star={listing.star}
                  price={listing.price}
                  total={listing.total}
                />
              ))}
            </div>
            <div className="w-full md:w-2/5">
              <Map />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
