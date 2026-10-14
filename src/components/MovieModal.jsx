import { X, Star, Calendar, Film } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/600x400?text=No+Image";
  const rating = movie.rating?.average || "N/A";
  const year = movie.premiered ? movie.premiered.substring(0, 4) : "N/A";
  const genres = movie.genres?.join(", ") || "N/A";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 bg-gray-800/80 hover:bg-red-600 text-white rounded-full p-2 z-10 transition-colors backdrop-blur-sm shadow-lg"
        >
          <X size={20} />
        </button>
        <div className="md:w-5/12 bg-gray-800">
          <img
            src={image}
            alt={movie.name}
            className="w-full h-56 sm:h-72 md:h-full object-cover md:min-h-[500px]"
          />
        </div>
        <div className="p-5 sm:p-6 md:p-8 md:w-7/12 flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 md:mb-4 text-white leading-tight pr-8">
            {movie.name}
          </h2>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300 mb-5 bg-gray-800/50 p-3 sm:p-4 rounded-xl">
            <div className="flex items-center gap-1.5 text-yellow-400 font-medium">
              <Star size={14} className="fill-current" /> {rating}
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" /> {year}
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Film size={14} className="text-gray-400" /> {genres}
            </div>
          </div>

          <div className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
            <h4 className="font-bold text-white mb-2 text-base sm:text-lg border-b border-gray-700 pb-2">
              Overview
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No description available.",
              }}
            ></div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-xl transition-colors font-bold mt-auto flex items-center justify-center gap-2"
          >
            <X size={18} />
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
