import React from 'react'; 

function Card(props) {
  // Destructuring props to extract relevant data
  const { name, category, shippingInformation, thumbnail } = props;

  return (
    <div className='bg-light-green inline-block rounded-lg p-3 m-3 transform transition duration-200 hover:scale-110 border-2 shadow-lg'>
      {/* Displaying the product image */}
      <img alt='product' src={thumbnail} />
      <div>
        {/* Displaying the product name */}
        <h2>{name}</h2>
        {/* Displaying the product category */}
        <p>{category}</p>
        {/* Displaying the product shipping information */}
        <p>{shippingInformation}</p>
      </div>
    </div>
  );
}

export default Card; // Exporting the Card component as default