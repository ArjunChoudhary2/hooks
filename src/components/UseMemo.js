import React, { useRef, useState, useMemo } from "react";
import Snippet3 from "../images/Snippet3.png";
import UseContext from "./UseContext";

const UseRef = ({string}) => {


  return (
    <div>
      <div className="text-2xl mx-20 mt-20 bg-purple-100 rounded h-10 w-auto">
        <h1 className="text-center">useMemo(calculateValue, dependencies)</h1>
      </div>
      <div className=" w-auto mx-28 my-4">
        <div>
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders.
        </div>
        <div className="m-5 flex text-center">
          <div className="bg-blue-200 rounded w-full mr-2">
            <div className="flex justify-center rounded my-7">
              <img src={Snippet3} alt="snippet" />
            </div>
            <div className=" text-left mx-5">
              Using useMemo allows :
              <ul className="list-disc mx-9">
                <li>Skipping expensive recalculations</li>
                <li>Skipping re-rendering of components</li>
                <li>Memoizing a dependency of another Hook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <UseContext string={string}/>
    </div>
  );
};

export default UseRef;
