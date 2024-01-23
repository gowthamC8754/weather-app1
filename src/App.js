 import React, { useState } from 'react'
import axios from 'axios'


const key='ca7bdd5bdb256cbffef6f28d9d37f879';
 const App = () => {
  const[city,setCity]=useState("")
  const[data,setData]=useState()
  const [isLoading,setLoading]=useState(true);

  const fetchdata = async()=>{
    // try{
       await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
       .then((res)=>{
        if(res.data){
          setLoading(false);
          setData(res.data)
        }
       }).catch((err)=>{
        alert("please enter the corect city name")
       })
      // if(response.data){
      //   setLoading(false);
      //   setData(response.data);
      // }
    }
    // catch(err){
    //   alert("error")
    // }
    
  
  console.log('data', data)
   return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-8">WEATHER APP</h1>
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border p-2 rounded-l"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the city"
        />
        <button
          onClick={fetchdata}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        >
          Fetch
        </button>
      </div>
      {/* Additional Weather Display Components Here */}
    </div>

      {/* <div>
      {isLoading ? <span>.....Loading</span>:(
        <>
        <span>{data?.name},{data.sys.country},{data.main.temp}</span>
        <div>Lat-{data.coord.lat}</div>
        <div>Lon-{data.coord.lon}</div>
        </>
      

      )
      }
      </div> */}
      {/* {!isloading && data && (
        <span>{data?.name}</span>
      )} */}
       {/* (data &&(
        {data.name
        }
        
      ))  */}
      <div className="min-h-screen flex items-center justify-center">
  <div className="flex flex-col bg-blue-500 rounded p-4 w-full max-w-xs">
    {isLoading ? (
      <span>Loading.....</span>
    ) : (
      <>
        <div className="font-bold text-xl">
          {data?.name}, {data?.sys.country},
        </div>

        <div className="text-sm text-white">Thursday 10 May 2020</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg
            className="w-32 h-32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            ></path>
          </svg>
        </div>

        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{data?.main.temp}</div>
          <div className="flex flex-col items-center ml-6">
            <div>Cloudy</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-white"></span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-white">20°C</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-white">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-white">68%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-white">10km</div>
          </div>
        </div>
      </>
    )}
  </div>
</div>
</div>

   ) 
   }
   
 
 
 export default App
 
