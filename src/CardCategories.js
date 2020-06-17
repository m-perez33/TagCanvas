import React from 'react';


class CardCategories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
 
    button: "Edit"
  }

}
editInput=()=>{
  //console.log(this.state.readOnly)
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


render(){

// used for multiple keywords
	return(
		<span>
              {this.props.category.map(val => {
               // console.log(val)
             if (this.props.category.indexOf(val)===this.props.category.length-1){

                  return (
                    <a className="ahover" onClick={(e) => this.props.imageChange2([val])}>{val}</a>
                    )
                }else{
                  return (<a className="ahover" onClick={(e) => this.props.imageChange2([val])}> {val + ", "}</a>)
                }

                })


              } 
                         <button onClick={this.props.editInput}>{this.state.button}</button>


        </span>

	)
}}

export default CardCategories