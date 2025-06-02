//import style from '../Style/Characters.css'

function Characters(props)
{
        //<button className={styles.button}></button>{style.Characters}
        const button = ()=>alert("Hello "+props.name);

    return <a href='' className="Characters">
            <img className="image" src={props.img}></img>
            <h1>{props.name}</h1>
            <p>NickName: {props.nickname}</p>
            <p>Rank: {props.rank}</p>
            <p>like: {props.isLike ? "yes" :"No"}</p>
            <button className="button-click" type="button" onClick={button}>{props.name}</button>

            </a>      
}

export default Characters