import { useState } from "react"

function State()
{
    let [count , setCount] = useState(0);
    let[color2 ,setColor2] = useState();
    let[backcolor , setBackcolor] = useState("#ffffff");
    let color = "";

    let increment = ()=>{setCount(count+1);};
    let decrement =()=>{setCount(count -1)};
    let pickheaderColor2 = (e)=>{setColor2(e.target.value)};
    let pickBackColor = (e)=>{setBackcolor(e.target.value)};

    if(count<0)
    {color= "#ff0000";
    }
    else if (count > 0) {
       color="#1bb407"; 
    } 

return(
<>
<div className="count" style={{backgroundColor:backcolor , transition:".3s ease"}}>
<h1 style={{color:color2 , transition:".3s ease"}}>Counter</h1>
<p style={{color:color}}>{count}</p>
<div className="button" >
<button className="Increment" onClick={increment}>Increment</button>
<button className="Reset" onClick={()=>setCount(0)}>Reset</button>
<button className="Decrement" onClick={decrement}>Decrement</button>
</div>

<div className="color-picker">
    <label>Select Color</label><input type="color" onChange={pickBackColor} value={backcolor} />
    <label>Select header Color</label><input type="color" onChange={pickheaderColor2} value={color2} />

</div>
</div>
</>
)
}

export default State