import React, { useState, useEffect } from 'react';
import getOneProduct from '../../utils/getOneProduct';
import { useParams } from 'react-router-dom';

function DescriptionContainer({ idI }) {
    const { id } = useParams()
    const [description, setDescription] = useState(null);

    console.log(`the item is params: `, id);
    
    useEffect(() => {
    getOneProduct(id).then(res =>{
        console.log("geting info item...");
        setDescription(res)
    });
    return ()=>{
        console.log(`dismounted...`)
    }
    }, [id]);

    return <>
    <p>este es el id de params: {id}</p>
    {description && <p>esta es la info {description.longDescription}</p>}
    </>
}

export default DescriptionContainer;