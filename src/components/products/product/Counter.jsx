import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';





const Counter = ({ initial, min, max, onAdd }) => {

  const [count, setCount] = useState(initial)

  function add() {
    if (count < max)
      setCount(count + 1)
  }

  function sup() {
    if (count > min)
      setCount(count - 1)
  }

  return (
    <>
      <span className="border-success d-flex justify-content-around">
        <Button disabled={count === min} onClick={sup} >-</Button>
        <p > {count} </p>
        <Button disabled={count === max} onClick={add}>+</Button>
      </span>
      <span>
        < Button className="btn m-2" onClick={onAdd}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
      </span>

      <h5 className="display-5">
        {
          count === max
            ? <p className="text-alert">"Sold out"</p>
            : (max - count) + " products left"
        }
      </h5>
    </>
  );
}



export default Counter;