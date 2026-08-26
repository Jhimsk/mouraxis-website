import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./sections/Footer"
import HomePage from "./pages/HomePage"
import RealityCapturePage from "./pages/RealityCapturePage"

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
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App