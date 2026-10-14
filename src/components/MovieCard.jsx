import { Star, Calendar, Info } from "lucide-react";

const MovieCard = ({ movie, onClick }) => {
  const image =
    movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const rating = movie.rating?.average || "N/A";
  const year = movie.premiered ? movie.premiered.substring(0, 4) : "N/A";

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-red-500/20 transition-all duration-300 flex flex-col h-full border border-gray-700 hover:border-red-500/50">
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={image}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-yellow-400 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
          <Star size={12} className="fill-current" /> {rating}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 line-clamp-1 text-white">
          {movie.name}
        </h3>
        <div className="flex items-center text-sm text-gray-400 mb-4 gap-1">
          <Calendar size={14} /> <span>{year}</span>
        </div>
        <button
          onClick={() => onClick(movie)}
          className="mt-auto w-full bg-gray-700/50 hover:bg-red-600 text-white py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <Info size={16} />
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
