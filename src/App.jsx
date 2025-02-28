
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import SideBar from "./SideBar";
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<SideBar />} />
        </Routes>
    </>
  )
}

