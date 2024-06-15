import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { FaExchangeAlt } from "react-icons/fa";
import {
  GrStatusCriticalSmall,
  GrStatusDisabledSmall,
  GrStatusGoodSmall,
  GrStatusWarningSmall,
} from "react-icons/gr";

function Contrast() {
  // const [picker, setPicker] = useState("#03a9f4");
  const [color, setColor] = useColor("#00000");
  const [color1, setColor1] = useColor("#03a9f4");
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
    console.log(mcolor1.className === "w-52 mr-3 picker con1 active");
    mcolor1.className !== "w-52 mr-3 picker con1 active"
      ? mcolor.parentElement.classList.add("justify-end")
      : mcolor.parentElement.classList.remove("justify-end");

    // &&
    //   mcolor.parentElement.classList.remove("justify-end");
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
          <div className="text-blue-300 text-2xl hover:text-blue-600 mt-5 ">
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
      <div className="w-full mt-5 bg-blue-100  rounded-sm ">
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
    </div>
  );
}

export default Contrast;
