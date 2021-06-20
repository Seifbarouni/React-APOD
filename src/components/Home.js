import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
            <div className="lg:text-3xl text-xl font-bold">Astronomy Picture Of The Day (Powered By Nasa)</div>
            <Link to="/nasapic" className="lg:text-2xl text-lg rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 mt-12">See the picture</Link>
        </div>
    )
}

export default Home
