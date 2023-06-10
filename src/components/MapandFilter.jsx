import React from 'react'

let arr = [2, 4, 6]

 let newArr = arr.map((value) => {
    console.log(value)
    return value + 2
})

function MapandFilter() {
    return (
        <div>
           <p>{newArr} </p> 
        </div>
    )
}

export default MapandFilter
