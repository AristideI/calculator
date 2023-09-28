import { useState } from "react";
import "./App.css";

function App() {
  let [once, setOnce] = useState(0);
  let [answer, setAnswer] = useState("Answer");
  let [sign, setSign] = useState("");
  let [prev, setPrev] = useState("0");
  let [current, setCurrent] = useState("0");

  function handleNumber(e) {
    if (current.length < 11) {
      if (current === "0") setCurrent(e.target.value);
      else {
        setCurrent((current += e.target.value));
      }
    }
  }
  function handleZero(e) {
    if (current !== "0") setCurrent((current += e.target.value));
  }
  function handleDot(e) {
    if (current === "0" || current === "") {
      setCurrent("0.");
    }
    if (!current.includes(".")) setCurrent((current += e.target.value));
  }
  function handleSign(e) {
    if (prev === "0" || Number(prev) === 0) setPrev(current);
    let pro = current;
    setCurrent("0");
    setSign(e.target.value);
    if (once > 0) {
      if ((pro !== "0" || pro !== 0) && pro !== prev) {
        let answer = eval(`${prev}${sign}${pro}`);
        if (
          answer === -Infinity ||
          typeof answer === "undefined" ||
          typeof answer === "object" ||
          isNaN(answer) ||
          answer === Infinity
        ) {
          console.log(answer);
          setAnswer("Error");
          setPrev("0");
        } else {
          setAnswer(answer);
          setPrev(answer);
        }
      }
    }
    setOnce(once + 1);
  }
  function handleMod(e) {
    if (prev === "0" || Number(prev) === 0) setPrev(current);
    let pro = current;
    setCurrent("0");
    setSign(e.target.value);
    if (once > 0) {
      if ((pro !== "0" || pro !== 0) && pro !== prev) {
        let answer = (prev * pro) / 100;
        if (
          answer === -Infinity ||
          answer === undefined ||
          answer === null ||
          answer === NaN ||
          answer === Infinity
        ) {
          setAnswer("Error");
          setPrev("0");
        } else {
          setAnswer(answer);
          setPrev(answer);
        }
      }
    }
    setOnce(once + 1);
  }

  function handleEqual() {
    let answer = eval(`${prev}${sign}${current}`);
    if (!answer || answer === Infinity) {
      setAnswer("Error");
      setPrev("0");
    } else {
      setAnswer(answer);
      setPrev(answer);
    }
    setCurrent("0");
  }

  function handleClear() {
    setAnswer("Answer");
    setCurrent("0");
    setPrev("0");
    setSign("");
  }

  return (
    <article className="w-full h-screen bg-gray-900 flex justify-center items-center text-white">
      <section className="border-2 border-green-500 p-4 w-1/2">
        <div className="border-2 border-blue-500 px-12 py-2">
          <p className="text-right font-bold text-2xl h-12">
            {prev} {"  "} {sign}
          </p>
          <p className="text-right font-bold text-4xl h-16">{current}</p>
          <p className="border-2 border-violet-400 h-20 font-bold text-5xl grid place-content-center">
            {answer}
          </p>
        </div>
        <section className="flex justify-between flex-wrap mt-4 gaps-[1px]">
          <button
            name="clear"
            onClick={handleClear}
            className="border-2 border-purple-700 w-1/2 h-20 grid place-content-center font-bold text-3xl"
          >
            Clear
          </button>
          <button
            name="mod"
            onClick={handleMod}
            value="%"
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            %
          </button>
          <button
            name="div"
            value="/"
            onClick={handleSign}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            /
          </button>
          <button
            name="7"
            value={7}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            7
          </button>
          <button
            name="8"
            value={8}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            8
          </button>
          <button
            name="9"
            value={9}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            9
          </button>
          <button
            name="mul"
            value="*"
            onClick={handleSign}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            x
          </button>
          <button
            name="4"
            value={4}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            4
          </button>
          <button
            name="5"
            value={5}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            5
          </button>
          <button
            name="6"
            value={6}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            6
          </button>
          <button
            name="sub"
            value="-"
            onClick={handleSign}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            -
          </button>
          <button
            name="1"
            value={1}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            1
          </button>
          <button
            name="2"
            value={2}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            2
          </button>
          <button
            name="3"
            value={3}
            onClick={handleNumber}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            3
          </button>
          <button
            name="plus"
            value="+"
            onClick={handleSign}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            +
          </button>
          <button
            name="0"
            value={0}
            onClick={handleZero}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            0
          </button>
          <button
            name="dot"
            value="."
            onClick={handleDot}
            className="border-2 border-purple-700 w-1/4 h-20 grid place-content-center font-bold text-3xl"
          >
            .
          </button>
          <button
            name="="
            onClick={handleEqual}
            className="border-2 border-purple-700 w-1/2 h-20 grid place-content-center font-bold text-3xl"
          >
            =
          </button>
        </section>
      </section>
    </article>
  );
}

export default App;
