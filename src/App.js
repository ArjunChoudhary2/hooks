import React from "react";
import UseEffect from "./components/UseEffect";


const App = () => {

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="heading flex justify-center h-12">
        <div className="text-2xl m-10 bg-amber-100 rounded h-10 w-40">
          <h1 className="text-center">React Hooks</h1>
        </div>
      </div>
      
      <UseEffect/>
    </div>
  );
};

export default App;
