import React, { useEffect,useState } from 'react'
import Snippet2 from '../images/snippet2.png'

const WithDependecy = () => {
    const [count,setCount] = useState(0);
    const [data, setData] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleClick = () => {
            setCount(count+ 1);
        console.log(count)
            // Disable the button and set pointer to not allowed
            setIsButtonDisabled(true);
    }

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
    }, [count]); //empty dependecy array

   
  return (
    <div className="m-5 flex text-center">
    <div className="bg-blue-200 rounded w-3/5 mr-2">
      <h2>Value in dependency array</h2>
      <div className="flex justify-center rounded">
        <img src={Snippet2} alt="snippet" />
      </div>
    </div>
    <div className="bg-green-200 rounded w-2/5 ml-2">
      <div className="flex flex-col justify-center items-center h-full">
        <h3>Will run on first render and everytime the count variable changes</h3>
        <div className="bg-purple-100 rounded m-auto w-full">
          <div className="flex items-center justify-center h-full">
            Data from API : <br></br>
            <span className=' bg-lime-500 rounded p-2'>{data[count]?.ability?.name}</span>
          </div>
        </div>
        <button style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }} onClick={handleClick} disabled={isButtonDisabled} className='my-4 bg-slate-500 rounded p-3'>Change Count</button>
      </div>
    </div>
  </div>
  )
}

export default WithDependecy