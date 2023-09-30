import { useState } from "react";
import "./App.css";
import Bg from "./components/Bg";

function App() {
  // States

  let [dark, setDark] = useState(true);
  function darkmode() {
    setDark(!dark);
  }

  let [current, setCurrent] = useState("0");
  let [prev, setPrev] = useState("");

  // Function

  function handleClear() {
    setCurrent("0");
    setPrev("");
  }

  function handleSign(e) {
    if (
      current.length < 17 &&
      current[current.length - 1] !== "-" &&
      current[current.length - 1] !== "+" &&
      current[current.length - 1] !== "*" &&
      current[current.length - 1] !== "/"
    ) {
      if (current === "0") {
        setCurrent(e.target.name);
      } else {
        setCurrent(current + e.target.name);
      }
    }
  }

  function handleDelete() {
    setCurrent(current.slice(0, current.length - 1));
  }

  function handleNum(e) {
    if (current.length < 17) {
      if (current === "0") {
        setCurrent(e.target.name);
      } else {
        setCurrent(current + e.target.name);
      }
    }
  }

  function handleEqual() {
    if (
      current[current.length - 1] === "/" ||
      current[current.length - 1] === "+" ||
      current[current.length - 1] === "-" ||
      current[current.length - 1] === "*"
    ) {
      setCurrent(current.slice(0, current.length - 1));
      setPrev(current);
      setCurrent(String(eval(current)));
    } else {
      setPrev(current);
      setCurrent(String(eval(current)));
    }
  }

  // Styles

  let styles = {
    transform: dark ? "translateX(100%)" : "",
  };

  let mainstyles = {
    background: dark ? "#102334" : "#A0D7FF",
    color: dark ? "#F7F8FB" : "#005DB2",
  };

  let pro = {
    background: dark
      ? "#17181A"
      : "linear-gradient(to left top, white , #bddfff)",
    color: dark ? "#F7F8FB" : "#005DB2",
  };

  let keystyles = {
    backgroundColor: dark ? "#303136" : "#6eabff0f",
    boxShadow: `inset 0 4px 8px ${
      dark ? "rgba(240, 248, 255, 0.6)" : "#5eb2f7"
    }`,
  };

  return (
    <article
      className="w-full h-screen  bg-noon relative transition-all duration-300"
      style={mainstyles}
    >
      <div
        onClick={darkmode}
        className="flex justify-center items-center gap-2 font-bold absolute right-10 top-10"
      >
        <p onClick={darkmode}>Light</p>
        <div onClick={darkmode} className="w-16 h-8 bg-mainblue rounded-2xl">
          <div
            onClick={darkmode}
            className="bg-white bg-opacity-70 h-8 w-8 rounded-full transition-all duration-300"
            style={styles}
          ></div>
        </div>
        <p onClick={darkmode}>Dark</p>
      </div>
      <div className="w-full h-screen grid place-content-center">
        <article className="flex justify-center items-center gap-28">
          <section>
            <p className="font-bold text-3xl">Calculator</p>
          </section>

          {/* This is calvulator */}

          <section
            className="z-10 w-[20vw] h-[75vh] rounded-2xl bg-red-400 transition-all duration-300 p-4 flex flex-col justify-center gap-8 shadow-xl shadow-[#6eabff6c]"
            style={pro}
          >
            {/* This are here to show thw answerr and current calculation */}

            <section className="w-full h-40 flex flex-col justify-end items-end p-4 gap-4">
              <div className="text-right font-semibold font-serif text-lg">
                {prev}
              </div>
              <div className="text-right font-bold text-2xl font-serif ">
                {current}
              </div>
            </section>

            {/* THis are buttons */}

            <section className="grid grid-cols-4 grid-rows-5 gap-4 font-bold text-xl">
              <button
                style={keystyles}
                onClick={handleClear}
                name="ce"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                CE
              </button>

              <button
                style={keystyles}
                onClick={handleDelete}
                name="del"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                Del
              </button>

              <button
                style={keystyles}
                onClick={handleSign}
                name="/"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                /
              </button>
              <button
                style={keystyles}
                onClick={handleSign}
                name="*"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                x
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="7"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                7
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="8"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                8
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="9"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                9
              </button>
              <button
                style={keystyles}
                onClick={handleSign}
                name="+"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl text-2xl"
              >
                +
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="4"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                4
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="5"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                5
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="6"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                6
              </button>
              <button
                style={keystyles}
                onClick={handleSign}
                name="-"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl text-2xl"
              >
                -
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="1"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                1
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="2"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                2
              </button>
              <button
                style={keystyles}
                onClick={handleNum}
                name="3"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                3
              </button>
              <button
                style={keystyles}
                name="0"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl col-span-2"
              >
                0
              </button>
              <button
                style={keystyles}
                name="dot"
                className="w-full h-12 grid place-content-center transition-all duration-300 rounded-xl"
              >
                .
              </button>

              <button
                name="equal"
                onClick={handleEqual}
                className="bg-[#005DB2] w-full grid place-content-center rounded-xl font-bold text-3xl text-white  col-start-4 col-end-5 row-start-4 row-end-6 shadow-inner shadow-white"
              >
                =
              </button>
            </section>
          </section>
        </article>
      </div>
      <Bg />
    </article>
  );
}

export default App;
