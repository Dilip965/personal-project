import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/ui/navbar';
import About from './pages/about';
import Resume from './pages/resume';
import Home from './pages/home';
import Footer from './component/ui/footer';
import Contact from './pages/contact';
import Projects from './pages/project';
import BookList from './pages/books'; // Assuming you have a BookList component for the books page
function App() {
  return (
    <>
      <Navbar /> {/* This can stay at the top as it will be visible on all pages */}

      <Routes>
        {/* Define the route paths and the components to render */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<BookList />} /> {/* Assuming you want to use the About component for books */}
        {/* Add more routes as needed */}
      </Routes>

      <Footer /> {/* Footer stays at the bottom and will be visible on all pages */}
    </>
  );
}

export default App;
