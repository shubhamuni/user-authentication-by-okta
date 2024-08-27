import React from "react";


function Search({ searchChange }) {
    return(
        <div className="mx-auto">
            <input onChange={searchChange} className="rounded-xl p-4 border-6 border-black bg-light-green w-1/3 mx-auto" type="search" placeholder="Search Products"/>
        </div>
    )
}
;
export default Search;