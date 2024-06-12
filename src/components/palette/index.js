import axios from "axios";
import React, {useRef, useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {FaCode} from "react-icons/fa";
import {LuCopy, LuCopyCheck} from "react-icons/lu";

import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import Model from "../Model";
function Palette() {
  const [data, setData] = useState(null);
  const [color, setcolor] = useState("#03a9f4");
  const [copy, setcopy] = useState(false);
  const [type, settype] = useState("Css");
  const timerId = useRef(null);

  const handleCopy = (e) => {
    //Creating a timeout
    const value = e.target.innerHTML;
    setcopy(false);
    if (!value.includes("Copied")) {
      e.target.innerHTML = "Copied " + value;

      timerId.current = setTimeout(() => {
        e.target.innerHTML = value;
        // console.log(e.target.value);
      }, 2000);

      return () => {
        clearTimeout(timerId.current);
      };
    }
  };
  const Generat = () => {
    setcopy(false);
    let value = document.querySelector("#colorinput").value;
    if (!value.includes("#")) {
      value = "#" + value;
    }
    let Reg_Exp = /^#[0-9A-F]{6}$/i;

    if (Reg_Exp.test(value)) {
      value = value.substr(1);
      console.log(value);
      axios
        .get(
          `https://www.thecolorapi.com/scheme?hex=${value}&mode=monochrome&count=5`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // handle success
          setcolor("#" + value);
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };
  const handleType = (e) => {
    setcopy(false);
    document.getElementById("type").removeAttribute("id");
    e.target.setAttribute("id", "type");
    settype(e.target.innerHTML);
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center mt-4 mb-4">
        <input
          type="text"
          id="colorinput"
          placeholder="Color code #value"
          class="placeholder:italic placeholder:text-black-600 block text-white bg-black-400 w-72 border border-black-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-blue-600 focus:ring-1 sm:text-sm"
        />
        <button
          onClick={Generat}
          className="rounded bg-blue-300  hover:bg-blue-200 ml-2 hover:text-white p-3">
          Generat
        </button>
      </div>
      <div className="w-full  flex items-center flex-col">
        <div className="h-80 flex mt-4 mb-4">
          <div
            onClick={handleCopy}
            className="w-16 rounded-[30px] [writing-mode:vertical-lr]   mr-2  flex font-bold text-xl  justify-center items-center"
            style={{background: `${color}`}}>
            {color}
          </div>
          {data === null ? (
            <>
              <div
                onClick={handleCopy}
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#0573A5]">
                #0573A5
              </div>
              <div
                onClick={handleCopy}
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#0696D8]">
                #0696D8
              </div>
              <div
                onClick={handleCopy}
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#16B3FA]">
                #16B3FA
              </div>
              <div
                onClick={handleCopy}
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#47C4FC]">
                #47C4FC
              </div>
            </>
          ) : (
            data.colors.map((e) => (
              <CopyToClipboard text={e.hex.value}>
                <div
                  className="w-16 rounded-[30px] cursor-pointer mr-2 [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center"
                  onClick={handleCopy}
                  style={{
                    background: `${e.hex.value}`,
                    color:
                      e.rgb.r * 0.299 + e.rgb.b * 0.587 + e.rgb.g * 0.114 > 130
                        ? "black"
                        : "white",
                  }}>
                  {e.hex.value}
                </div>
              </CopyToClipboard>
            ))
          )}
        </div>
        <div className="flex mb-4">
          <div
            className="h-16 rounded-full w-16 mr-2  mb-2 "
            style={{background: `${color}`}}></div>
          {data === null ? (
            <>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#0573A5]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#0696D8]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#16B3FA]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#47C4FC]"></div>
            </>
          ) : (
            data.colors.map((e) => (
              <div
                className="h-16 rounded-full w-16 mr-2 mb-2"
                style={{background: `${e.hex.value}`}}></div>
            ))
          )}
        </div>
        <Model colors={data?.colors} main={color} />
        {data !== null && (
          <div className="w-96  mt-3 mb-2 bg-[#2F2F2F]">
            <div className=" flex justify-between items-center">
              <div className="text-white flex ">
                <span className="text-blue-500 mt-1 text-xl ml-1 mr-1">
                  <FaCode />
                </span>{" "}
                Code
              </div>
              <div className="text-blue-300 flex transition-all mr-1 hover:text-blue-600 text-xl">
                <div
                  className="text-white p-1 mr-1 text-xs "
                  onClick={handleType}
                  id="type">
                  Css
                </div>
                <div
                  className="text-white mr-1 p-1 text-xs"
                  onClick={handleType}>
                  Scss
                </div>
                <div
                  className="text-white mr-1 p-1 text-xs"
                  onClick={handleType}>
                  Tcss
                </div>
                <CopyToClipboard
                  text={
                    type === "Css"
                      ? "--color-primary-100 :" +
                        color +
                        ";" +
                        " \n--color-primary-200 :" +
                        data?.colors[0].hex.value +
                        ";" +
                        " \n--color-primary-300 :" +
                        data?.colors[1].hex.value +
                        ";" +
                        " \n--color-primary-400 :" +
                        data?.colors[2].hex.value +
                        ";" +
                        " \n--color-primary-500 :" +
                        data?.colors[3].hex.value +
                        ";" +
                        " \n--color-primary-600 :" +
                        data?.colors[4].hex.value +
                        ";"
                      : type === "Scss"
                      ? "$color-primary-100 :" +
                        color +
                        ";" +
                        " \n$color-primary-200 :" +
                        data?.colors[0].hex.value +
                        ";" +
                        " \n$color-primary-300 :" +
                        data?.colors[1].hex.value +
                        ";" +
                        " \n$color-primary-400 :" +
                        data?.colors[2].hex.value +
                        ";" +
                        " \n$color-primary-500 :" +
                        data?.colors[3].hex.value +
                        ";" +
                        " \n$color-primary-600 :" +
                        data?.colors[4].hex.value +
                        ";"
                      : "primary {" +
                        "\n100 :" +
                        color +
                        ";" +
                        " \n200 :" +
                        data?.colors[0].hex.value +
                        ";" +
                        " \n300 :" +
                        +data?.colors[1].hex.value +
                        ";" +
                        " \n400 :" +
                        data?.colors[2].hex.value +
                        ";" +
                        " \n500 :" +
                        data?.colors[3].hex.value +
                        ";" +
                        " \n600 :" +
                        data?.colors[4].hex.value +
                        "; \n}"
                  }
                  onCopy={() => setcopy(true)}>
                  {copy ? (
                    <LuCopyCheck className="text-blue-100" />
                  ) : (
                    <LuCopy />
                  )}
                </CopyToClipboard>
              </div>
            </div>
            <SyntaxHighlighter language="css" style={materialDark}>
              {type === "Css"
                ? "--color-primary-100 :" +
                  color +
                  ";" +
                  " \n--color-primary-200 :" +
                  data?.colors[0].hex.value +
                  ";" +
                  " \n--color-primary-300 :" +
                  data?.colors[1].hex.value +
                  ";" +
                  " \n--color-primary-400 :" +
                  data?.colors[2].hex.value +
                  ";" +
                  " \n--color-primary-500 :" +
                  data?.colors[3].hex.value +
                  ";" +
                  " \n--color-primary-600 :" +
                  data?.colors[4].hex.value +
                  ";"
                : type === "Scss"
                ? "$color-primary-100 :" +
                  color +
                  ";" +
                  " \n$color-primary-200 :" +
                  data?.colors[0].hex.value +
                  ";" +
                  " \n$color-primary-300 :" +
                  data?.colors[1].hex.value +
                  ";" +
                  " \n$color-primary-400 :" +
                  data?.colors[2].hex.value +
                  ";" +
                  " \n$color-primary-500 :" +
                  data?.colors[3].hex.value +
                  ";" +
                  " \n$color-primary-600 :" +
                  data?.colors[4].hex.value +
                  ";"
                : "primary {" +
                  "\n100 :" +
                  color +
                  ";" +
                  " \n200 :" +
                  data?.colors[0].hex.value +
                  ";" +
                  " \n300 :" +
                  data?.colors[1].hex.value +
                  ";" +
                  " \n400 :" +
                  data?.colors[2].hex.value +
                  ";" +
                  " \n500 :" +
                  data?.colors[3].hex.value +
                  ";" +
                  " \n600 :" +
                  data?.colors[4].hex.value +
                  "; \n}"}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}

export default Palette;
