import React, { useRef, useState } from "react";
import Snippet3 from "../images/Snippet6.png";
import UseMemo from "./UseMemo";

const UseRef = ({string}) => {
  let ref = useRef(0);
  console.log("rendered");
  let [bool, setBool] = useState(false);

  function handleClickRender() {
    setBool(!bool);
  }

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
    console.log("Ref value : " + ref.current);
  }
  return (
    <div>
      <div className="text-2xl mx-20 mt-20 bg-purple-100 rounded h-10 w-auto">
        <h1 className="text-center">useRef()</h1>
      </div>
      <div className=" w-auto mx-28 my-4">
        <div>
          useRef is a React Hook that lets you reference a value thats not
          needed for rendering.
        </div>
        <div className="m-5 flex text-center">
          <div className="bg-blue-200 rounded w-3/5 mr-2">
            <h2>Value in dependency array</h2>
            <div className="flex justify-center rounded my-7">
              <img src={Snippet3} alt="snippet" />
            </div>
            <div className=" text-left mx-5">
              By using a ref, you ensure that:
              <ul className="list-disc mx-9">
                <li>
                  You can store information between re-renders (unlike regular
                  variables, which reset on every render).
                </li>
                <li>
                  Changing it does not trigger a re-render (unlike state
                  variables, which trigger a re-render).
                </li>
                <li>
                  The information is local to each copy of your component
                  (unlike the variables outside, which are shared).
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-200 rounded w-2/5 ml-2">
            <div className="flex flex-col justify-center items-center h-full">
              <div className=" h-2/3 m-6">
                Clicking on this button will generate an alert with the number
                of times the alert is called using useRef value, changing this
                value will not cause any re-renders.{" "}
                <button
                  onClick={handleClick}
                  className="bg-green-400 rounded p-3 my-4"
                >
                  Click me!
                </button>
                <div>Ref value : {ref.current}</div>
              </div>
              <div className="  m-4 w-full">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <button
                      onClick={handleClickRender}
                      className="bg-red-400 rounded p-3"
                    >
                      Cause Re-render
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UseMemo string={string}/>
    </div>
  );
};

export default UseRef;
