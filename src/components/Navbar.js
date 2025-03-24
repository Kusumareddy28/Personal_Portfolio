import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Kusuma.dev brand name - Always links to homepage */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-600">
          Kusuma<span className="text-gray-800">.dev</span>
        </Link>

        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          {/* If on home page, use anchor tags to scroll */}
          {isHome ? (
            <>
              <li><a href="#home" className="hover:text-indigo-600 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 transition">Experience</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
            </>
          ) : (
            <>
              {/* <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li> */}
            </>
          )}

          {/* Quantum Insights - navigates regardless of page */}
          <li>
            {/* <Link to="/quantum" className="hover:text-indigo-400">
              Quantum Insights
            </Link> */}
          </li>
        </ul>

        {/* Let’s Connect only on home page */}
        {isHome && (
          <a
            href="#contact"
            className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
          >
            Let’s Connect
          </a>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
