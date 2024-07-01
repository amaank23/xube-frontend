import SklImg from "./../../../assets/skl.png";
const PrintFileViewer = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="bg-[#dddbcb4f]  h-[400px] flex-1 rounded-lg flex justify-center items-center">
          <img
            src={SklImg}
            alt=""
            className="w-full h-[350px] object-contain"
          />
        </div>
        <div className="bg-[#dddbcb4f] h-[400px] flex-1 rounded-lg flex justify-center items-center">
          <img
            src={SklImg}
            alt=""
            className="w-full h-[350px] object-contain"
          />
        </div>
      </div>
      <p className="text-white text-2xl text-center my-2">
        Human scaffold print
      </p>
    </>
  );
};

export default PrintFileViewer;
