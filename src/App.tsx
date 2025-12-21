import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="book" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
