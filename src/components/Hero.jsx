import React from "react";
import heroimage from "@/assets/hero-image2.png";
import { containerClass } from "@/utils/css-utils";

export default function Hero() {
  return (
    <section className=" relative bg-red-100  w-full h-[400px] md:h-[500px] ">
      {/* <div className="absolute inset-0 h-full w-full z-0">
        <img src={heroimage} alt="banner-image" className="h-full object-cover w-full" />
        <div className="absolute h-full inset-0 bg-gradient-to-r from-red-600/70   to-transparent "></div>
      </div> */}

      {/* <div className=" relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-20 w-full h-full gap-3 flex flex-col items-center justify-center md:items-start  ">
        <p className="bg-red-200 p-2 hidden rounded-full text-red-400 text-md"> start learning today</p>
        <h1 className="text-2xl md:text-4xl md:w-95 font-extrabold  text-white ">
          Master New Skills with <span className="text-yellow-200">CT EDU</span>
        </h1>
        <p className="text-1xl text-white text-center">
          Access thousands of courses and personalized learning roadmaps to
          achieve your career goals.
        </p>
        <div className="flex gap-2 ">
          <button className="p-2  text-lg  rounded-md bg-red-600 text-white">Explore Courses</button>
          <button className="p-2 text-md rounded-md border-2 border-white text-white">View Roadmaps</button>
        </div>
      </div> */}

      <div className={`${containerClass} grid grid-cols-1 md:grid-cols-2  py-5   items-center place-items-center   w-full h-full`} >
        <div className=" flex flex-col space-y-8">
          <h1 className=" text-3xl  text-center md:text-left  md:text-3xl lg:text-5xl font-[500] line whitespace-pre-line">Transform the Way You Learn—Interactive, Engaging, Effective</h1>
          <p className="text-center md:text-left">Sign up for our innovative e-learning platform to enhance your learning experience with customized courses tailored to your needs!</p>
          <div>
          <div className="flex gap-2 w-full justify-center md:justify-start ">
          <button className=" h-10  px-2 text-sm  rounded-md w-fit  bg-red-600 text-white">Explore Courses</button>
          <button className=" text-sm rounded-md w-fit h-10  px-2 border border-red-600 text-red-600">Enroll now</button>
        </div>
          </div>
        </div>
       
        <div className="  hidden   h-full  w-full overflow-hidden md:flex justify-center  ">
          <img src={heroimage} alt="hero-image"  className="object-fit-contain h-full"/>
        </div>
      </div>
    </section>
  );
}
