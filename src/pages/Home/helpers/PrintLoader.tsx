const PrintLoader = () => {
  return (
    <div className="flex flex-col my-9 gap-2">
      <div className="flex justify-evenly items-center">
        <span className="text-white text-2xl">15%</span>
        <span className="text-white text-2xl">1/2</span>
        <span className="text-white text-2xl">-3.21 min</span>
      </div>
      <div className="relative h-[40px] bg-white ">
        <div className="bg-green-600 w-[40%] h-full" />
      </div>
    </div>
  );
};

export default PrintLoader;
