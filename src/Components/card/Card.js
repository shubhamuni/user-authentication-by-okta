import React from 'react'; 

function Card(props) {
  // Destructuring props to extract relevant data
  const { name, category, shippingInformation, thumbnail, price, } = props;
  return (
    <div className="col-md-3 shadow-lg mb-4 p-3 m-5 border border-secondary rounded">
      <img src={thumbnail} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text">{shippingInformation}</p>
        <p className="card-text">₹ {Number(84*price).toFixed(0)}</p>
      </div>
    </div>
  );
}

export default Card; // Exporting the Card component as default