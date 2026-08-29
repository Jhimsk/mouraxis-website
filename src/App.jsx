import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"
import HomePage from "./pages/HomePage"
import RealityCapturePage from "./pages/RealityCapturePage"
import Bridge001Page from "./pages/Bridge001Page"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/reality-capture/"
          element={<RealityCapturePage />}
        />
        
        <Route
          path="/projects/bridge-001/"
          element={<Bridge001Page />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App