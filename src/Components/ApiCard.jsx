import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Detail from './Detail';


export default function ApiCard({data,id, title, body, url ,price}) {

  const [veri,settdetay]=useState([])
  const Detayagit=()=>{
    const veri=data.filter((veriler)=>veriler.id===id.id)
    settdetay(veri);
    console.log(veri)
    

    
    return veri;
    
  }
  

 
  return (
    <>
      <Card style={{ width: '18rem', marginRight:"10px", marginBottom:"1rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {body}
          </Card.Text>
          
        </Card.Body>
       <p>Price : <a href="">{price}</a></p>
        <button onClick={Detayagit}>detaya git</button>
        
       

    
       
        

      </Card>




    
     
    </>
  )
}
