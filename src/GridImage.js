import React from 'react';

//specifications for image in grid
const GridImage =(props)=>{
 
    return (
      
      <div className="image">
        <div>
        <img className="grid"
          src={props.src}
          width={props.width}
          height={props.height}
          onClick={() => props.imageChange(props.id)}
        />
        </div>
      </div>
    );

  
}



export default GridImage
