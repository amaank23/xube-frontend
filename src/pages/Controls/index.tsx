import { Link, Route, Routes } from "react-router-dom";
import PrintSettings from "./PrintSettings";
import Materials from "./Materials";

const Index = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <Routes>
          <Route path="print-settings" element={<PrintSettings />} />
          <Route path="materials" element={<Materials />} />
        </Routes>
      </div>
      <div className="h-[10%] flex justify-between items-center bg-primary px-12">
        <Link to={"/controls/print-settings"} className="text-3xl text-white">
          Print Settings
        </Link>
        <Link to={"/controls/materials"} className="text-3xl text-white">
          Materials
        </Link>
      </div>
    </div>
  );
};

export default Index;
