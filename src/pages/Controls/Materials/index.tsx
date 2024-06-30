import { CiCirclePlus } from "react-icons/ci";

const Materials = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">Xolo ONE</span>
      </div>
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">Xolo Pegda</span>
      </div>
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">Xolo GeIMA</span>
      </div>
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">Custom GeIMA</span>
      </div>
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">
          <CiCirclePlus size={60} />
        </span>
      </div>
    </div>
  );
};

export default Materials;
