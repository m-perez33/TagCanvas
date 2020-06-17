import React from 'react';
//import CardCategories from './CardCategories.js';
import ContentEditable from 'react-contenteditable'
import { ImageData } from './ImageData.js'
import { singleImage} from './App.js'
import { test } from './App.js'
import EditableInput from './EditableInput.js'
import ControlledInput from './controlledinput.js'
import UncontrolledInput from './uncontrolledinput.js'


//specification of single images

class CardInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state={
       message: 'Back to search results for '+ this.props.last,
      //html: singleImage[0].year.toString(),
    }
  }


  render() {



    return (

      <div className="singlecontainer">  
          {singleImage.map(val => (
            <div>
              <div className='imageContainer'>
               <img className="contain"
                src={val.src[0]}
                width={this.props.width}
                height={this.props.height}
               />
              <ul className="list-group">
                 <li className="list-group-item"><span className="title">PAINTING INFORMATION</span> (separate entry values wtih commas)</li>

                 <li className="list-group-item" ><span className="title">TITLE:</span>
                   <UncontrolledInput
                          key={val.id[0]}
                          id={val.id}
                          categorytitle="title"
                          category={val.title}
                          searchMethod={this.props.searchMethod}
                    />
                 </li>

                  <li className="list-group-item"><span className="title">YEAR:</span>
                     <UncontrolledInput
                          key={val.id[0]}
                          id={val.id}
                          categorytitle="year"
                          category={val.year}
                          searchMethod={this.props.searchMethod}
                     />   
                  </li>   

                  <li className="list-group-item"><span className="title">MEDIUM:</span>
                   <UncontrolledInput
                          key={val.id[0]}
                          id={val.id}
                          categorytitle="medium"
                          category={val.medium}
                          searchMethod={this.props.searchMethod}                
                     />
                  </li>
                  <li className="list-group-item"><span className="title">SIZE:</span>
                      <UncontrolledInput
                          key={val.id[0]}
                          id={val.id}
                          categorytitle="size"
                          category={val.size}
                          searchMethod={this.props.searchMethod}
                    />
                  </li>

                  <li className="list-group-item"><span className="title">KEYWORDS:</span>
                  <UncontrolledInput
                          key={val.id[0]}
                          id={val.id}
                          categorytitle="keywords"
                          category={val.keywords}
                          searchMethod={this.props.searchMethod}
                    />
                  </li>
               
                <li className="list-group-item">
                <a className="testlink" onClick={() => this.props.searchMethod(this.props.last)}>{this.state.message}</a>
                </li>
            </ul>
                          </div>

          </div>
        ))}
      </div>
    );
  }
}



export default CardInfo
