import React, {useState} from 'react';
import moon from "./assets/icon-moon.svg";
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {

  const [mode, setMode] = useState("dark");

  return (
      <div className="h-[100vh] w-full absolute bg-gray-900 text-white">
        <div className="mx-auto my-20 w-10/12">
          <div className="my-10">
            <Header/>
          </div>
          <div>
            <SearchBar/>
          </div>
        </div>
      </div>
  );
}

export default App;
