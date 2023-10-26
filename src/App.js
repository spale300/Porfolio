import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TechnologyPage from "./pages/TechnologyPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
import ItBootcamp from "./components/ItBootcamp";
import Trucking from "./components/Trucking";
import English from "./components/English";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />}>
            <Route index element={<ItBootcamp />} />
            <Route path="itbootcamp" element={<ItBootcamp />} />
            <Route path="trucking" element={<Trucking />} />
            <Route path="english" element={<English />} />

            <Route path="info" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
