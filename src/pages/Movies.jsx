import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    loadInitialMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!searchQuery.trim()) {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();
        setMovies(data);
      } else {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchQuery}`,
        );
        const data = await res.json();
        const formattedData = data.map((item) => item.show);
        setMovies(formattedData);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <form
        onSubmit={handleSearch}
        className="mb-12 max-w-2xl mx-auto flex gap-3"
      >
        <div className="relative flex-grow">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-inner"
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={setSelectedMovie}
            />
          ))}
        </div>
      )}

      {movies.length === 0 && !loading && (
        <div className="text-center text-gray-400 mt-20 text-lg">
          No movies found. Try a different search.
        </div>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;
