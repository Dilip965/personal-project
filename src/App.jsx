import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load components for better performance
const Navbar = lazy(() => import('./component/ui/navbar'));
const Footer = lazy(() => import('./component/ui/footer'));
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Resume = lazy(() => import('./pages/resume'));
const Contact = lazy(() => import('./pages/contact'));
const Projects = lazy(() => import('./pages/project'));
const BookList = lazy(() => import('./pages/books'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            } />
            <Route path="/resume" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Resume />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            } />
            <Route path="/books" element={
              <Suspense fallback={<LoadingSpinner />}>
                <BookList />
              </Suspense>
            } />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-yellow-400 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
