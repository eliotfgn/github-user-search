import React, {useState} from 'react';
import search from '../assets/icon-search.svg'
import {getUser} from "../utils/user-search-utils";
import {IUser} from "../utils/IUser";

const SearchBar = (props: { user: any, setUser: any }) =>{

  const [mode, setMode] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-14 flex py-2 pl-4 pr-2 bg-gray-800 rounded-md items-center">
      <img className="h-3/5" src={search} alt=""/>
      <input className="w-full px-2 ml-3 mr-1 bg-transparent text-white outline-0 text-base"
             type="text"
             placeholder="Search Github username..."
             onChange={ (event) => {
               setSearchTerm(event.target.value);
               
               //props.user = searchTerm;
             }
      }/>
      <button className={"bg-indigo-600 px-2 rounded h-full text-[15px]"} onClick={() => {
        getUser(searchTerm).then(r => {
          props.setUser(r);
        });
      }
      }>Search</button>
    </div>
  );
}

export default SearchBar;