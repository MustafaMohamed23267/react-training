import {useState} from "react"

function Carchangefunction()
{

    let [car,setCar]=useState({name:"ford", model:"Mustang", year:2020});

     let changeName =(e)=>{setCar(car=>  ({...car,name:e.target.value})    )};
     let changeModel =(e)=>{setCar(car=> ({...car,model:e.target.value})  )};
     let changeYear = (e)=>{setCar(car=> ({...car,year:e.target.value})   )};


    //let padding ="15px";
return(
<>
<h1>Update an object</h1>
<div style={{display:"flex",flexDirection:"column" ,color:"darkred",gap:"10px",width:"30%",padding:"5px"}}>
<label>Enter Car Name</label><input value={car.name} type="text" onChange={changeName} />
<label>Enter Car Model</label><input type="text" value={car.model} onChange={changeModel}/>
<label>Enter Car Yearnumber</label><input type="text" value={car.year} onChange={changeYear}/>
</div>
<p>your car is {car.name} {car.model} {car.year}</p>


</>
)
}

export default Carchangefunction