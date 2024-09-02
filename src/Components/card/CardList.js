import React, { useState } from "react"; // Importing React and useState hook
import Card from "./Card"; // Importing the Card component

const CardList = ({ robot }) => {
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
                    {robot.map((user, i) => {
                        // Map through the robot array to create Card components
                        return (
                            <Card
                                thumbnail={robot[i].thumbnail} 
                                key={i} 
                                name={robot[i].title} 
                                id={robot[i].id} 
                                category={robot[i].category} 
                                shippingInformation={robot[i].shippingInformation}
                                price={robot[i].price}
                                description={robot[i].description}
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