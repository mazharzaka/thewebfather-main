import Slider from "rc-slider";
import React from "react";

function Boxshadow() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mt-6 mb-4 justify-start">
        <div
          className="w-64 h-44 bg-black-100  rounded-3xl"
          style={{ boxShadow: "0px 0px 14px 10px #b1d8fb" }}
        ></div>
      </div>
      <div className="flex ">
        <div className="w-52 rounded  bg-black-400 mr-5">
          {/* <div className="w-full picker one">
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
            // className="w-10 border-2 border-transparent h-6 rounded mr-6 bg-blue-100  active"
            // handleRender={handleRender}
            style={{ background: color1 }}
            onClick={Fcolor}
          ></div>
          <div
            id="color"
            // className="w-10 border-2  border-transparent h-6 rounded bg-blue-100 "
            onClick={Seccolor}
            style={{ background: color2 }}
          ></div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="ml-1 mr-1 text-white">Type</label>
          <div className="w-full text-center">
            <select
              onClick={Type}
              id="options"
              className="h-7 w-4/5 mt-3 rounded border-2  border-transparent focus:outline-none "
            >
              <option>linear</option>
              <option>radial</option>
            </select>
          </div>
        </div> */}

          <div className="w-full  flex flex-col mt-3" id="angle">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Angle</span>
              {/* {deg}deg */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                // onChange={(e) => Deg(e)}
                max={360}
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
              <span className="text-white">Color1</span>
              {/* {fnum}% */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                // onChange={(e) => Fnum(e)}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                max={360}
                // value={fnum}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4 mb-4">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Color2</span>
              {/* {snum}% */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                // onChange={(e) => Snum(e)}
                max={360}
                // value={snum}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="w-52 rounded  bg-black-400 mr-5">
          {/* <div className="w-full picker one">
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
            // className="w-10 border-2 border-transparent h-6 rounded mr-6 bg-blue-100  active"
            // handleRender={handleRender}
            style={{ background: color1 }}
            onClick={Fcolor}
          ></div>
          <div
            id="color"
            // className="w-10 border-2  border-transparent h-6 rounded bg-blue-100 "
            onClick={Seccolor}
            style={{ background: color2 }}
          ></div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="ml-1 mr-1 text-white">Type</label>
          <div className="w-full text-center">
            <select
              onClick={Type}
              id="options"
              className="h-7 w-4/5 mt-3 rounded border-2  border-transparent focus:outline-none "
            >
              <option>linear</option>
              <option>radial</option>
            </select>
          </div>
        </div> */}

          <div className="w-full  flex flex-col mt-3" id="angle">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Angle</span>
              {/* {deg}deg */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                // onChange={(e) => Deg(e)}
                max={360}
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
              <span className="text-white">Color1</span>
              {/* {fnum}% */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                // onChange={(e) => Fnum(e)}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                max={360}
                // value={fnum}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4 mb-4">
            <label className="ml-1 mr-1 flex justify-between text-blue-100">
              {" "}
              <span className="text-white">Color2</span>
              {/* {snum}% */}
            </label>
            <div className="w-full text-center">
              <Slider
                min={0}
                styles={{
                  tracks: {
                    background: `linear-gradient(90deg, #03a9f4 0%, #43e1b0 50%, #4caf50 100%)`,
                  },
                  track: {
                    background: "transparent",
                  },
                }}
                // onChange={(e) => Snum(e)}
                max={360}
                // value={snum}
                className="transparent h-1.5 w-4/5  cursor-pointer appearance-none rounded-lg border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxshadow;
