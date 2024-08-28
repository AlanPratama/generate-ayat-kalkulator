import { useLocation } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation"
import NavigationBar from "../components/NavigationBar"
import { useRef, useState } from "react";
import marsRomusha from "../../public/assets/marsRomusha.mp3"
import { PauseIcon, PlayIcon } from "@heroicons/react/16/solid";

export const PageLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isPlay, setIsPlay] = useState(false)
  const audioRef = useRef()

  const handlePlay = () => {
    if(isPlay) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlay(!isPlay)
  }

  return (
    <>
        {
          currentPath === "/pelancar-placement" && (
            <div>

            <div className="fixed top-6 right-6 p-2 rounded-full flex justify-center items-center bg-white text-blue-500 z-[999]">
              <button className="flex justify-center items-center" onClick={handlePlay}>{isPlay ? <PauseIcon className="w-6 h-6"/> : <PlayIcon className="w-6 h-6"/>} <span className="font-semibold">{isPlay ? "Pause" : "Play"}</span></button>
            </div>
              <audio ref={audioRef} src={marsRomusha}></audio>
            </div>
          )
        }
        <BottomNavigation/>
        <div className="bg-[#f0f0f0] min-h-screen">
        {children}
        </div>
    </>
  )
}
