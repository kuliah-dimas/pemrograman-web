import "./App.css";
import HomePage from "./pages/HomePage";
import DataMahasiswaPage from "./pages/DataMahasiswaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditMahasiswaPage from "./pages/EditMahasiswaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_mhs" element={<DataMahasiswaPage />} />
        <Route path="/data_mhs/:id" element={<EditMahasiswaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
