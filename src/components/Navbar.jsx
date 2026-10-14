import { Link, useLocation } from "react-router-dom";
import { Clapperboard, Home, Film } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 flex items-center gap-2"
        >
          <Clapperboard className="text-red-500" size={28} />
          MovieExplorer
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`flex items-center gap-2 font-medium transition-colors ${location.pathname === "/" ? "text-red-500" : "text-gray-300 hover:text-white"}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/movies"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-red-500/25 flex items-center gap-2 transform hover:scale-105"
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
