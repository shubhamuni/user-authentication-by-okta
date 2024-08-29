import React from 'react'; 

function Card(props) {
  // Destructuring props to extract relevant data
  const { name, email, shippingInformation, thumbnail, price, } = props;
  return (
    <div className="col-md-3 shadow-lg mb-4 p-3 m-5 rounded">
      <img src={thumbnail} class="card-img-top" alt={name} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{email}</p>
        <p class="card-text">{email}</p>
        <p class="card-text">{shippingInformation}</p>
        <p class="card-text">$ {price}</p>
      </div>
    </div>
  );
}

export default Card; // Exporting the Card component as default