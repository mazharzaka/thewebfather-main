import Slider from "rc-slider";
import React, { useEffect, useState } from "react";
import "react-color-palette/css";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCode } from "react-icons/fa";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import CopyToClipboard from "react-copy-to-clipboard";
function Boxshadow() {
  const [vertical, setVertical] = useState(2);
  const [horizontal, setHorizontal] = useState(2);
  const [spread, setSpread] = useState(5);
  const [blur, setBlur] = useState(0);
  const [inset, setinset] = useState(false);
  const [color, setcolor] = useState("rgba(255, 255, 255, 0.6)");
  const [boxShadow, setboxShadow] = useState(
    "2px 2px 5px rgba(255, 255, 255, 0.1)"
  );
  const [copy, setcopy] = useState(false);
  useEffect(() => {
    inset
      ? setboxShadow(
          `inset ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`
        )
      : setboxShadow(
          `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`
        );
  }, [horizontal, vertical, blur, spread, inset]);
  const handleVertical = (e) => {
    setVertical(e);
  };
  const handlehorizontal = (e) => {
    setHorizontal(e);
  };
  const handlespread = (e) => {
    setSpread(e);
  };
  const handleblur = (e) => {
    setBlur(e);
  };
  const Check = (e) => {
    setinset(e.target.checked);
  };
  const handelBox = (e) => {
    const box = e.target.style.boxShadow;
    setboxShadow(box);
    console.log(box);
    const Sbox = document.getElementById("Sbox");
    let nums = box
      .split(")")[1]
      .split("px")
      .map((e) => Number(e));
    setHorizontal(nums[0]);
    setVertical(nums[1]);
    setBlur(nums[2]);
    setSpread(0);
    // console.log(nums[4]);
    nums.length === 5 && setSpread(nums[3]);
    setinset(box.includes("inset"));
    setcolor(box.split(")")[0] + ")");
    Sbox.style.boxShadow = box;
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-6 mb-9 justify-center">
        <div
          className="w-64 h-44 bg-black-100  rounded-3xl"
          style={{
            boxShadow: boxShadow,
          }}
          id="Sbox"
        ></div>
      </div>
      <div className="flex justify-center">
        <div className="w-52 rounded  bg-black-400 ">
          <div className="w-full  flex flex-col mt-3" id="angle">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Vertical </span>
              {vertical}px
            </label>
            <div className="w-full text-center">
              <Slider
                min={-100}
                value={vertical}
                max={100}
                onChange={handleVertical}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                // value={deg}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full  flex flex-col mt-3" id="angle">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Horizontal </span>
              {horizontal}px
            </label>
            <div className="w-full text-center">
              <Slider
                min={-100}
                value={horizontal}
                max={100}
                onChange={handlehorizontal}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                // value={deg}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Blur </span>
              {blur}px
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                value={blur}
                max={100}
                onChange={handleblur}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4 mb-4">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Spread radius</span>
              {spread}px
            </label>
            <div className="w-full text-center">
              <Slider
                min={-100}
                value={spread}
                max={100}
                onChange={handlespread}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                // onChange={(e) => Snum(e)}

                // value={snum}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <label className="text-white flex items-center ">
              <input type="checkbox" onClick={Check} className="w-5 h-5" />
              inset
            </label>
          </div>
        </div>
      </div>
      <div className=" flex mt-4  flex-wrap w-80">
        <div
          className="w-14 rounded mr-2 mb-5  h-11 "
          style={{
            boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "5px 5px 15px rgba(255, 255, 255, 0.5)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "3px 3px 5px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0 0 10px #33ff33, 0 0 20px #33ff33, 0 0 30px #33ff33",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "10px 10px 20px rgba(255, 255, 255, 0.8)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: " 5px 5px 5px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "10px 10px 40px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: " 2px 2px 5px rgba(0, 128, 255, 0.4)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "2px 2px 10px rgba(255, 0, 0, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0 5px 15px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>{" "}
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: " 0px 1px 4px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: " 0 -5px 10px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0px 48px 100px 0px rgba(255, 255, 255, 0.6)",
          }}
          onClick={handelBox}
        ></div>{" "}
        <div
          className="w-14 rounded mr-2 mb-5 h-11 "
          style={{
            boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
          }}
          onClick={handelBox}
        ></div>
      </div>
      <div className="w-96  mt-10 bg-[#2F2F2F]">
        <div className="ml-3 flex justify-between items-center">
          <div className="text-white flex ">
            <span className="text-blue-500 mt-1 text-xl mr-1">
              <FaCode />
            </span>{" "}
            Code
          </div>
          <div className="text-blue-300 transition-all hover:text-blue-600 text-xl">
            <CopyToClipboard
              text={"boxShadow :" + boxShadow + ";"}
              onCopy={() => setcopy(true)}
            >
              {copy ? <LuCopyCheck className="text-blue-100" /> : <LuCopy />}
            </CopyToClipboard>
          </div>
        </div>
        <SyntaxHighlighter language="css" style={materialDark}>
          {"box-shadow :" + boxShadow + ";"}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Boxshadow;
