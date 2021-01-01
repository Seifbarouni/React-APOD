import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Pic from './Pic'
import Loading from './Loading'
//const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaPic = () => {
    const [picdata,setPicdata] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchData =async ()=>{
            setLoading(true)
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=gA6wb0nPTfM97ahuZaHbrEDNMgwQ5GgkNHRpOh6b&hd=true`)
            const data = await res.json()
            setPicdata(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <>
        <Link to="/" className="linkHome">Home</Link>

        <div className="NasaPic">

            {!loading ?<Pic picdata={picdata}/> : <Loading>Loading...</Loading>}

        </div>
        </>
    )
}

export default NasaPic
