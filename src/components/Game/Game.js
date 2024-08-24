import React from "react";
import './Game.css'
import { WBBTH, DIRECTION ,BTNTX } from "../../config/data";

function Game({urlimg, name, info ,cost}){



    return (
    
        <div  className="gc"style={{display:'flex',flexDirection:DIRECTION}}>
            <img src={urlimg} className="kom"alt=''/>
            <h1 className="npm"style={{color:WBBTH.he}}>{name} </h1>
            <p className="bmm">{info}</p>
            {
                cost ?
            <p className="cmm">₹ {cost}</p>
            : "not available"
            }
            <button className="opme"style={{backgroundColor:WBBTH.bt,color:WBBTH.btntx}}>{BTNTX}</button>
            </div>
    )
}

export default Game