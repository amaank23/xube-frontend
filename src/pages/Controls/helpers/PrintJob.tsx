import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";

const PrintJob = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-[100px] h-[100px] bg-secondary" />
      <div className="flex flex-col gap-2 flex-grow">
        <h4 className="text-2xl">Human scaffold</h4>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <CiCirclePlus color="white" size={40} className="cursor-pointer" />
            <CiCircleMinus color="white" size={40} className="cursor-pointer" />
          </div>

          <IncreaseDecreaseSize />
        </div>
      </div>
    </div>
  );
};

const IncreaseDecreaseSize = () => {
  return (
    <div className="flex items-center gap-4">
      <FaPlus color="white" />
      <input type="text" className="w-[80px] h-[42px] text-lg font-bold px-2" />
      <FaMinus color="white" />
    </div>
  );
};

export default PrintJob;
