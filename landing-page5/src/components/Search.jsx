import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[70rem] px-[5rem] bg-[#081730] pt-[10rem] pb-[10rem] mt-[-15rem] z-[1]  flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          // className="absolute top-[15rem] left-[30rem]"
          className="w-700 rounded-lg shadow-lg"
        />
        <motion.img
          src={require("../img/box4.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="h-25 w-[20rem] top-[50rem] left-[12rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]  ">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col  mt-5 text-4xl">
          <span>Search Movies by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className=" text-[20px]  text-sm mt-6 text-[#00FFFF]  ">
            {/* Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius. */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
