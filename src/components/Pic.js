const Pic = ({picdata}) => {
    return (
        <div className="Pic">
        <h2>{picdata.title}</h2>

        {picdata.media_type === "image" ? 
            <img src={picdata.url} alt="" className="NasaPicture" onClick={()=>{
                window.location.href = picdata.url
            }}></img>
        :
            <iframe
            title="space-vid"
            frameBorder="0"
            src={picdata.url}
            gesture = "media"
            allow= "encrypted-media"
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
