import { useState } from "react"

function Changeform()
{
    let [name ,setName] = useState("");
    let [age ,setAge] = useState("");
    let [payment ,setPayment]=useState();
    let[deleviry,setDeleviry]=useState();




    let changeName = (e)=> {setName(e.target.value)};
    let changeAge = (e)=> {setAge(e.target.value)};
    let paymentMethod = (e)=> {setPayment(e.target.value)};
    let delevirycheack = (e)=>{setDeleviry(e.target.value)}



return(
<>
<input onChange={changeName}/>
<p>Name: {name}</p>

<input type="number" onChange={changeAge}/>
<p>Age: {age}</p>

<select value={payment} onChange={paymentMethod}>
 <option value="">Select Payment Methd</option>
 <option value="Visa">Visa</option>
 <option value="MasterCard">MasterCard</option>
 <option value="Meza">Meza</option>
</select>
<p>Payment Method: {payment}</p>

<lable>Deleviry</lable><input type="radio" checked={deleviry==="Delivery"} onChange={delevirycheack} value="Delivery"/><br/>
<lable>On Site</lable><input type="radio" checked={deleviry==="on Site"} onChange={delevirycheack} value="on Site"/>

<p>{deleviry}</p>

</>)
}

export default Changeform