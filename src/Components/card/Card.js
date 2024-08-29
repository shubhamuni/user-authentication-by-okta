import React from 'react'; 

function Card(props) {
  // Destructuring props to extract relevant data
  const { name, category, shippingInformation, thumbnail } = props;

  return (
    <div className="col-md-3 shadow-lg mb-4 p-3 m-auto">
      <img src={thumbnail} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{category}</p>
        <p class="card-text">{shippingInformation}</p>
      </div>
    </div>
  );
}

export default Card; // Exporting the Card component as default