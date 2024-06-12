import React, {useEffect, useState} from "react";
import {BsFillPaletteFill, BsPalette} from "react-icons/bs";
import {IoMdSync} from "react-icons/io";
import {MdOutlineChangeHistory} from "react-icons/md";
import {RiSignpostFill} from "react-icons/ri";

function Model({colors, main}) {
  const [light, setLight] = useState([]);
  const [dark, setDark] = useState([]);
  const [fcolor, setfcolor] = useState("#47C4FC");
  const [lcolor, setlcolor] = useState("#0696D8");
  // const [Main, setMain] = useState(true);
  useEffect(() => {
    const r = parseInt(main?.slice(1, 3), 16);
    const g = parseInt(main?.slice(3, 5), 16);
    const b = parseInt(main?.slice(5, 7), 16);
    document.querySelector("#trainshap")?.classList.remove("rotate-180");
    document.querySelector("#triangle").style.color = "rgb(25 31 37 / 1)";
    document.querySelector("#triangle1").style.color = "rgb(25 31 37 / 1)";

    document.querySelector("#darkcard")?.style.removeProperty("background");

    document.querySelector("#lightcard")?.style.removeProperty("background");
    // console.log(document.querySelector("#darkcard"));
    let Light = colors
      ? colors.filter(
          (e) => e.rgb.r * 0.299 + e.rgb.b * 0.587 + e.rgb.g * 0.114 > 100
        )
      : [];

    let Dark = colors
      ? colors.filter(
          (e) => e.rgb.r * 0.299 + e.rgb.b * 0.587 + e.rgb.g * 0.114 <= 130
        )
      : [];
    if (colors) {
      setfcolor(colors[0].hex?.value);
      setlcolor(colors[colors.length - 1].hex?.value);
    }
    // console.log(colors);
    setLight(Light);
    setDark(Dark);
    r * 0.299 + b * 0.587 + g * 0.114 <= 130
      ? setDark([...Dark, main])
      : setLight([...Light, main]);
    if (Dark.length === 0 && Light.length === 0) {
      setDark([]);
      setLight([]);
    }
  }, [colors, main]);
  const handleTrain = (e) => {
    const triangle = document.querySelector("#triangle");
    const triangle1 = document.querySelector("#triangle1");
    const trainshap = document.querySelector("#trainshap");
    trainshap.classList.toggle("rotate-180");
    // if (e.target.className !== "") {

    //   console.log(e.target.className);
    // } else {
    //   e.target.parentElement.parentElement.parentElement.classList.toggle(
    //     "rotate-180"
    //   );
    // }
    const background = window
      .getComputedStyle(triangle1)
      .getPropertyValue("background")
      .split("none")[0];
    const color = window
      .getComputedStyle(triangle1)
      .getPropertyValue("color")
      .split("none")[0];
    if (trainshap.classList.contains("rotate-180")) {
      triangle.style.color = background;
      triangle.style.background = "rgb(25 31 37 / 1)";
      triangle1.style.color = background;
      triangle1.style.background = "rgb(25 31 37 / 1)";
    } else {
      triangle.style.color = "rgb(25 31 37 / 1)";
      triangle.style.background = color;
      triangle1.style.color = "rgb(25 31 37 / 1)";
      triangle1.style.background = color;
      // console.log(color);
    }
  };
  const Changedark = () => {
    const newL = Math.min(100, colors[4]?.hsl.l + 15);
    const background = `hsl(${colors[4]?.hsl.h}, ${colors[4]?.hsl.s}%, ${newL}%)`;
    const card = document.querySelector("#darkcard");

    card.style.background === ""
      ? (card.style.background = background)
      : card.style.removeProperty("background");
  };
  const Changelight = () => {
    const newL = Math.min(100, colors[1]?.hsl.l - 15);
    const background = `hsl(${colors[1]?.hsl.h}, ${colors[1]?.hsl.s}%, ${newL}%)`;
    const card = document.querySelector("#lightcard");

    card.style.background === ""
      ? (card.style.background = background)
      : card.style.removeProperty("background");
  };
  return (
    <div className="w-[32rem] rounded-md bg-black-300">
      {light.length !== 0 || dark.length !== 0 ? (
        <div className="w-full flex mt-3  justify-between items-center">
          <div className="text-white ml-2  font-bold  text-xl">
            The
            <span
              className=" bg-gradient-to-r from-[#47C4FC] via-[#0696D8] to-[#0696D8]  inline-block text-transparent bg-clip-text"
              style={{
                background: `linear-gradient(to right, ${fcolor}, ${lcolor})`,
                // -webki: "transparent";
                // -webkit-background-clip: text;
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Web
            </span>
            City
            <span
              className="text-[8px] text-end text-[#03a9f4]"
              style={{
                color:
                  light.length !== 0 && light[light.length - 1]?.hex
                    ? light[light.length - 1].hex.value
                    : light.length !== 0
                    ? light[light.length - 1]
                    : dark[dark.length - 1],
              }}>
              .CSS
            </span>
          </div>
          <div
            className="p-3 cursor-pointer  delay-150 rounded-xl hover:pr-3.5  hover:bg-[#0573A5] transition-all hover:pl-3.5  bg-[#0696D8] text-white mr-2"
            style={{
              background: dark[1]?.hex
                ? dark[1].hex.value
                : dark.length > 0 && dark[1]
                ? console.log(dark.length)
                : light.length !== 0 && light[0].hex.value,
            }}
            id="trainshap"
            onClick={handleTrain}>
            <MdOutlineChangeHistory />
          </div>
        </div>
      ) : (
        <div className="w-full flex mt-3  justify-between items-center">
          <div className="text-white ml-2  font-bold  text-xl">
            The
            <span className=" bg-gradient-to-r from-[#47C4FC] via-[#0696D8] to-[#0696D8]  inline-block text-transparent bg-clip-text">
              Web
            </span>
            City
            <span className="text-[8px] text-end text-[#03a9f4]">.CSS</span>
          </div>
          <div className="p-3 cursor-point cursor-pointer rounded-xl hover:pr-3.5  hover:bg-[#0573A5] transition-all hover:pl-3.5  bg-[#0696D8] text-white mr-2">
            <MdOutlineChangeHistory />
          </div>
        </div>
      )}{" "}
      {light.length !== 0 || dark.length !== 0 ? (
        <div className="w-full flex mt-2 justify-center items-center">
          <div
            className="w-64 h-44 text-black-100 bg-[#16B3FA]"
            style={{
              background:
                light.length !== 0 && light[light.length - 1]?.hex
                  ? light[light.length - 1]?.hex.value
                  : light.length !== 0
                  ? light[light.length - 1]
                  : dark !== 0 && dark[dark.length - 1]?.hex
                  ? dark[dark.length - 1].hex.value
                  : dark.length !== 0 && dark[dark.length - 1],
            }}
            id="triangle">
            <p className="text-xs mt-4 flex border-b-[.5px] items-center flex-col text-center">
              we<span className="text-[7px] font-bold">(12px)</span>{" "}
            </p>
            <div className="text-xl  border-b-[.5px] font-semibold  text-center">
              will test
              <div className="text-[9px]  font-semibold">
                (20px) (600w)
              </div>{" "}
            </div>
            <div className="text-2xl font-bold  text-center">
              the font
              <div className="text-[9px]  font-bold">(24px) (700w)</div>{" "}
            </div>
            {/* We will test the font whether it is clear or not against a background */}
          </div>

          <div
            className="w-64 h-44 text-black-100 bg-[#16B3FA]"
            style={{
              background:
                light.length !== 0 && light[light.length - 1]?.hex
                  ? light[light.length - 1]?.hex.value
                  : light.length !== 0
                  ? light[light.length - 1]
                  : dark !== 0 && dark[dark.length - 1]?.hex
                  ? dark[dark.length - 1].hex.value
                  : dark.length !== 0 && dark[dark.length - 1],
            }}
            id="triangle1">
            {" "}
            <p className="text-sm mt-1 flex border-b-[.5px] items-center font-extrabold flex-col  text-center">
              whether it is clear or not{" "}
              <span className="text-[7px] font-bold">(14px) (800w)</span>{" "}
            </p>
            <p className="text-base flex border-b-[.5px] items-center font-extralight flex-col  text-center">
              against a
              <span className="text-[7px] font-bold">(16px) (100w)</span>{" "}
            </p>{" "}
            <p className="text-lg flex  items-center font-extralight flex-col  text-center">
              bg.<span className="text-[7px] font-bold">(18px) (100w)</span>{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex mt-2 justify-center items-center">
          <div className="w-64 h-44  bg-[#16B3FA]" id="triangle">
            <p className="text-xs mt-4 flex border-b-[.5px] items-center flex-col text-black-100 text-center">
              we<span className="text-[7px] font-bold">(12px)</span>{" "}
            </p>
            <div className="text-xl  border-b-[.5px] font-semibold  text-black-100 text-center">
              will test
              <div className="text-[9px]  font-semibold">
                (20px) (600w)
              </div>{" "}
            </div>
            <div className="text-2xl font-bold  text-black-100 text-center">
              the font
              <div className="text-[9px]  font-bold">(24px) (700w)</div>{" "}
            </div>
            {/* We will test the font whether it is clear or not against a background */}
          </div>

          <div className="w-64 h-44  bg-[#16B3FA]" id="triangle1">
            {" "}
            <p className="text-sm mt-1 flex border-b-[.5px] items-center font-extrabold flex-col text-black-100 text-center">
              whether it is clear or not{" "}
              <span className="text-[7px] font-bold">(14px) (800w)</span>{" "}
            </p>
            <p className="text-base flex border-b-[.5px] items-center font-extralight flex-col text-black-100 text-center">
              against a
              <span className="text-[7px] font-bold">(16px) (100w)</span>{" "}
            </p>{" "}
            <p className="text-lg flex  items-center font-extralight flex-col text-black-100 text-center">
              bg.<span className="text-[7px] font-bold">(18px) (100w)</span>{" "}
            </p>
          </div>
        </div>
      )}
      {light.length !== 0 || dark.length !== 0 ? (
        <div className="w-full  flex justify-center">
          {dark.length !== 0 ? (
            <div
              className="w-56 ml-4 mt-1 mb-3 rounded h-fit  bg-black-600"
              id="darkcard">
              <div className="flex justify-center items-center">
                <RiSignpostFill
                  className="text-2xl text-[#0696D8] mr-1"
                  style={{
                    color:
                      dark.length >= 2 && dark[1].hex
                        ? dark[1].hex.value
                        : dark.length >= 2
                        ? dark[1]
                        : light[1].hex
                        ? light[1].hex.value
                        : light[1],
                  }}
                />
                <div
                  className="text-base font-extrabold  text-[#0573A5]"
                  style={{
                    color: dark[0] && dark[0].hex ? dark[0].hex.value : dark[0],
                    // ? light[light.length - 1].hex.value
                    // : light[light.length - 1],
                  }}>
                  Dark Color Test
                </div>
              </div>
              {dark.length !== 0 ? (
                dark.map((e) => (
                  <div
                    className="w-full flex mt-2 items-center justify-center "
                    style={{color: e.hex ? e.hex.value : e}}>
                    <BsFillPaletteFill className="text-3xl ml-3" />
                    <BsPalette className="text-3xl ml-3 " />
                    <BsFillPaletteFill className="text-xl ml-3 " />
                    <BsPalette className="text-xl ml-3 " />
                    <BsFillPaletteFill className="text-sm ml-3 " />
                    <BsPalette className="text-sm ml-3 " />
                  </div>
                ))
              ) : (
                <></>
              )}
              <div className="w-full flex mt-2 items-center justify-center ">
                <div
                  className="w-10 cursor-pointer m-3 flex hover:rotate-90 items-center text-2xl justify-center h-8 cursor-point  rounded-xl  hover:bg-[#0573A5] transition-all   bg-[#0696D8] text-white "
                  style={{
                    background:
                      dark.length >= 3 && dark[2].hex
                        ? dark[2].hex.value
                        : dark.length >= 3
                        ? dark[2]
                        : light[0].hex
                        ? light[0].hex.value
                        : light[0],
                  }}
                  onClick={Changedark}>
                  <IoMdSync />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}{" "}
          {light.length !== 0 ? (
            <div
              className="w-56 ml-4 h-fit  mt-1 mb-3 rounded bg-black-200"
              id="lightcard">
              <div className="flex justify-center items-center">
                <RiSignpostFill
                  className="text-2xl text-[#03a9f4] mr-1"
                  style={{
                    color:
                      light.length >= 2 && light[light.length - 2].hex
                        ? light[light.length - 2].hex.value
                        : light.length >= 2
                        ? light[light.length - 2]
                        : dark[dark.length - 2].hex
                        ? dark[dark.length - 2].hex.value
                        : dark[dark.length - 2],
                  }}
                />
                <div
                  className="text-base font-extrabold  text-[#47C4FC]"
                  style={{
                    color:
                      light[light.length - 1] && light[light.length - 1].hex
                        ? light[light.length - 1].hex.value
                        : light[light.length - 1],
                    // ? light[light.length - 1].hex.value
                    // : light[light.length - 1],
                  }}>
                  Light Color Test
                </div>
              </div>
              {light.map((e) => (
                <div
                  className="w-full flex mt-2 items-center justify-center "
                  style={{color: e.hex ? e.hex.value : e}}>
                  <BsFillPaletteFill className="text-3xl ml-3" />
                  <BsPalette className="text-3xl ml-3 " />
                  <BsFillPaletteFill className="text-xl ml-3 " />
                  <BsPalette className="text-xl ml-3 " />
                  <BsFillPaletteFill className="text-sm ml-3 " />
                  <BsPalette className="text-sm ml-3 " />
                </div>
              ))}
              <div className="w-full flex mt-2 items-center justify-center ">
                <div
                  className="w-10 cursor-pointer m-3 flex hover:rotate-90 items-center text-2xl justify-center h-8 cursor-point  rounded-xl  hover:bg-[#03a9f4] transition-all   bg-[#47C4FC]  "
                  style={{
                    background:
                      light.length >= 3 && light[2]?.hex
                        ? light[2].hex.value
                        : light.length >= 3
                        ? light[2]
                        : dark[dark.length - 1]?.hex
                        ? dark[dark.length - 1].hex.value
                        : dark[dark.length - 2].hex &&
                          dark[dark.length - 2].hex.value,
                  }}
                  onClick={Changelight}>
                  <IoMdSync />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <div className="w-56 ml-4 mt-1 mb-3 rounded  bg-black-600">
            <div className="flex justify-center items-center">
              <RiSignpostFill className="text-2xl text-[#0696D8] mr-1" />
              <div className="text-base font-extrabold  text-[#0573A5]">
                Dark Color Test
              </div>
            </div>
            <div className="w-full flex mt-2 items-center text-[#0573A5]   justify-center">
              <BsFillPaletteFill className="text-3xl ml-3" />
              <BsPalette className="text-3xl ml-3 " />
              <BsFillPaletteFill className="text-xl ml-3 " />
              <BsPalette className="text-xl ml-3 " />
              <BsFillPaletteFill className="text-sm ml-3 " />
              <BsPalette className="text-sm ml-3 " />
            </div>
            <div className="w-full flex mt-2 items-center text-[#0696D8] justify-center">
              <BsFillPaletteFill className="text-3xl ml-3  " />
              <BsPalette className="text-3xl ml-3 " />
              <BsFillPaletteFill className="text-xl ml-3 " />
              <BsPalette className="text-xl ml-3 " />
              <BsFillPaletteFill className="text-sm ml-3 " />
              <BsPalette className="text-sm ml-3 " />
            </div>
            <div className="w-full flex mt-2 items-center justify-center ">
              <div className="w-10 cursor-pointer flex hover:rotate-90 items-center text-2xl justify-center h-8 cursor-point  rounded-xl  hover:bg-[#0573A5] transition-all   bg-[#0696D8] text-white ">
                <IoMdSync />
              </div>
            </div>
          </div>
          <div className="w-56 ml-4 mt-1 mb-3 rounded bg-black-200">
            <div className="flex justify-center items-center">
              <RiSignpostFill className="text-2xl text-[#03a9f4] mr-1" />
              <div className="text-base font-extrabold  text-[#47C4FC]">
                Light Color Test
              </div>
            </div>
            <div className="w-full flex mt-2 items-center text-[#47C4FC]   justify-center">
              <BsFillPaletteFill className="text-3xl ml-3  " />
              <BsPalette className="text-3xl ml-3  " />
              <BsFillPaletteFill className="text-xl ml-3  " />
              <BsPalette className="text-xl ml-3  " />
              <BsFillPaletteFill className="text-sm ml-3  " />
              <BsPalette className="text-sm ml-3  " />
            </div>
            <div className="w-full flex mt-2 text-[#03a9f4] items-center justify-center">
              <BsFillPaletteFill className="text-3xl ml-3  " />
              <BsPalette className="text-3xl ml-3  " />
              <BsFillPaletteFill className="text-xl ml-3  " />
              <BsPalette className="text-xl ml-3  " />
              <BsFillPaletteFill className="text-sm ml-3  " />
              <BsPalette className="text-sm ml-3  " />
            </div>
            <div className="w-full flex mt-2 items-center justify-center ">
              <div className="w-10 cursor-pointer flex hover:rotate-90 items-center text-2xl justify-center h-8 cursor-point  rounded-xl  hover:bg-[#03a9f4] transition-all   bg-[#47C4FC]  ">
                <IoMdSync />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
