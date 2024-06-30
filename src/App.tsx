import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ControlsPage, HomePage } from "./pages";

function App() {
  return (
    <div className="w-[607.50px] h-[1080px] border-2 mx-auto relative">
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/controls/*" element={<ControlsPage />} />
              </Routes>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
