import React, {useEffect, useState} from "react";
import {ColorPicker, useColor} from "react-color-palette";
import "react-color-palette/css";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {FaCode} from "react-icons/fa";
import {LuCopy, LuCopyCheck} from "react-icons/lu";
import CopyToClipboard from "react-copy-to-clipboard";

function Gradient() {
  const [background, setBackground] = useState("");
  const [type, setType] = useState("linear");
  const [fnum, setFnum] = useState(0);
  const [snum, setSnum] = useState(100);
  const [color1, setcolor1] = useState("#03a9f4");
  const [picker, setPicker] = useState("#03a9f4");
  const [color2, setcolor2] = useState("#43e1b0");
  const [deg, setDeg] = useState(90);
  const [copy, setcopy] = useState(false);
  const generateGradient = () => {
    const picker = document.querySelector(".picker");
    picker.className === "w-full picker two"
      ? setcolor2(color.hex)
      : setcolor1(color.hex);
    type === "linear"
      ? setBackground(`
  ${type}-gradient(${deg}deg, ${color1} ${fnum}%, ${color2} ${snum}%)`)
      : setBackground(`
    ${type}-gradient( ${color1} ${fnum}%, ${color2} ${snum}%)`);
  };
  useEffect(() => {
    generateGradient();
  });
  const [color, setColor] = useColor(picker);
  const Fcolor = (e) => {
    const picker = document.querySelector(".picker");
    const colors = document.querySelectorAll("#color");
    colors.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    // fname.classList.remove("active");
    // sname.classList.add("active");
    picker.classList.remove("two");
    picker.classList.add("one");
    setPicker(color1);
    setcopy(false);
  };
  const handlecolor = (e) => {
    const picker = document.querySelector(".picker");
    const colors = document.querySelectorAll("#color");
    const dele = document.querySelector("#color-active");
    dele.removeAttribute("id");
    e.target.setAttribute("id", "color-active");
    colors.forEach((e) => e.classList.remove("active"));
    colors[0].classList.add("active");
    picker.classList.remove("two");
    picker.classList.add("one");
    const split = e.target.getAttribute("style").split(")");
    const colortwo = split[1].split("%,")[1] + ")";
    const colorone = split[0].split("deg,")[1] + ")";
    setcolor2(colortwo);
    setcolor1(colorone);
    console.log(color1);
    setPicker(colorone);
    // setDeg(90);
    // setType("linear");
    setcopy(false);
  };
  const Seccolor = (e) => {
    const picker = document.querySelector(".picker");
    const colors = document.querySelectorAll("#color");
    colors.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    picker.classList.remove("one");
    picker.classList.add("two");
    setPicker(color2);
    setcopy(false);
  };
  const Deg = (e) => {
    const value = parseInt(e.target.value);
    setDeg(value);
    setcopy(false);
  };
  const Fnum = (e) => {
    const value = parseInt(e.target.value);
    setFnum(value);
    setcopy(false);
  };
  const Snum = (e) => {
    const value = parseInt(e.target.value);
    setSnum(value);
    setcopy(false);
  };
  const Type = () => {
    setcopy(false);
    const mylist = document.getElementById("options");
    const angle = document.getElementById("angle");
    const value = mylist.options[mylist.selectedIndex].text;
    setType(value);
    value === "radial"
      ? angle.classList.add("hidden")
      : angle.classList.remove("hidden");
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
            className="w-10 border-2 border-transparent h-6 rounded mr-6 bg-blue-100  active"
            style={{background: color1}}
            onClick={Fcolor}></div>
          <div
            id="color"
            className="w-10 border-2  border-transparent h-6 rounded bg-blue-100 "
            onClick={Seccolor}
            style={{background: color2}}></div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="ml-1 mr-1 text-white">Type</label>
          <div className="w-full text-center">
            <select
              onClick={Type}
              id="options"
              className="h-7 w-4/5 mt-3 rounded border-2  border-transparent focus:outline-none ">
              <option>linear</option>
              <option>radial</option>
            </select>
          </div>
        </div>

        <div className="w-full  flex flex-col mt-3" id="angle">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Angle</span>
            {deg}deg
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="0"
              onChange={Deg}
              max="360"
              defaultValue={deg}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Color1</span>
            {fnum}%
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="0"
              onChange={Fnum}
              max="100"
              defaultValue={fnum}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4 mb-4">
          <label className="ml-1 mr-1 flex justify-between text-blue-100">
            {" "}
            <span className="text-white">Color2</span>
            {snum}%
          </label>
          <div className="w-full text-center">
            <input
              type="range"
              min="0"
              onChange={Snum}
              max="100"
              defaultValue={snum}
              className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent bg-blue-500"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="w-72 h-44 bg-blue-600"
          style={{
            background: background,
          }}></div>
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
                text={"background :" + background + ";"}
                onCopy={() => setcopy(true)}>
                {copy ? <LuCopyCheck className="text-blue-100" /> : <LuCopy />}
              </CopyToClipboard>
            </div>
          </div>
          <SyntaxHighlighter language="css" style={materialDark}>
            {"background :" + background + ";"}
          </SyntaxHighlighter>
        </div>
        <div className="w-80  flex flex-wrap">
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2 "
            id="color-active"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#03a9f4 0%,#43e1b0 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2 "
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#FF512F  0%,#DD2476 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#FFD3A5 0%,#FD6585 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#0F3443 0%,#34E89E 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#283c86 0%,#45a247 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#c0392b 0%,#8e44ad 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#8f71ff 0%,#8bffff 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#000046 0%,#1CB5E0 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#009245    0%,#FCEE21 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#fc8a15 0%,#fff6a2 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#662D8C  0%,#ED1E79 100%)",
            }}></div>
          <div
            className="w-11 mb-2 mr-4 rounded h-12 border-2"
            onClick={handlecolor}
            style={{
              background: "linear-gradient(90deg,#614385   0%,#516395 100%)",
            }}></div>
        </div>
      </div>
    </div>
  );
}

export default Gradient;
