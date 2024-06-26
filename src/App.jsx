import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/perfil" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
