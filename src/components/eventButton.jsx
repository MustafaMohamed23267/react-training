function EventButton()
{
    const imgurl ='/src/assets/batman2.jpg';
    const eventaction = (e)=> e.target.style.display ="none";
    return(
    <img className="eventimage" onClick={(e)=>eventaction(e)} src={imgurl}/>
    )
}

export default EventButton