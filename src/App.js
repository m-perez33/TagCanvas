import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './NavBar.js';
import SearchBar from './SearchBar.js';
import { ImageData } from './ImageData.js';
import CardInfo from './CardInfo.js';
import GridImage from './GridImage.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

const results = [];
const copy = [];

export const singleImage = [];


        
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      status: "ART IMAGE SEARCH",
      column: "1fr 1fr",
    };

  }

  reload=()=>{
    //resets to home setting.
    results.length=0;
    singleImage.length=0

    this.setState({status: "ART IMAGE SEARCH"})

  }


  inputChange=(event)=> {
    //turns search bar input into array, allows for multiple input searches

    let input=event.target.value
    const str =input.replace(/\s*,\s*/g, ",")
    let searchArray=str.split(',');
   

    this.setState({ 
        search: event.target.value,
        searchArr: searchArray
      });

  }

  imageChange=(value)=> {
    //adds value to single image array
        singleImage.length=0;
        singleImage.push(value);

    this.setState({column:"1fr 1fr"});

  }


  searchMethod=(val)=>{
    //clears results and single image arrays and searches new value
     singleImage.length = 0;
     results.length = 0;

      this.setState({
        last: val,
        status: "",
        search:"",
        font:20,
        column:"1fr"
      });
 
    let counter=0;
    let datamap = ImageData.filter((d, arr, i) => {
        counter=0
         let valueArr=Object.values(d);
            val.map(b=>{
              let valueMap=valueArr.map(values=>{
                    let stringmatch=values.map(val2=>{

                 if(val2.toLowerCase()===b.toLowerCase()){
                    counter=counter+1
                    return counter
                }else{
                   counter=counter;
                    return counter
                }


                });
              return stringmatch

               })
                return valueMap;  
             });
     
        if(counter===val.length){
              results.push(d)
              return d;
             }

        });
    let resultStatus = val.map(value=>{ 
        return value.toUpperCase()
      });
    if(results.length===1){
          this.setState({
          status: `There is ${results.length} result for ${resultStatus}`
        });
        }else{
        this.setState({
          status: `There are ${results.length} results for ${resultStatus}`
        });
      }

      if (results.length < 1) {
        this.setState({
          status: `Sorry there are no results for ${resultStatus}`
        });
      }
    
  window.scrollTo(500, 0);

  }
  

  handleKeyPress=(event)=> {
    //when enter is pressed. current value is saved in "last" and searchMethod is implemented
    if (event.key === "Enter") {
      singleImage.length = 0;
      this.setState({
        last: event.target.value,
        status: "",
      });

      results.length=0;

      this.searchMethod(this.state.searchArr)

    }
  }

  render() {

    return (
      
      <div>
        <NavBar
         searchMethod={this.searchMethod}
         reload={this.reload}
        />
        <div className="main">
          <div className="searchbar">
          
           <h1 style={{fontSize: this.state.font}}> {this.state.status} </h1>
          
            <SearchBar
              search={this.state.search}
              inputChange={this.inputChange}
              handleKeyPress={this.handleKeyPress}
            />

          </div>
          <div className="gridresults" style={{gridTemplateColumns: this.state.column}}>
            <div className="resultsgrid" style={{paddingBottom: this.state.padding}}>
                {results.map(val => (
                  //takes all image components and assembles as grid
            
                  <div>
                    <GridImage
                      title={val.title}
                      key={val}
                      id={val}
                      src={val.src}
                      height={this.state.height}
                      width={this.state.width}
                      imageChange={this.imageChange}
                      column={this.state.column}
                      last={this.state.last}

                    />
                  </div>
                
              ))} 
              </div>
            <div className="gridresults1">
              {singleImage.map(val => (
                //only shows when map array is filled. picture info and larger image on right side
                  <div className="stickydiv">
                    <CardInfo
                    height={this.state.height}
                    width={this.state.width}
                    resultsReturn={this.resultsReturn}
                    last={this.state.last}
                    searchMethod={this.searchMethod}
                    last={this.state.last}

                    />
                  </div>
                ))}
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentComponent
