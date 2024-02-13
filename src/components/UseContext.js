import React, { useContext } from "react";
import PropContext from "../context/context";
import Snippet4 from "../images/Snippet4.png";
import Snippet5 from "../images/Snippet5.png";

const UseContext = ({ string }) => {
  const stringForContext = useContext(PropContext);
  return (
    <div>
      <div className="text-2xl mx-20 mt-20 bg-purple-100 rounded h-10 w-auto">
        <h1 className="text-center">useContext(SomeContext)</h1>
      </div>
      <div className=" w-auto mx-28 my-4">
        <div>
          useContext is a React Hook that lets you read and subscribe to context
          from your component.
        </div>
        <div className="m-5 flex text-center">
          <div className="bg-blue-200 rounded w-full mr-2">
            <div className="flex justify-center rounded my-7">
              <div className="rounded w-1/2">
                <span className="bg-red-300 w-fit rounded px-5">
                  Value using prop drilling : {string}
                </span>
              </div>
              <div className="rounded  w-1/2 ">
                <span className="bg-green-500 w-fit rounded px-5">
                  Value using useContext : {stringForContext}
                </span>
              </div>
            </div>
            <div className="images flex">
              <div className="w-1/2 flex">
                <div className="my-auto mx-5">Create a context :</div> <img src={Snippet4} />
              </div>
              <div className="w-1/2 flex">
              <div className="my-auto mx-5">Providing a context :</div> <img src={Snippet5} className="w-fit h-fit my-auto" />
                
              </div>
            </div>
            <div className=" text-left mx-5">
              Usecase :
              <ul className="list-disc mx-9">
                <li>Passing data deeply into the tree</li>
                <li>Updating data passed via context</li>
                <li>To avoid prop drilling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
