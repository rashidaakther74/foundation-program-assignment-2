import { Link, useLocation } from "react-router-dom";
import { Clapperboard, Home, Film } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 flex items-center gap-2"
        >
          <Clapperboard className="text-red-500" size={28} />
          MovieExplorer
        </Link>
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
          <Link
            to="/"
            className={`flex items-center gap-2 font-medium transition-colors ${location.pathname === "/" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/movies"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-red-500/25 flex items-center gap-2 transform hover:scale-105"
          >
            <Film size={18} />
            <span>Movies</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
