import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

import Home from './components/Home';
import Projetos from './components/Projetos';
import SobreMim from './components/SobreMim';

// Componente de link personalizado para reutilização
const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
        isActive ? 'text-purple-600' : 'text-gray-800 hover:text-purple-600'
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App bg-white min-h-screen flex flex-col">
        {/* Navbar */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? 'py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
              : 'py-5 bg-white'
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
              onClick={closeMenu}
            >
              Gabriel Reis
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/projetos" onClick={closeMenu}>
                Projetos
              </NavLink>
              <NavLink to="/sobre-mim" onClick={closeMenu}>
                Sobre Mim
              </NavLink>

              <span className="h-6 w-px bg-gray-300 mx-4"></span>

              <div className="flex space-x-3 ml-2">
                <a
                  href="https://github.com/b4hia  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/b4hia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:gabrieldreisilva4@gmail.com"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Botão Mobile */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {menuOpen ? (
                <FaTimes size={24} className="text-purple-600" />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>

          {/* Menu Mobile */}
          <div
            className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
              menuOpen ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <div className="container mx-auto px-6 flex flex-col space-y-3">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/projetos" onClick={closeMenu}>
                Projetos
              </NavLink>
              <NavLink to="/sobre-mim" onClick={closeMenu}>
                Sobre Mim
              </NavLink>

              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
                <a
                  href="https://github.com/b4hia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/b4hia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:gabrieldreisilva4@gmail.com"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Conteúdo */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 py-8 border-t border-gray-200">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-600 font-medium">
              © {new Date().getFullYear()} Gabriel de Oliveira Silva Reis. Build
              with Love ❤️.
            </p>
            <div className="flex justify-center space-x-5 mt-5">
              <a
                href="https://github.com/b4hia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/b4hia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:gabrieldreisilva4@gmail.com"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
