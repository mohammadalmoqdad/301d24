import React from "react";
class HornedBeast extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2 style={{borderBottom:"2px solid gray",padding:10}}>{this.props.title}</h2>
        <img src={this.props.imageUrl} width={350} height={450} alt="Logo" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default HornedBeast;
