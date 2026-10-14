import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-950/80 to-gray-950 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-2xl">
          Discover Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
            Favorite
          </span>{" "}
          Movie
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
          Explore thousands of movies and TV shows from around the world. Your
          ultimate entertainment guide starts here.
        </p>
        <Link
          to="/movies"
          className="group flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)]"
        >
          <Play className="fill-current group-hover:animate-pulse" size={20} />
          Start Exploring
        </Link>
      </div>
    </div>
  );
};

export default Home;
