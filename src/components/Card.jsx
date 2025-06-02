
import loki from '../assets/loki.jpg'
import batman from '../assets/batman2.jpg'
import milies from '../assets/milles2.jpg'
import Characters from './Characters'
import eren from '../assets/eren.jpg'
import wanda from'../assets/wanda.jpg'


function Card()
{
    return(
        <>
            <><Characters img={batman} name="Batman" nickname="The Dark Knight" rank={1} isLike={true} /></>
            <><Characters img={loki} name="Loki" nickname="The King of Mistife" rank={2} isLike = {true}/></>
            <><Characters img={eren} name="Eren Yeager" nickname="The Founding Titan" rank={3} isLike={true}/></>
            <><Characters img={milies} name="Milies Morales" nickname="The Black Spider-Man" rank={5} isLike={true}/></>
            <><Characters img={wanda} name="Wanda Maximof" nickname="The Scarlet Witch" rank={6} isLike={true}/></>

            
        </>
    )
}

export default Card