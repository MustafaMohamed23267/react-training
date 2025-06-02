import { useState } from "react"

function ChangeMovie()
{

let [movie , setMovie] = useState([]);
let [Title , setTitle]= useState("");
let [type , setType] = useState("");
let [year , setyear] =useState();

function addMovie()
{
    const newMovie = 
        {
            title:Title,
            type:type,
            releaseDate:year
        };
        setMovie(movie=>[...movie,newMovie])

}

function removeMovie(index)
{
    setMovie(movie.filter((_,i)=> i!==index));
}

function changeTitle(event)
{
    setTitle(event.target.value)
}

function ChangeType(event)
{
    setType(event.target.value)
}

function ChangeYear(event)
{
    setyear(event.target.value)
}

    return(<div>
        <h1>Movies</h1>
        <ul>
            {movie.map((movie,index)=><li key={index} onClick={()=>removeMovie(index)}>{movie.title} {movie.type} {movie.releaseDate}</li>)}
        </ul>
        <input type="text" onChange={changeTitle} placeholder="enter movie title"/><br/>
        <input type="text" onChange={ChangeType} placeholder="enter movie type"/><br/>
        <input type="number" onChange={ChangeYear} placeholder="enter movie release year"/><br/>
        <button type="button" onClick={addMovie}>add movie</button>
    
    </div>)
}

export default ChangeMovie