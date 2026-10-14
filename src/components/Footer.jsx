import { Clapperboard, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-10 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
          <Clapperboard className="text-red-500" size={28} />
          MovieExplorer
        </div>

        <p className="text-sm font-light text-gray-500 flex items-center gap-1.5 mt-2">
          Designed with{" "}
          <Heart
            size={14}
            className="text-red-500 fill-current animate-pulse"
          />{" "}
          for movie lovers
        </p>

        <div className="w-12 h-px bg-gray-700 my-2"></div>

        <p className="text-sm text-gray-500">
          © 2026 MovieExplorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
