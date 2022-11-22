import React, {useState} from 'react';
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

const Header = () => {
  const [mode, setMode] = useState("dark");
  const [brightnessIcon, setBrightnessIcon] = useState(sun);

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">devfinder</h1>
      </div>
      <div className="flex gap-x-2 items-center">
        <h1>{ mode === "dark" ? "LIGHT" : "DARK" }</h1>
        <img src={ brightnessIcon } className="h-5" />
      </div>
    </div>
  );
};

export default Header;
