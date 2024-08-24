import React from "react";
import './Home.css'

import Game from "../../components/Game/Game";
import { PRODUCTS, MAIN_NAME,LINE ,WBBTH} from "../../config/data";



function Home(){
    return(
        <div style={{backgroundColor:WBBTH.bg}}>
            <h1 className="na" style={{color:WBBTH.hi,margin: 0}}>{MAIN_NAME} </h1>
            <p className="li" style={{color:WBBTH.pi}}>{LINE}</p>

            <div className="cog">
{PRODUCTS.map((gmsitem)=>{
    return <Game
    urlimg={gmsitem.urlimg}
      name={gmsitem.name}
      info={gmsitem.info}
      cost={gmsitem.cost}/>

})}

              
              </div>
        </div>
        
    )
}
export default Home