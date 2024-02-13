import React, { useState, useEffect } from "react";
import CodeSnippet from "../images/snippet1.png";

const EffectAlways = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // data fetching from api
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const result = await response.json();
        console.log("API call");
        // Update state with fetched data
        setData(result?.abilities);
      } catch (error) {}
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); //empty dependecy array

  return (
    <div className="m-5 flex text-center">
      <div className="bg-blue-200 rounded w-3/5 mr-2">
        <h2>Empty dependency array</h2>
        <div className="flex justify-center rounded">
          <img src={CodeSnippet} alt="snippet" />
        </div>
      </div>
      <div className="bg-green-200 rounded w-2/5 ml-2">
        <div className="flex flex-col justify-center items-center h-full">
          <h3>Will run on every render</h3>
          <div className="bg-purple-100 rounded m-auto w-full">
            <div className="flex items-center justify-center h-full">
              Data from API : <br></br>
              {data[0]?.ability?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectAlways;
