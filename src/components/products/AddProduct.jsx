import React, { useState } from 'react';

export default function({info}){
    const [newProd, setNewProd] = useState({name: "", description: "", price: "", stock: ""});

    const handleChange = (attr)=> (event)=> setNewProd({...newProd.event.target});

        return<>
    <h1>{info}</h1>
    <input value={newProd.name} onChange={handleChange("name")}></input>
    <input value={newProd.description} onChange={handleChange("description")} ></input>
    <input value={newProd.price} onChange={handleChange("price")}></input>
        </>
    
}