const Pic = ({picdata}) => {
    return (
        <div className="Pic">
            <div className="title_date">
            <h2>{picdata.title}</h2>
            <h3>{picdata.date}</h3>
            </div>
        

        {picdata.media_type === "image" ? 
            <img src={picdata.url} alt="" className="NasaPicture" onClick={()=>{
                window.location.href = picdata.url
            }}></img>
        :
            <iframe
            title="space-vid"
            frameBorder="0"
            src={picdata.url}
            allow="autoplay"
            allowFullScreen
            className="NasaVid"
           / >}
            
        
        <div className="PicInfo">
        <p>{picdata.explanation}</p>
        </div>
        </div>
    )
}

export default Pic
