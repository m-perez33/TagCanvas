import React from 'react';


const NavBar = (props) =>{
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" onClick={props.reload}>HOME</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Subjects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["portrait"])}>Portraits</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["family"])}>Family</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["musician"])}>Musicians</a>
        </div>
      </li>
     
       <li className="nav-item dropdown">
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Medium
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["oil"])}>Oil</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["gouache"])}>Gouache</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["acrylic"])}>Acrylic</a>
  



        </div>
      </li>
      <li className="nav-item dropdown">
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Year
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["2020"])}>2020</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["2019"])}>2019</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["2018"])}>2018</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["2017"])}>2017</a>
          <a className="dropdown-item" onClick={(e) => props.searchMethod(["2016"])}>2016</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  </div>

)
}

export default NavBar
