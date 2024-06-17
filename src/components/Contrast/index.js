import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { FaExchangeAlt } from "react-icons/fa";
import {
  GrStatusCriticalSmall,
  GrStatusDisabledSmall,
  GrStatusGoodSmall,
  GrStatusWarningSmall,
} from "react-icons/gr";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { MdOutlineErrorOutline } from "react-icons/md";

function Contrast() {
  // const [picker, setPicker] = useState("#03a9f4");
  const [color, setColor] = useColor("#45D69B");
  const [color1, setColor1] = useColor("#024D6B");
  const Fcolor = () => {
    const mcolor = document.querySelector(".con1");
    const mcolor1 = document.querySelector(".con2");
    mcolor.classList.toggle("active");
    mcolor1.className !== "w-52 picker con2 active"
      ? mcolor.parentElement.classList.remove("justify-end")
      : mcolor.parentElement.classList.add("justify-end");
  };
  const Scolor = () => {
    const mcolor = document.querySelector(".con2");
    const mcolor1 = document.querySelector(".con1");
    mcolor.classList.toggle("active");
    // console.log(mcolor1.className === "w-52 mr-3 picker con1 active");
    mcolor1.className !== "w-52 mr-3 picker con1 active"
      ? mcolor.parentElement.classList.add("justify-end")
      : mcolor.parentElement.classList.remove("justify-end");

    // &&
    //   mcolor.parentElement.classList.remove("justify-end");
  };
  const replace = () => {
    const mcolor = document.querySelector(".con2");
    const mcolor1 = document.querySelector(".con1");
    mcolor.classList.remove("active");
    mcolor1.classList.remove("active");
    setColor(color1);
    setColor1(color);
  };
  return (
    <div className="flex mt-5 flex-col min-w-96 mb-3">
      {/* <div className="w-52 rounded  bg-black-400 mr-5"></div> */}
      <div className="flex mt-5 items-center flex-col mb-2">
        <div className="w-full rounded items-center mt-2 flex justify-between ">
          <div className="w-32 flex items-center flex-col">
            <label className="text-white">Text Color</label>
            <div
              className="w-10  cursor-pointer h-6 rounded bg-blue-100"
              onClick={Fcolor}
              style={{ background: color.hex }}
            ></div>
          </div>
          <div
            className="text-blue-300 text-2xl hover:text-blue-600 mt-5 "
            onClick={replace}
          >
            <FaExchangeAlt />
          </div>
          <div className="flex w-32 items-center flex-col">
            <label className="text-white">Background Color</label>
            <div
              className="w-10 cursor-pointer h-6 rounded bg-blue-100"
              onClick={Scolor}
              style={{ background: color1.hex }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-52  mr-3 picker con1">
          <ColorPicker
            height={70}
            wi
            hideInput={["rgb", "hsv"]}
            color={color}
            onChange={setColor}
          />
        </div>
        <div className="w-52  picker con2">
          <ColorPicker
            height={70}
            wi
            hideInput={["rgb", "hsv"]}
            color={color1}
            onChange={setColor1}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-40 mt-1 flex justify-center rounded-lg items-center text-3xl font-bold bg-blue-600 h-20">
          4.98 : 1
          <HiOutlineCheckBadge className="mr-1 text-2xl text-[#2BBD82]" />{" "}
        </div>
      </div>
      <div
        className="w-full mt-1   rounded-sm "
        style={{ color: color.hex, background: color1.hex }}
      >
        <div className="text-3xl">Don't forget to donate to Palestine</div>
        <div className="text-lg text-center">
          free Palestine Until the end of life
        </div>
        <div className="text-sm text-center">Red Cross link and qr below</div>
        <div className="text-4xl mt-2 flex justify-center">
          <GrStatusWarningSmall />
          <GrStatusCriticalSmall className="ml-4" />
          <GrStatusDisabledSmall className="ml-4 mr-4" />
          <GrStatusGoodSmall />
        </div>
        <div className="text-sm flex justify-center mb-1">
          <img src="./palestine (3).png" alt="palsetina" className="w-14" />
          <img
            src="./palestine (4).png"
            alt="palsetina"
            className="w-14 mr-2 ml-2"
          />
          <img src="./palestine (2).png" alt="palsetina" className="w-14" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center ">
            <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />{" "}
            Pass
          </div>
          <div className="text-black-600 text-[10px]">for 30px and above</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center">
            <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />{" "}
            Pass
          </div>
          <div className="text-black-600 text-[10px]">for 18px and less 30</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#FA1631]">
          <div className="flex items-center">
            <MdOutlineErrorOutline className="mr-1 text-2xl text-[#FC475C]" />
            failed
          </div>
          <div className="text-black-600 text-[10px]">for 8px and less 18</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center ">
            <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />{" "}
            Pass
          </div>
          <div className="text-black-600 text-[10px]">for icons</div>
        </div>
      </div>
    </div>
  );
}

export default Contrast;
