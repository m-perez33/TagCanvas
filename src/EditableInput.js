import React from 'react' 
import ContentEditable from 'react-contenteditable'
import ControlledInput from './controlledinput.js'
import { singleImage} from './App.js'



 class EditableInput extends React.Component {
 	constructor(props) {
    super(props)
  this.state = {
    html: this.props.html
  }

}


  handleEmailChange = event => {
    this.setState({ html: event.target.value.toLowerCase() });
    

    let input=event.target.value.toLowerCase()


 let entryChange=input.split(" ");

    //console.log(entryChange
    
    this.setState({ 
        //search: event.target.value.toLowerCase(),
        //searchArr: searchArray
        entryChange: entryChange,
       // html: input

      });

  }
entryAssign=(id, entrycategory)=>{

     ImageData.map(val=>{     // console.log(val)
         let keys=Object.keys(val)
            
            keys.map(key=>{

             if (id===val.id&&key===entrycategory) {
                val.year=this.state.entryChange
                       // console.log(val)

             }

            })
        

            })

      }

  resetForm = () => {
    this.setState({
      html: this.props.html
    });
  }




  render (){
    return (
    	<div onBlur={this.resetForm}>
    	
        <ControlledInput
          html={this.state.html}
          handleChange={this.handleEmailChange}
          id={this.props.id}
          disabled={false}
                       

         />

              
            </div>
  )};
};

export default EditableInput