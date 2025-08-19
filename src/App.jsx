import Home from "./pages/home/Home"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Faqs from "./pages/faqs/Faqs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from "./pages/services/Services"
import ServiceDetail from "./pages/services/ServicesDetails"
import About from "./pages/about/About"
import ContactUs from "./pages/contactUs/ContactUs"
import Blog from "./pages/blog/Blog"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />}/>
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App