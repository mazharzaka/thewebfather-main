import React, {useEffect, useState} from "react";
import {ColorPicker, useColor} from "react-color-palette";
import CopyToClipboard from "react-copy-to-clipboard";
import {FaCode} from "react-icons/fa";
import {LuCopy, LuCopyCheck} from "react-icons/lu";

import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

function TextShadow() {
  const [picker, setPicker] = useState("#000000");
  const [copy, setcopy] = useState(false);
  const [color, setColor] = useColor(picker);
  const [horizontal, setHorizontal] = useState("3");
  const [vertical, setVertical] = useState("7");
  const [opacity, setOpacity] = useState("0.4");
  const [blur, setBlur] = useState("3");
  const [text, settext] = useState("");
  const [color1, setColor1] = useColor("#03a9f4");
  useEffect(() => {
    setColor1(color.hex);
    // console.log(color);
    settext(
      `${horizontal}px ${vertical}px ${blur}px rgba(${Math.round(
        color.rgb.r
      )}, ${Math.round(color.rgb.g)}, ${Math.round(color.rgb.b)}, ${opacity})`
    );
  });
  const Hor = (e) => {
    const value = parseInt(e.target.value);
    setHorizontal(value);
    setcopy(false);
  };
  const Vertical = (e) => {
    const value = parseInt(e.target.value);
    setVertical(value);
    setcopy(false);
  };
  const Blur = (e) => {
    const value = parseInt(e.target.value);
    setBlur(value);
    setcopy(false);
  };
  const Opacity = (e) => {
    const value = parseInt(e.target.value);
    setOpacity(Math.round(value) / 100);
    setcopy(false);
  };
  return (
    <div className="flex mt-5 mb-3">
      <div className="w-52 rounded  bg-black-400 mr-5">
        <div className="w-full picker one">
          <ColorPicker
            height={100}
            hideInput={["rgb", "hsv"]}
            color={color}
            onChange={setColor}
          />
        </div>
        <div className="flex mt-3 w-full justify-center">
          <div
            id="color"
            className="w-10 border-2 border-transparent h-6 rounded  bg-blue-100  active"
            style={{background: color1}}></div>
        </div>

        <div className="w-full  flex flex-col mt-3" id="angle">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Horizontal offset</span>
            {horizontal}px
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="-100"
              onChange={Hor}
              max="100"
              defaultValue={horizontal}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Vertical offset</span>
            {vertical}px
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="-100"
              onChange={Vertical}
              max="100"
              defaultValue={vertical}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4 mb-4">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Blur</span>
            {blur}px
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="0"
              onChange={Blur}
              max="100"
              defaultValue={blur}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4 mb-4">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Opacity</span>
            {opacity * 100}%
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="0"
              onChange={Opacity}
              max="100"
              defaultValue={opacity * 100}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
      </div>{" "}
      <div>
        <div
          className="w-80 h-28 font-semibold bg-white flex items-center justify-center text-2xl text-blue-200"
          style={{textShadow: text, color: color1}}>
          The Web Father Text Shadow.
        </div>
        <div className="w-80  mt-10 bg-[#2F2F2F]">
          <div className="ml-3 flex justify-between items-center">
            <div className="text-white flex ">
              <span className="text-blue-500 mt-1 text-xl mr-1">
                <FaCode />
              </span>{" "}
              Code
            </div>
            <div className="text-blue-300 transition-all hover:text-blue-600 text-xl">
              <CopyToClipboard
                text={"text-shadow: " + text + ";" + "\ncolor: " + color1 + ";"}
                onCopy={() => setcopy(true)}>
                {copy ? <LuCopyCheck className="text-blue-100" /> : <LuCopy />}
              </CopyToClipboard>
            </div>
          </div>
          <SyntaxHighlighter language="css" style={materialDark}>
            {"text-shadow: " + text + ";" + "\ncolor: " + color1 + ";"}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default TextShadow;
