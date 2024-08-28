import React from 'react'; 

function Card(props) {
  // Destructuring props to extract relevant data
  const { name, category, shippingInformation, thumbnail } = props;

  return (
    <div className="col-md-4 mb-4">
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