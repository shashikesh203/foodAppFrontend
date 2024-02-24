import React from "react";
// import g from "../Images/chicken corma.jpg"
// "./Images/momos.jpg"
const Card = ({item}) => {
  console.log(item);
    const {id, title,Image} = item;
  return (
    <div className="cards">
        <div className="image_box">{id}
            <img src={Image} alt="abs" />
        </div>
        <div className="details">
            <p>{title}</p>
          
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card