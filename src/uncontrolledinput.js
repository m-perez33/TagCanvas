import React from 'react' 
import { ImageData } from './ImageData.js'


class UncontrolledInput extends React.Component {
 	constructor(props) {
    super(props)
   this.state = {
    html: this.props.category,
    readOnly: true,
    button: "Edit",
    entryChange:this.props.category
  }

}

 handleChange = event => {
    //takes input into array
    let input=event.target.value
    this.setState({entryChange: input.split(',')});

  }


editInput=()=>{
  //toggles between input text and linked text
  if(this.state.readOnly){
    this.setState(
      {readOnly: false,
       button: "Save"
      })
  }else{
    this.setState(
      {readOnly: true,
       button: "Edit"
      })
  }
}


entryAssign=(id, entrycategory)=>{

     ImageData.map(val=>{   
         let keys=Object.keys(val)
            
            keys.map(key=>{

             if (id===val.id&&key===entrycategory) {
                val[entrycategory]=this.state.entryChange     
             }
            })          
          })

      }


  render (){
    return (
            <div>
             <div onBlur = {()=>this.entryAssign(this.props.id, this.props.categorytitle)} >
           
                {!this.state.readOnly&&
                    <input 
                      onChange={this.handleChange} 
                      value={this.state.entryChange}
                      readOnly={this.state.readOnly}/> }


               </div>
                {this.state.readOnly&& 
                    <span>
                      {this.state.entryChange.map(val => {                      
                        if (this.state.entryChange.indexOf(val)===this.state.entryChange.length-1
                            ||this.state.entryChange.length===1){
                          return (
                             <a className="link" 
                                onClick={(e) => this.props.searchMethod([val])}>
                                {val}
                                 </a>
                            )
                        }else{
                            return (
                              <a className="link" 
                                  onClick={(e) => this.props.searchMethod([val])}> 
                                  {val + ", "}
                                  </a>)
                              }
                       })
                      }  
                    </span>}
          
                        {'    '}

               <button onClick={this.editInput}>{this.state.button}</button>

    	</div>
        
  )};
};

export default UncontrolledInput