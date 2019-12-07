import React from 'react'
import "./Footnotes.css"


class Footnotes extends React.Component
{
    render(){
    return(
        <div>
        <div className="row">
            <div className= "col">
                <a href = "#"><img src={require('./facebook-icon.jpg')} alt="Facebook" ></img></a>
            </div>     
            <div className="col">
                <a href ="#"><img src={require('./about-us.jpg')} alt="About Us"></img></a>
            </div>
            <div className="col">
                <a href="#"><img src ={require('./twitter-icon.jpg')} alt="Twitter"></img></a>
            </div>
            <div className="col">
                <a href="#"><img src ={require('./gmail-icon.png')} alt="Twitter" height="80" width="80" ></img></a>
            </div>
            <div className="col">
                <a href="#"><img src ={require('./instagram-icon.jpeg')} alt="Twitter" height="80" width="80"></img></a>
            </div>  
      </div>
       
        </div>
    )
    }
}
export default Footnotes;