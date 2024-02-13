import React, { useState } from "react";

import EffectAlways from "../components/EffectOnce.js";
import WithDependecy from "../components/WithDependecy.js";
import UseRef from "./UseRef.js";
import PropContext from "../context/context.js";


const UseEffect = () => {
  const string = "value from parent";

  return (
    <div>
      <div className="text-2xl mx-20 mt-20 bg-purple-100 rounded h-10 w-auto">
        <h1 className="text-center">useEffect(callback, dependencies)</h1>
      </div>
      <div className=" w-auto mx-28 my-4">
        <ul>
          <li>
            useEffect takes two arguments: a function containing the code with
            <strong> side effects</strong> and an optional{" "}
            <strong>dependency array</strong>.
          </li>
          <hr />
          <li>
            useEffect(callback, dependencies) lets you control when the side
            effect runs based on changes in the specified dependencies. If
            dependencies are omitted, the effect runs after each render.
          </li>
        </ul>
        <EffectAlways />
        <WithDependecy />
      </div>
      <PropContext.Provider value={string}>
        <UseRef string={string} />
      </PropContext.Provider>
    </div>
  );
};

export default UseEffect;
