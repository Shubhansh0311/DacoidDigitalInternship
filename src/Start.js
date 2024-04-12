import React from "react";
import { FaSignal } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { IoBatteryFull } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[480px]   flex w-full  py-1 px-2 mx-auto my-4 justify-center">
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
        <div className="centerImage my-12 flex justify-center">
          <img src="image2.png" className="w-[1000px]" alt="centerimage" />
        </div>
        <h1 className="text-xl font-semibold my-5">Get Burn</h1>
        <p className="text-sm text-gray-400">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>

        <div
          className=" flex justify-end mt-6 rounded-full p-1 mx-2 r "
          style={{ borderRight: "5px solid #cfbcf7" }}
        >
          <span
            onClick={() => navigate("/signup")}
            className="rounded-full bg-[#cfbcf7]  flex justify-center  items-center p-5 w-1 h-1"
          >
            <button className="text-white text-[28px]">{">"}</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Start;
