import { ArrowTrendingUpIcon, BookOpenIcon, CalculatorIcon, HomeIcon } from "@heroicons/react/16/solid"
import { Link, useLocation } from "react-router-dom"

export const BottomNavigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;


  return (
    <div className="absolute bottom-0 w-full z-[999] bg-black/65">
        <div className="grid grid-cols-4 place-items-center py-4">
            <Link to={"/"} className={`${currentPath === "/" ? "bg-blue-200 text-blue-500 p-2.5" : "text-white"} rounded-full`}>
                <HomeIcon className="w-10"/>
            </Link>
            <Link to={"/calculator"} className={`${currentPath === "/calculator" ? "bg-blue-200 text-blue-500 p-2.5" : "text-white"} rounded-full`}>
                <CalculatorIcon className="w-10"/>
            </Link>
            <Link to={"/generate-ayat"} className={`${currentPath === "/generate-ayat" ? "bg-blue-200 text-blue-500 p-2.5" : "text-white"} rounded-full`}>
                <BookOpenIcon className="w-10"/>
            </Link>
            <Link to={"/pelancar-placement"} className={`${currentPath === "/pelancar-placement" ? "bg-blue-200 text-blue-500 p-2.5" : "text-white"} rounded-full`}>
                <ArrowTrendingUpIcon className="w-10"/>
            </Link>
        </div>
    </div>
  )
}
