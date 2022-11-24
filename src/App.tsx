import React, {useEffect, useState} from 'react';
import moon from "./assets/icon-moon.svg";
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserContent from "./components/UserContent";
import {getUser} from "./utils/user-search-utils";
import {IUser} from "./utils/IUser";

const App = () => {

  const [mode, setMode] = useState("dark");
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    return () => {
      getUser('octocat').then((data) => {
        setUser(data);
      })
    };
  }, []);


  return (
      <div className="h-[100vh] flex w-full bg-gray-900 text-white">
        <div className="flex flex-col mx-auto mt-28 gap-y-3 h-[75%] w-8/12">
          <div className="">
            <Header/>
          </div>
          <div>
            <SearchBar user={user} setUser={setUser}/>
          </div>
          <div className={"w-full h-full bg-gray-800 rounded-md p-5"}>
            {user && <UserContent user={user}/>}
          </div>
        </div>
      </div>
  );
}

export default App;
