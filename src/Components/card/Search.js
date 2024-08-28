import React from "react";


function Search({ searchChange }) {
    return(
    <div className="mx-auto" style={{ maxWidth: '500px' }}>
        <input 
            onChange={searchChange} 
            className="form-control rounded border border-dark bg-light" 
            type="search" 
            placeholder="Search Products"
        />
    </div>
);

}
;
export default Search;