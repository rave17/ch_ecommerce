import React, { useState } from 'react';
import { Button } from 'react-bootstrap';



const Counter = ({initial, min, max}) => {
  
    const [count, setCount] = useState(initial)
    
    function add(){
      if(count < max){
        setCount(count+1)
      }
    }
    function sup(){
      if(count > min){
        setCount(count-1)
      }
    }
  
    return (
  
      <>
    <span className="border-success d-flex justify-content-around">
      <Button disabled={count === min } onClick={sup} >-</Button>
     <p > {count} </p>
      <Button disabled={count === max } onClick={add}>+</Button>
    </span>
  
      <h5 className="display-5">
        {
          count === max 
          ? <p className="text-alert">"Agotado"</p> 
          : "Quedan "+ (max-count )+ " productos"
        }
      </h5>
      </>
    );
  }

function ProductDescription(){
    return<>
    <Counter  initial={1} min={0} max={8}/>
    </>
}

export default ProductDescription;