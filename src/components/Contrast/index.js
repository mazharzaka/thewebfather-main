import React, { useEffect, useState } from "react";
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
  const [color, setColor] = useColor("#43E2B0");
  const [color1, setColor1] = useColor("#032d3d");
  const [sugcolor, setSugcolor] = useState("null");
  const [result, setresult] = useState(4.98);
  const [sugresult, setsugresult] = useState(null);
  const [rate, setrate] = useState(false);
  useEffect(() => {
    let Mcolor;
    let Mcolor1;
    setrate(false);

    let a = Object.values(color.rgb).map(function (v) {
      v = v / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    let b = Object.values(color1.rgb).map(function (v) {
      v = v / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    let ratio = ratecalcu(a, b);
    // console.log(ratio);
    setresult(ratio);
    let amount = 0.01;
    while (ratio < 6) {
      let rgb;
      let rgb1;
      rgb = Mcolor1
        ? Mcolor.map((v) => {
            v = v / 255;
            return v <= 0.03928
              ? v / 12.92
              : Math.pow((v + 0.055) / 1.055, 2.4);
          })
        : Object.values(color.rgb).map((v) => {
            v = v / 255;
            return v <= 0.03928
              ? v / 12.92
              : Math.pow((v + 0.055) / 1.055, 2.4);
          });
      rgb1 = Object.values(color1.rgb).map(function (v) {
        v = v / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });

      Mcolor = rgb.map((v) => Math.min(255, Math.max(0, v + amount))); // تعديل هنا لتكون القيم بين 0 و1 قبل تحويلها
      // تعديل هنا لتكون القيم بين 0 و1 قبل تحويلها
      let m = Mcolor.map(function (v) {
        v = v / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      // console.log(amount);
      console.log(Mcolor);
      // console.log(amount);
      let ratio = ratecalcu(m, rgb1);
      // console.log(nratio);
      console.log(ratio);
      if (amount > 0 && ratio >= 6) {
        break;
      } else if (Mcolor[0] === 255 && Mcolor[1] === 255 && Mcolor[2] === 255) {
        amount = amount * -1;
        // console.log("dark11111111111111111111111111");
      } else if (Mcolor.every((v) => v <= 0)) {
        break;
      } else if (Mcolor[0] !== 255 && Mcolor[1] !== 255 && Mcolor[2] !== 255) {
        amount = amount + 2;
      } else {
        break;
      }
    }
    console.log(
      Mcolor && Mcolor[0] === 255 && Mcolor[1] === 255 && Mcolor[2] === 255
    );
    console.log(ratio);

    setsugresult(ratio);
    Mcolor && rgbconvert(Mcolor);
  }, [color, color1]);
  const Fcolor = () => {
    const mcolor = document.querySelector(".con1");
    const mcolor1 = document.querySelector(".con2");
    mcolor.classList.toggle("active");
    mcolor1.className !== "w-52 picker con2 active"
      ? mcolor.parentElement.classList.remove("justify-end")
      : mcolor.parentElement.classList.add("justify-end");
  };
  const ratecalcu = (a, b) => {
    let color1luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    const color1luminance1 = b[0] * 0.2126 + b[1] * 0.7152 + b[2] * 0.0722;
    console.log(color1luminance);
    console.log(color1luminance1);
    let ratio =
      (Math.max(color1luminance, color1luminance1) + 0.05) /
      (Math.min(color1luminance, color1luminance1) + 0.05);
    ratio = ratio.toFixed(2);
    return ratio;
  };
  const rgbconvert = (e) => {
    const sug = e.map((v) => {
      v = Math.round(v);
      return v;
    });
    console.log(sug);
    setSugcolor(
      "rgb(" +
        Number(sug[3]) +
        " ," +
        Number(sug[2]) +
        ", " +
        Number(sug[1]) +
        ")"
    );

    // return sug;
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
    const Fcolor = document.querySelector("#Fcolor");
    const Scolor = document.querySelector("#Scolor");
    const back = document.querySelector("#back");
    const back1 = Fcolor.style.background;
    const back2 = Scolor.style.background;
    mcolor.classList.remove("active");
    mcolor1.classList.remove("active");
    Scolor.style.background = back1;
    Fcolor.style.background = back2;
    back.style.background = back1;
    back.style.color = back2;
    // console.log(back2);
  };
  const Choosesug = () => {
    setrate(true);
    const a = sugcolor
      .match(/\d+/g)
      .map(Number)
      .map(function (v) {
        v = v / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
    const rgb1 = Object.values(color1.rgb).map(function (v) {
      v = v / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    let ratio = ratecalcu(a, rgb1);
    // ratio = ratio
    // console.log();
    setsugresult(ratio);

    setresult(ratio);
  };

  return (
    <div className="flex mt-5 flex-col w-72  md:min-w-96 mb-3">
      {/* <div className="w-52 rounded  bg-black-400 mr-5"></div> */}
      <div className="flex mt-5 items-center flex-col mb-2">
        <div className="w-full rounded items-center mt-2 flex justify-between ">
          <div className="w-32 flex items-center flex-col">
            <label className="text-white">Text Color</label>
            <div
              className="w-10  cursor-pointer h-6 rounded bg-blue-100"
              onClick={Fcolor}
              id="Fcolor"
              style={{ background: rate ? sugcolor : color.hex }}
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
              id="Scolor"
              style={{ background: color1.hex }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-52  mr-3 picker con1">
          <ColorPicker
            className="picker"
            height={70}
            color={color}
            onChange={setColor}
            hideInput={["rgb", "hsv"]}
            dark
          />
        </div>
        <div className="w-52  picker con2">
          <ColorPicker
            height={70}
            color={color1}
            onChange={setColor1}
            hideInput={["rgb", "hsv"]}
            dark
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-40 mt-1 flex justify-center rounded-lg items-center text-3xl font-bold bg-blue-600 h-20">
          {rate ? sugresult : result} : 1
          {rate ? (
            <HiOutlineCheckBadge className="mr-1 mt-2 text-2xl text-[#2BBD82]" />
          ) : result >= 4.5 ? (
            <HiOutlineCheckBadge className="mr-1 mt-2 text-2xl text-[#2BBD82]" />
          ) : (
            <MdOutlineErrorOutline className="mr-1 mt-2 text-2xl text-[#FC475C]" />
          )}{" "}
        </div>
      </div>
      {result < 4.5 && (
        <div className="w-full mt-1 flex justify-center items-center">
          <div
            className="flex cursor-pointer rounded-lg w-32 h-12"
            onClick={Choosesug}
          >
            <div
              className="w-16 h-full rounded-l-lg flex justify-end font-semibold items-center"
              style={{ background: sugcolor, color: color1.hex }}
            >
              Choose
            </div>
            <div
              className="w-16 h-full rounded-r-lg flex items-center font-semibold pl-1"
              style={{ background: color1.hex, color: sugcolor }}
            >
              {" "}
              Colors
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div
          className="w-80 md:w-[30rem] mt-1   rounded-sm "
          style={{
            color: rate ? sugcolor : color.hex,
            background: color1.hex,
          }}
          id="back"
        >
          <div className="text-3xl text-center">
            Don't forget to donate to Palestine
          </div>
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
      <div className="flex justify-between">
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center ">
            {result >= 3 || (sugresult >= 3 && rate) ? (
              <>
                <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />
                <span>pass</span>
              </>
            ) : (
              <>
                <MdOutlineErrorOutline className="mr-1 text-2xl text-[#FC475C]" />
                <span className="text-[#FC475C]">failed</span>
              </>
            )}
          </div>
          <div className="text-black-600 text-[10px]">for 30px and above</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center">
            {result >= 4.5 || (sugresult >= 4.5 && rate) ? (
              <>
                <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />
                <span>pass</span>
              </>
            ) : (
              <>
                <MdOutlineErrorOutline className="mr-1 text-2xl text-[#FC475C]" />
                <span className="text-[#FC475C]">failed</span>
              </>
            )}
          </div>
          <div className="text-black-600 text-[10px]">for 18px and less 30</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#31D190] ">
          <div className="flex items-center">
            {result >= 7 || (sugresult >= 7 && rate) ? (
              <>
                <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />
                <span>pass</span>
              </>
            ) : (
              <>
                <MdOutlineErrorOutline className="mr-1 text-2xl text-[#FC475C]" />
                <span className="text-[#FC475C]">failed</span>
              </>
            )}
          </div>
          <div className="text-black-600 text-[10px]">for 8px and less 18</div>
        </div>
        <div className="flex  flex-col text-xl  text-[#31D190]">
          <div className="flex items-center ">
            {result >= 3.2 || (sugresult >= 3.2 && rate) ? (
              <>
                <HiOutlineCheckBadge className="mr-1 text-2xl text-[#83E5BD]" />
                <span>pass</span>
              </>
            ) : (
              <>
                <MdOutlineErrorOutline className="mr-1 text-2xl text-[#FC475C]" />
                <span className="text-[#FC475C]">failed</span>
              </>
            )}
          </div>
          <div className="text-black-600 text-[10px]">for icons</div>
        </div>
      </div>
    </div>
  );
}

export default Contrast;
