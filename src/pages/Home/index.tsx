import PrintFileViewer from "./helpers/PrintFileViewer";
import PrintLoader from "./helpers/PrintLoader";
import PlayPausePrint from "./helpers/PlayPausePrint";
import PrintProperties from "./helpers/PrintProperties";

const Index = () => {
  return (
    <div className="w-full h-full">
      <PrintFileViewer />
      <PrintLoader />
      <PlayPausePrint />
      <PrintProperties />
    </div>
  );
};

export default Index;
