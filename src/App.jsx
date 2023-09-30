import { useState } from "react";
import "./App.css";
import Bg from "./components/Bg";

function App() {
  let [dark, setDark] = useState(true);
  function darkmode() {
    setDark(!dark);
  }

  let styles = {
    transform: dark ? "translateX(100%)" : "",
  };

  let mainstyles = {
    backgroundColor: dark ? "#102334" : "#A0D7FF",
    color: dark ? "#F7F8FB" : "#005DB2",
  };

  let pro = {
    backgroundColor: dark ? "#17181A" : "#F7F8FB",
    color: dark ? "#F7F8FB" : "#005DB2",
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
          <section
            className="z-10 w-[20vw] h-[75vh] rounded-2xl bg-red-400 transition-all duration-300 p-4 flex flex-col justify-center gap-8"
            style={pro}
          >
            <section className="border border-green-600 w-full h-40"></section>
            <section className="grid grid-cols-4 grid-rows-5 gap-4">
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                CE
              </div>

              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                Del
              </div>

              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                /
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                X
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                7
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                8
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                9
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                +
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                4
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                5
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                6
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                -
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                1
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                2
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                3
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white col-span-2">
                0
              </div>
              <div className="bg-red-300 w-full h-12 grid place-content-center border-2 rounded-xl border-white">
                .
              </div>

              <div className="bg-red-600 w-full grid place-content-center border-2 rounded-xl border-white col-start-4 col-end-5 row-start-4 row-end-6">
                =
              </div>
            </section>
          </section>
        </article>
      </div>
      <Bg />
    </article>
  );
}

export default App;
