import { useState } from "react";
import Keyboard from "./Keyboard";

const Properties = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  function toggleKeyboard() {
    setShowKeyboard((prev) => !prev);
  }
  function openKeyboard() {
    setShowKeyboard(true);
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <div
          className="bg-secondary rounded-lg h-[100px] flex justify-center items-center cursor-pointer"
          onClick={openKeyboard}
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl text-black font-bold">15</span>
            <span className="text-xl text-black">Energy</span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg h-[100px] flex justify-center items-center cursor-pointer"
          onClick={openKeyboard}
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl text-black font-bold">3</span>
            <span className="text-xl text-black">Speed</span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg h-[100px] flex justify-center items-center cursor-pointer"
          onClick={openKeyboard}
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl text-black font-bold">9</span>
            <span className="text-xl text-black">Intensity</span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg h-[100px] flex justify-center items-center cursor-pointer"
          onClick={openKeyboard}
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl text-black font-bold">Xolo One</span>
            <span className="text-xl text-black">Material</span>
          </div>
        </div>
      </div>
      {showKeyboard ? <Keyboard toggleKeyboard={toggleKeyboard} /> : ""}
    </>
  );
};

export default Properties;
