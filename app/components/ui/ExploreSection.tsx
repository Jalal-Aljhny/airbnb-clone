import { exploreDataType } from "@/app/types/type";
import { getExplore } from "@/app/utils/api";
import ExploreItem from "./ExploreItem";

const ExploreSection = async () => {
  const exploreData: exploreDataType = await getExplore();

  return (
    <section className="section">
      <h2 className="text-4xl font-semibold mb-5 italic">Explore Nearly</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols:4">
        {exploreData.map((item) => (
          <ExploreItem
            image={item.image}
            distance={item.distance}
            location={item.location}
            key={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
