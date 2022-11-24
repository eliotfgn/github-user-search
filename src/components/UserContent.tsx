import React from 'react';
import "./UserContent.css";
import location from "../assets/icon-location.svg";
import company from "../assets/icon-company.svg";
import twitter from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import {IUser} from "../utils/IUser";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getYear = (date: string) => {
  return date.slice(0,4);
};

const getMonth = (date: string) => {
  const m = Number.parseInt(date.slice(5, 7));

  return months[m-1];
}

const UserContent = (props: {user: any}) => {


  return (
      <div className={"flex flex-col items-end gap-5"}>
        <div className={"w-full h-3/5 grid grid-cols-4 grid-rows-2 gap-y-7"}>
          <div className={"rounded-[100%] w-2/3 aspect-square mx-auto col-span-1 row-span-2"}>
            <img className={"h-full w-full rounded-full aspect-square"} src={props.user.avatar_url} alt=""/>
          </div>
          <div className={'flex justify-between items-baseline col-span-3'}>
            <div className={'flex flex-col'}>
              <h1 className={"text-2xl font-bold"}>{props.user.name}</h1>
              <p className={"text-sm text-indigo-600"}>@{props.user.username}</p>
            </div>
            <div className={"text-[15px]"}>
              Joined { getMonth(props.user.createdAt) + " " + getYear(props.user.createdAt) }
            </div>
          </div>
          <div className={'col-span-3 text-base text-gray-400'}>
            {props.user.bio ? props.user.bio : 'This profile has no bio'}
          </div>
        </div>

        <div className="flex justify-between w-9/12 bg-[#141c2f] rounded-md px-10 py-5">
          <div className={"flex-item"}>
            <h3>Repos</h3>
            <p>{props.user.repos}</p>
          </div>
          <div className={"flex-item"}>
            <h3>Followers</h3>
            <p>{props.user.followers}</p>
          </div>
          <div className={"flex-item"}>
            <h3>Following</h3>
            <p>{props.user.following}</p>
          </div>
        </div>

        <div className={"w-9/12 grid grid-cols-2 gap-y-5 mt-5"}>
          <div className={"about-item"}>
            <img src={location}/>
            <p>{props.user.location ? props.user.location : "Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={websiteIcon} alt=""/>
            <p>{props.user.website ? props.user.website : "Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={twitter} alt=""/>
            <p>{props.user.twitter_username ? props.user.twitter_username : "Not available"}</p>
          </div>
          <div className={"about-item"}>
            <img src={company} alt=""/>
            <p>{props.user.company ? props.user.company : "Not available"}</p>
          </div>
        </div>
      </div>
  );
};

export default UserContent;
