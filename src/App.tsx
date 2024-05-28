import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import { MainLayout } from "./layout/layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
