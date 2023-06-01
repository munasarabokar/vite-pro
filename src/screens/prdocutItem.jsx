import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



function ProductId() {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1> Item :  {id} </h1>
    </div>
  )
}

export default ProductId