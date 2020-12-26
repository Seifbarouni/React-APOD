import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="Home">
         <h1>Astronomy Picture Of The Day<br/>(Powered By Nasa)</h1>   
         <Link to="/nasapic" className="linkNasaPic">See the picture</Link>
        </div>
    )
}

export default Home
