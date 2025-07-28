import Home from "./pages/home/Home"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Faqs from "./pages/faqs/Faqs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App