import {
  ArrowPathRoundedSquareIcon,
  ChevronDoubleLeftIcon,
  EqualsIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export const Calculator = () => {
  const [textInput, setTextInput] = useState("");
  const [countBracket, setCountBracket] = useState(true);
  const [size, setSize] = useState("md");

  const handleBrackets = () => {
    let lastChar = textInput.charAt(textInput.length - 1);

    if(lastChar == "(") {
      setTextInput(textInput)
      return
    }
    
    if(countBracket === true) {
      setTextInput(textInput + "(")
      setCountBracket(false)
    } else { 
      setTextInput(textInput + ")")
      setCountBracket(true)
    }
    
  }

  const handleInput = (v) => {
    let lastChar = textInput.charAt(textInput.length - 1);

    if(["+", "-", "*", "/"].includes(v) && ["+", "-", "*", "/"].includes(lastChar)) {
      setTextInput(textInput.substring(0, textInput.length - 1) + v)
      return
    } 

    if(textInput == "0") {
      setTextInput(v)
      return
    }
    setTextInput(textInput + v)
  };

  const handleSubmit = () => {
    setCountBracket(true)
    setTextInput(eval(textInput))
  }

  const handleSize = () => {
    if(size == "sm") {
      setSize("md")
    } else if(size == "md") {
      setSize("lg")
    } else {
      setSize("sm")
    }
  }

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/blackboard-inscribed-with-scientific-formulas-calculations_1150-19413.jpg?ga=GA1.1.336393694.1724476993&semt=ais_hybrid)`,
      }}
    >
      <div className="absolute top-0 opacity-55 min-h-screen min-w-full bg-black z-[1]"></div>

      <div className={`bg-white p-4 rounded-lg z-10 w-full max-w-${size}`}>
        <div>
          <input
            type="text"
            value={textInput}
            accept="/^[0-9]+$/"
            onChange={(e) => setTextInput(e.target.value)}
            // inputMode="numeric"
            className="w-full text-right text-2xl text-neutral-800 font-medium bg-[#f1f1f1] outline-none p-3 rounded-md shadow-md border-1.5 border-gray-200"
          />
        </div>

        <div>
          {/* 
            AC ( ) H
            1 2 3 =
            4 5 6 +
            7 8 9 -
            . 0 \ *
          */}

          <div className="grid grid-cols-4 text-center gap-4 mt-6 mb-2">
            <button
              onClick={() => setTextInput("")}
              className="w-20 h-8 rounded-md font-semibold text-md bg-yellow-300 text-yellow-800"
            >
              AC
            </button>
            <button
              onClick={() => handleBrackets()}
              className="w-20 h-8 rounded-md font-semibold text-md bg-orange-300 text-orange-600"
            >
              ()
            </button>
            <button
              onClick={() => setTextInput(textInput.length > 0 ? textInput.substring(0, textInput.length - 1) : "")}
              className="w-20 h-8 rounded-md font-semibold flex justify-center items-center text-md bg-red-300 text-red-600"
              >
              <ChevronDoubleLeftIcon className="w-8" />
            </button>
            
            <button
              onClick={() => handleSize()}
              className="w-20 h-8 rounded-md font-semibold flex justify-center items-center text-md bg-green-300 text-green-600"
              >
              <ArrowPathRoundedSquareIcon className="w-8" />
            </button>
            

            <button
              onClick={() => handleInput("1")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              1
            </button>
            <button
              onClick={() => handleInput("2")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              2
            </button>
            <button
              onClick={() => handleInput("3")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              3
            </button>
            <button
              onClick={() => handleSubmit()}
              className="w-20 h-8 rounded flex justify-center items-center-md font-semibold text-md bg-purple-300 text-purple-800"
            >
              <EqualsIcon className="w-8" />
            </button>

            <button
              onClick={() => handleInput("4")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              4
            </button>
            <button
              onClick={() => handleInput("5")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              5
            </button>
            <button
              onClick={() => handleInput("6")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              6
            </button>
            <button
              onClick={() => handleInput("+")}
              className="w-20 h-8 rounded flex justify-center items-center-md font-semibold text-md bg-purple-300 text-purple-800"
            >
              <PlusIcon className="w-8" />
            </button>

            <button
              onClick={() => handleInput("7")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              7
            </button>
            <button
              onClick={() => handleInput("8")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              8
            </button>
            <button
              onClick={() => handleInput("9")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              9
            </button>
            <button
              onClick={() => handleInput("-")}
              className="w-20 h-8 rounded flex justify-center items-center-md font-semibold text-md bg-purple-300 text-purple-800"
            >
              <MinusIcon className="w-8" />
            </button>

            <button
              onClick={() => handleInput(".")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-purple-300 text-purple-800 shadow-xl"
            >
              .
            </button>
            <button
              onClick={() => handleInput("0")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-blue-600 text-white shadow-xl"
            >
              0
            </button>
            <button
              onClick={() => handleInput("/")}
              className="w-20 h-8 rounded-md font-semibold text-xl bg-purple-300 text-purple-800 shadow-xl"
            >
              /
            </button>
            <button
              onClick={() => handleInput("*")}
              className="w-20 h-8 rounded flex justify-center items-center-md font-semibold text-md bg-purple-300 text-purple-800"
            >
              <XMarkIcon className="w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
