import React from 'react';
import GridImage from './GridImage.js'
//takes all image components and assembles as gird
const GridComponent =(props)=>{
	return(
		<div className="resultsgrid" style={{paddingBottom: props.padding}}>
          {props.results.map(val => (
            <div>
              <GridImage
                title={val.title}
                key={val}
                id={val}
                src={val.src}
                height={props.height}
                width={props.width}
                imageChange={props.imageChange}
                column={props.column}
              />
            </div>
          ))}            
        </div>

	)
}

export default GridComponent