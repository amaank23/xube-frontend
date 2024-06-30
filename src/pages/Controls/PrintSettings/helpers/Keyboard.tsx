import { RxCrossCircled } from "react-icons/rx";
import { GrLinkNext } from "react-icons/gr";

interface IKeyboard {
  toggleKeyboard: () => void;
}
const Keyboard: React.FC<IKeyboard> = ({ toggleKeyboard }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[#fffffffa] pt-6">
      <div className="grid grid-cols-3 gap-4">
        {numbers.map((item) => {
          return (
            <div className="flex items-center justify-center w-[120px] h-[120px] border-2 mx-auto rounded-full cursor-pointer bg-white">
              <span className="text-black text-3xl">{item}</span>
            </div>
          );
        })}
        <div
          className="flex items-center justify-center w-[120px] h-[120px] border-2 mx-auto rounded-full cursor-pointer bg-white"
          onClick={toggleKeyboard}
        >
          <span className="text-black text-3xl">
            <RxCrossCircled />
          </span>
        </div>
        <div className="flex items-center justify-center w-[120px] h-[120px] border-2 mx-auto rounded-full cursor-pointer bg-white">
          <span className="text-black text-3xl">0</span>
        </div>
        <div
          className="flex items-center justify-center w-[120px] h-[120px] border-2 mx-auto rounded-full cursor-pointer bg-white"
          onClick={toggleKeyboard}
        >
          <span className="text-black text-3xl">
            <GrLinkNext />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
