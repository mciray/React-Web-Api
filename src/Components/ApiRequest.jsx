import React, { useEffect, useState } from 'react'
import ApiCard from './ApiCard'
import TaskNav from './TaskNav'


export default function ApiRequest() {

  const [ApiData, setApiData] = useState([])
 
  
  useEffect(() => {
    
    


    const fetchApi = async () => {
      const ApiRequest = await fetch('https://fakestoreapi.com/products')
      const data = await ApiRequest.json()
      setApiData(data);

    }

    fetchApi();


    
  }, [])

  const randomsayi=()=>{
    return Math.floor(Math.random()*1000)
  }


  

  return (
    <>
      <div className="container">
        <div className="nav-size">
          <TaskNav key={randomsayi} data={ApiData} setter={setApiData} />
          </div>
      </div>



      {ApiData.map((veri) => {
          return <ApiCard
          key={randomsayi}
          id={veri}
          data={ApiData}
          title={veri.title}
          body={veri.description}
          url={veri.image}
          price={veri.price}
        />
      })}

      
    </>
  )
}
