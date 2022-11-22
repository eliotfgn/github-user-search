import React from 'react';
import "./UserContent.css";
import location from "../assets/icon-location.svg";
import company from "../assets/icon-company.svg";
import twitter from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";

const UserContent = () => {


  return (
      <div className={"flex flex-col items-end gap-5"}>
        <div className={"w-full h-3/5 grid grid-cols-4 grid-rows-2 gap-y-7"}>
          <div className={"rounded-[100%] w-2/3 aspect-square mx-auto col-span-1 row-span-2"}>
            <img className={"h-full w-full rounded-full aspect-square"} src="" alt=""/>
          </div>
          <div className={'flex justify-between items-baseline col-span-3'}>
            <div className={'flex flex-col'}>
              <h1 className={"text-2xl font-bold"}>{'The Octocat'}</h1>
              <p className={"text-sm text-indigo-600"}>@{'octocat'}</p>
            </div>
            <div className={"text-[15px]"}>
              Joined {'25 jan 2011'}
            </div>
          </div>
          <div className={'col-span-3 text-base text-gray-400'}>
            {'This profile has no bio'}
          </div>
        </div>

        <div className="flex justify-between w-9/12 bg-[#141c2f] rounded-md px-10 py-5">
          <div className={"flex-item"}>
            <h3>Repos</h3>
            <p>18</p>
          </div>
          <div className={"flex-item"}>
            <h3>Followers</h3>
            <p>2865</p>
          </div>
          <div className={"flex-item"}>
            <h3>Following</h3>
            <p>63</p>
          </div>
        </div>

        <div className={"w-9/12 grid grid-cols-2 gap-y-5 mt-5"}>
          <div className={"about-item"}>
            <img src={location}/>
            <p>{"Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={websiteIcon} alt=""/>
            <p>{"Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={twitter} alt=""/>
            <p>{"Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={company} alt=""/>
            <p>{"Not available"}</p>
          </div>
        </div>
      </div>
  );
};

export default UserContent;
