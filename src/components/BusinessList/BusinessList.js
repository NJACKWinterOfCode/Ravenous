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
      <div className="BusinessList">
        
        {this.props.businesses.map((business => {
          return <Business business={business} key={business.id} />;
        }))}
      </div>
    )
  }
}

export default BusinessList