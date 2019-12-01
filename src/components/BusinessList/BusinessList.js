import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component {
  constructor(props){
  super(props);
  console.log(this.props);
  if(!this.props.businesses)
  {
    console.log("list is empty")
  }
  };  
  render() {
    return (
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
      <div className="BusinessList">        
        {this.props.businesses.map((business => {
          return <Business business={business} key={business.id} />;
        }))}
      </div>
      </div>
 )
  }
}
export default BusinessList