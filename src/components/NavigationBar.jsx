import React, { useRef, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link, useLocation } from "react-router-dom";
import marsRomusha from "../../public/assets/marsRomusha.mp3"

export default function NavigationBar() {
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
    <Navbar
      className="dark absolute top-0 text-white bg-black/40"
      classNames={{
        item: [
          "z-10",
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">Bang ini diisi apa?</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive={currentPath === "/"}>
          <Link color="foreground" to={"/"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/generate-ayat"}>
          <Link to={"/generate-ayat"} aria-current="page">
            Ayat
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/calculator"}>
          <Link color="foreground" to={"/calculator"}>
            Kalkulator
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <Button as={Link} color="primary" to={"/pelancar-placement"} variant="flat">
              Learn More
            </Button>
        </NavbarItem>
        {
          currentPath === "/pelancar-placement" && (
            <NavbarItem>
            <Button onClick={handlePlay} color="secondary" variant="flat">
              {isPlay ? "Pause" : "Play"}
            </Button>
        </NavbarItem>
          )
        }
      </NavbarContent>
      <audio ref={audioRef} src={marsRomusha}></audio>
    </Navbar> 
  );
}
