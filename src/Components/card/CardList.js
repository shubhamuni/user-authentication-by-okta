import React, { useState } from "react"; // Importing React and useState hook
import Card from "./Card"; // Importing the Card component

const CardList = ({ product }) => {
    const [loading, setLoading] = useState(true); // Initializing loading state to true using useState hook
    // Simulate loading for 1 second, then set loading to false
    setTimeout(() => {
        setLoading(false);
    }, 1000);

  
    // Render the list of cards if loading is false, otherwise show a loading message
    return(
        !loading ? (
            <div className="container mt-5">
                <div className="row pl-5">
                    {product.map((user, i) => {
                        // Map through the product array to create Card components
                        return (
                            <Card
                                thumbnail={product[i].thumbnail} 
                                key={i} 
                                name={product[i].title} 
                                id={product[i].id} 
                                category={product[i].category} 
                                shippingInformation={product[i].shippingInformation}
                                price={product[i].price}
                                description={product[i].description}
                            />
                        )
                    })}
                </div>
            </div>
        ) : (
            <p>Please wait...</p> // Show loading message while data is being fetched
        )   
    );
}

export default CardList; // Exporting CardList component as default