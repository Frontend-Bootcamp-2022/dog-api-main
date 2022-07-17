
import { Navigate, Routes, Route } from "react-router-dom";
import OnePage from "./pages/OnePage";
import Home from "./pages/Home";
import DogImages from "./pages/DogImages";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/app" element={<OnePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dog/:dogtype" element={<DogImages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
