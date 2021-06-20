import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pic from './Pic'
import Loading from './Loading'
const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaPic = () => {
    const [picdata, setPicdata] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
            const data = await res.json()
            setPicdata(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div className="mt-4 flex flex-col items-center justify-center">
            <Link to="/" className="lg:text-xl text-lg rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2">Home</Link>

            <div className="NasaPic">

                {!loading ? <Pic picdata={picdata} /> : <Loading>Loading...</Loading>}

            </div>
        </div>
    )
}

export default NasaPic
