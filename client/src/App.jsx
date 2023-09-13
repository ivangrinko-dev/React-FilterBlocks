import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import VacansyPage  from "./pages/VacansyPage/VacansyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/vacansy/:id"} element={<VacansyPage />} />
      </Routes>
    </>
  );
}

export default App;
