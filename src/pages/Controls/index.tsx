import CheckOptions from "./helpers/CheckOptions";
import CurrentPrintJobs from "./helpers/CurrentPrintJobs";
import Properties from "./helpers/Properties";

const Index = () => {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="w-[20%]">
          <Properties />
        </div>
        <div className="w-[80%] px-6">
          <CurrentPrintJobs />
        </div>
      </div>
      <CheckOptions />
    </div>
  );
};

export default Index;
