import React from 'react'


const Countries = ({filterChampions, countries}) => {
    return (
        <div className="btn-container">
            {countries.map((country, index)=> {
                return (
                    <button
                    className="filter-btn"
                    type='button'
                    key= {index}
                    onClick={()=> filterChampions(country)}>{country}</button>
                )
            })}
        </div>
    )
}


export default Countries


