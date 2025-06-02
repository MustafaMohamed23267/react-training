import { useRef } from "react";

function Header()
{

    const inputRef = useRef();

    function searchStyle()
    {
        if(inputRef.current)
            {
                inputRef.current.style.display="block";
                inputRef.current.style.transition ="2s";
               
            }
    }
    return(
        <>
            <h1>Website</h1>
            
            
                <nav>
                   <a href="#">Home</a>
                   <a href="#">About</a> 
                   <a href="#">Portifolio</a>
                   <a href="#">Contact</a></nav>
                   <nav>
                  <input type="text" placeholder="Search" className="searchInput" ref={inputRef}/>
                  <button type="button" className="searchButton" onClick={searchStyle}>Search🔎</button>
                   </nav>
            </>
                
       
    );

}

export default Header