import React from 'react'


const SearchResults = (props) => {
    
    return (
        <>
        <div>
            <h2>Search Results List</h2>
            <div style={{color: 'white'}}>
                {props.filteredList.map(item => {
                    return <p>{item.task}</p>
                })}
                {/* <l1>{props.filteredList}</l1> */}
            </div>
        </div>
        </>
    )
    
}

export default SearchResults;