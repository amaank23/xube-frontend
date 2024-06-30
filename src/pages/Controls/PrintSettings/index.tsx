import CheckOptions from "./helpers/CheckOptions";
import CurrentPrintJobs from "./helpers/CurrentPrintJobs";
import Properties from "./helpers/Properties";

const PrintSettings = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[20%]">
          <Properties />
        </div>
        <div className="w-[80%] px-6">
          <CurrentPrintJobs />
        </div>
      </div>
      <CheckOptions />
    </>
  );
};

export default PrintSettings;
