const PrintProperties = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-20">
      <div className="bg-secondary h-[100px] flex justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl text-black font-bold">15</span>
          <span className="text-xl text-black">Energy</span>
        </div>
      </div>
      <div className="bg-secondary h-[100px] flex justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl text-black font-bold">3</span>
          <span className="text-xl text-black">Speed</span>
        </div>
      </div>
      <div className="bg-secondary h-[100px] flex justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl text-black font-bold">9</span>
          <span className="text-xl text-black">Intensity</span>
        </div>
      </div>
      <div className="bg-secondary h-[100px] flex justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl text-black font-bold">Xolo One</span>
          <span className="text-xl text-black">Material</span>
        </div>
      </div>
    </div>
  );
};

export default PrintProperties;
