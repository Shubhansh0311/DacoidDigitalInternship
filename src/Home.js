import React from "react";
import "../src/App.css";
import { FaSignal } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { IoBatteryFull } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[480px]  h-[100%] flex w-full  py-1 px-2 mx-auto my-4 justify-center">
      <div>
        <div className="status bar flex justify-between">
          <span>9:41</span>
          <div className="flex justify-evenly w-[20%]">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>
        <div>
          <span className="flex justify-end ">
            <a href="/" className="text-[#cfbcf7] underline text-lg ">
              Skip
            </a>
          </span>
        </div>
        <div className="centerImage flex justify-center">
          <img src="image1.png" className="w-[1000px]" alt="centerimage" />
        </div>
        <h1 className="text-xl font-semibold my-5">Track Your Goal</h1>
        <p className="text-sm text-gray-400 ">
          Don't worry if you have trouble determining your goals ,We can help
          you determine your goals and track your goals
        </p>

        <div
          className="flex justify-end mt-5 rounded-full p-1 mx-2  "
          style={{ borderRight: "5px solid #cfbcf7" }}
        >
          <span className="rounded-full bg-[#cfbcf7]  flex justify-center  items-center p-5 w-1 h-1">
            <button
              className="text-white text-[28px]"
              onClick={()=>navigate("/start")}
            >
              {">"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
