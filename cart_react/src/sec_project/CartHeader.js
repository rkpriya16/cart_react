import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartHeader(props){
    return(
        <div className="carthead">
            <div className="nav-bar">
                <div className="head">
                    
                        <h1>vegitable Shop </h1>
                    </div>
                    <div className="cnt" onClick={()=>{ props.popupStatus(1) }} style={{ cursor: 'pointer' }} >
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', fontSize: '35px' }} />
                    <span>{ props.headerCount }</span>
                    </div>
                </div>                
        </div>
    )
}