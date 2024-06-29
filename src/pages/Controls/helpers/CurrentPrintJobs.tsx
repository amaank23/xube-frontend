import PrintJob from "./PrintJob";

const CurrentPrintJobs = () => {
  return (
    <>
      <h2 className="text-3xl">Current Print Jobs</h2>
      <div className="flex flex-col h-[388px] overflow-y-auto mt-8 gap-5">
        <PrintJob />
        <PrintJob />
        <PrintJob />
      </div>
    </>
  );
};

export default CurrentPrintJobs;
