import EventButton from "./eventButton";

function Cars()
{
let cars =[
         {name:"BMW" ,year:2015},
         {name:"Kia" ,year:2020},
         {name:"Mercedes" ,year:2019},
         {name:"Ford" ,year:2025}
          ];
//const cars =["BMW","Mercedes","KIA"];

const carsname = cars.map(car => <li key={car.name}>{car.name}</li>);
const caryear = cars.map(car => <li key={car.year}>{car.year}</li>);
const filteryear = cars.filter(car => car.year >2019);
const filter = filteryear.map(filteryear=><li>{filteryear.name}: &nbsp;{filteryear.year}</li>) ;



let count =0;
const calculate = (name)=>
    {
        if(count<5)
            {count++;
             console.log(`${name} you clicked me ${count}`);
            }
            else
            {
                console.log(name+ " Stop clicking me")
            }
    };

    return(
        <>
        <h1>Name 😃</h1>
        <ul>
              {carsname}

        </ul>
        <h1>Year</h1>
        <ul>
              {caryear }

        </ul>
        <h1>filter</h1>
        <ul>
              {filter}

        </ul>
<button onClick={()=>calculate("Mustafa")}>count </button>
<EventButton/>
        </>
    );

}

Cars.defultProps =
{ 
    carsname:"none"
};

export default Cars