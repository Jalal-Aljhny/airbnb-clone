import { getLive } from "@/app/utils/api";
import LiveItem from "./LiveItem";
import { liveDataType } from "@/app/types/type";

const LiveSection = async () => {
  const liveData: liveDataType = await getLive();
  return (
    <section className="section">
      <h2 className="text-4xl font-semibold mb-5 italic">Live Anywhere</h2>
      <div className="flex gap-3 overflow-scroll no_scrollbar p-3">
        {liveData.map((item, id) => (
          <LiveItem
            key={`${item.title}-${id}`}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default LiveSection;
