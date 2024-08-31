import Image from "next/image";
import Banner from "./components/ui/Banner";
import ExploreSection from "./components/ui/ExploreSection";
import LiveSection from "./components/ui/LiveSection";
import GreatestOutdoors from "./components/ui/GreatestOutdoors";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <>
      <Header preventInput={false} />
      <main>
        <Banner />
        <ExploreSection />
        <LiveSection />
        <GreatestOutdoors
          image={
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
          }
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          linkText="Get Inspired"
        />
      </main>
    </>
  );
}
