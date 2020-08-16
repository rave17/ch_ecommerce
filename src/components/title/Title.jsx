import React from 'react';
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title({text}){
    
    return(
        <div className="row mx-0  my-3">
            <h3 className="display-4 mx-auto">{text}</h3>
        </div>
    )
}