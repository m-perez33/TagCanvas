import React from 'react';
//import ImageSingle from './ImageSingle.js';
//import { singleImage } from './App.js';
//maps through for all meta contnent
const SearchBar=(props)=>{
	return(

		 
          <div>
          <input className="searchinput"
            type="text"            //height="200px"
            placeholder="Separate by comma for multiple search criteria"
            value={props.search}
            onChange={props.inputChange}
            onKeyPress={props.handleKeyPress}
          />
        </div>



		)


}

export default SearchBar
