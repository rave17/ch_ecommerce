import React, { useParams, useState, useEffect } from 'react';
import getOneProduct from '../../utils/getOneProduct';

function ProductDescription({ idItem }){   
     
    const [item, setItem] = useState(null)
    useEffect(()=>{
        setItem(getOneProduct(idItem))
    }, [item])
    

    return <>
    <p>get item detail: {item}</p>
    </>
}

export default ProductDescription;