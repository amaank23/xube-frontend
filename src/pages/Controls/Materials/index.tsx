import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Materials = () => {
  const [selected, setSelected] = useState("Xolo ONE");
  const items = ["Xolo ONE", "Xolo Pegda", "Xolo GeIMA", "Custome GeIMA"];
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => {
        return (
          <div
            key={item}
            className="flex justify-center items-center border shadow-white h-[150px] rounded-lg cursor-pointer"
            onClick={() => setSelected(item)}
            style={{
              backgroundColor: selected === item ? "#008080" : "black",
            }}
          >
            <span className="text-2xl">{item}</span>
          </div>
        );
      })}
      <div className="flex justify-center items-center border shadow-white h-[150px] rounded-lg">
        <span className="text-2xl">
          <CiCirclePlus size={60} />
        </span>
      </div>
    </div>
  );
};

export default Materials;
