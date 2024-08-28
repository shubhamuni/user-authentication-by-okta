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
                <div className="row">
                    {robot.map((user, i) => {
                        // Map through the robot array to create Card components
                        return (
                            <Card
                                thumbnail={robot[i].thumbnail} // Passing thumbnail prop to Card component
                                key={i} // Setting key prop to index for unique identification
                                name={robot[i].title} // Passing name prop to Card component
                                id={robot[i].id} // Passing id prop to Card component
                                email={robot[i].category} // Passing email prop to Card component (incorrectly named, consider changing to category)
                                shippingInformation={robot[i].brand} // Passing shippingInformation prop to Card component
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