import React from "react";
import { FaSignal } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { IoBatteryFull } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Goals = () => {
    const navigate=useNavigate()
  const goals = [
    "Weight loss",
    "Muscle gain",
    "Flexibility and Mobility",
    "General fitness",
    "Event specific training",
    "Mindfullness and mental health",
  ];
  return (
    <div className="max-w-[480px]  h-[100%] flex w-full py-1 px-2 mx-auto my-4 justify-center">
      <div className="w-full">
        <div className="statusbar  flex justify-between">
          <span>9:41</span>
          <div className="flex justify-evenly w-[20%]">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>
        <h1 className="text-center text-xl my-4">What are your Goals ?</h1>

        {goals.map((element) => {
          return (
            <div class="relative bg-gray-200 flex rounded-lg  my-6 ">
              <div class="flex h-7 justify-between w-full p-6  items-center">
                <label for={element} class="text-sm pt-[2px] text-gray-600">
                  {element}
                </label>
                <input
                  id={element}
                  name={element}
                  type="checkbox"
                  class="h-4 w-4  border-blue-300 rounded-sm text-indigo-600 focus:ring-blue-400"
                />
              </div>
            </div>
          );
        })}
        <div className="py-6">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm active:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         onClick={()=>{
            navigate("/tracker")
         }}
         >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
