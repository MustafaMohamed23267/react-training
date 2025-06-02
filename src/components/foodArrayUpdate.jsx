import { useState } from "react"

function UpdateFood()
{
    let [food , setFood]=useState(["Apple","Orange","Mango"]);

    function enterFood()
    {
        const newfood = document.getElementById("foodInput").value;
        setFood(food=> [...food,newfood])
    }

    function removefood(index)
    {
        setFood(food.filter((_,i)=> i!==index))
    }

    return(
        <>
        <h1>Update Array </h1>
        <ul>
            {food.map((food,index) => <li key={index} onClick={()=>removefood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" /><button type="button" onClick={enterFood}>Enter Food</button>
        </>
    )
}

export default UpdateFood