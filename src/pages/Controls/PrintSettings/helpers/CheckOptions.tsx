const CheckOptions = () => {
  return (
    <div className="flex flex-col pt-16 gap-8">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="ramp-up"
          className="w-[25px] h-[25px] cursor-pointer"
        />
        <label htmlFor="ramp-up" className="text-white text-3xl">
          Ramp up
        </label>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="ramp-down"
          className="w-[25px] h-[25px] cursor-pointer"
        />
        <label htmlFor="ramp-down" className="text-white text-3xl">
          Ramp down
        </label>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="initial-dark"
          className="w-[25px] h-[25px] cursor-pointer"
        />
        <label htmlFor="initial-dark" className="text-white text-3xl">
          Initial dark screen print
        </label>
      </div>
    </div>
  );
};

export default CheckOptions;
