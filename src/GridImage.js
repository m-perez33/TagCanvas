import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//specifications for image in grid
class GridImage extends React.Component {
    constructor(props) {
    super(props);
     this.state = {
        test: `${this.props.last}/${this.props.title}`
  }
      const test=this.props.title
}



 

 render(){
  console.log(this.props.width)
    return (
      
      <div className="image">
        <div>
            <Router>
             <Link to={{
              pathname: this.state.test
                  
            }}>
              <img className="grid"
                src={this.props.src}
                width={this.props.width}
                height={this.props.height}
                onClick={() => this.props.imageChange(this.props.id)}
              />
             
            </Link>       
          </Router>


          
      </div>
      </div>
    );
}

  
}



export default GridImage
