import React from "react";
import {Route, Routes} from "react-router-dom";

import {Link} from "react-router-dom";
import Gradient from "../gradient";
import TextShadow from "../Textshadow";
import Palette from "../palette";
import Contrast from "../Contrast";

function Generator() {
  const btn = (e) => {
    const dele = document.querySelector("#active-btn");
    dele.removeAttribute("id");
    e.target.setAttribute("id", "active-btn");
  };
  return (
    <div className=" bg-black-200 flex flex-col items-center ">
      <div className="flex">
        <div
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
          All
        </div>
        <div
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
          Box Shadow
        </div>{" "}
        <Link to="/palette">
          <div
            onClick={btn}
            className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
            Palette
          </div>
        </Link>{" "}
        <Link to="/">
          <div
            id="active-btn"
            onClick={btn}
            className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
            Gradient
          </div>
        </Link>
        <Link to="/ContrastChecker">
          <div
            onClick={btn}
            className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-300">
            Contrast Checker
          </div>
        </Link>{" "}
        <Link to="/textshadow">
          <div
            onClick={btn}
            className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-300">
            Text Shadow
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Gradient />} exact />
        <Route path="/ContrastChecker" element={<Contrast />} exact />
        <Route path="/textshadow" element={<TextShadow />} exact />
        <Route path="/palette" element={<Palette />} exact />
      </Routes>
    </div>
  );
}

export default Generator;
