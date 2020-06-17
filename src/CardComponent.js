import React from 'react';
import CardInfo from './CardInfo.js';
import { singleImage } from './App.js';

//component contains all children for card results in the right column.
//maps though one resut to get meta, must then map through originally data
//find match, then adjust original data.
const CardComponent=(props)=>{
	return(

		 
          <div className="">
          {singleImage.map(val => (
            
            <div>
              <CardInfo
                //id={val.id}
                height={props.height}
                width={props.width}
                resultsReturn={props.resultsReturn}
                resultsKeywords={props.resultsKeywords}
                last={props.last}

              />
            </div>
          ))}
        </div>



		)


}

export default CardComponent