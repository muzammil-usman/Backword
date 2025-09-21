import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const GoogleBtn = () => {
  return (
    <div
      className="
        flex items-center justify-center md:w-10/12
        sm:w-52 h-10 sm:h-12 
        bg-red-500 text-white font-medium gap-2.5 rounded-lg shadow-md
        transition-all duration-300 ease-in-out 
        hover:bg-red-600 hover:scale-105 hover:shadow-lg
        active:scale-95 cursor-pointer
      "
    >
      <FontAwesomeIcon icon={faGoogle} className="text-lg sm:text-xl" />
      <p className="text-sm sm:text-base">Continue with Google</p>
    </div>
  );
};

export default GoogleBtn;
