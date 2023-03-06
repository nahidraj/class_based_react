import React from "react";

class ImageCards extends React.Component {
  render() {
    const {card:{img,title,des}} = this.props
    return <>
    <img src={img} alt="" />
    <h3>{title}</h3>
    <p>{des}</p>
    </>;
  }
}

export default ImageCards;
