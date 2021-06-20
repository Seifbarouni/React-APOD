const Pic = ({ picdata }) => {
    return (
        <div className="text-gray-200 mt-4 flex flex-col items-center justify-center lg:text-xl lg:mt-28">


            <div className="flex lg:flex-row flex-col items-center justify-center lg:ml-4">
                {picdata.media_type === "image" ?
                    <img src={picdata.url} alt="" className="md:h-96 md:w-auto rounded-md shadow-md border-2 object-contain" onClick={() => {
                        window.location.href = picdata.url
                    }}></img>
                    :
                    <iframe
                        title="space-vid"
                        frameBorder="0"
                        src={picdata.url}
                        allow="autoplay"
                        allowFullScreen
                        className="h-96 w-auto rounded-md shadow-md border-2"
                        autoplay
                    />}


                <div className="text-center p-4">
                    <div className="text-center font-bold">
                        <h2>{picdata.title}</h2>
                        <h3>{picdata.date}</h3>
                    </div>
                    <p className="mt-2">{picdata.explanation}</p>
                </div>

            </div>
        </div>
    )
}

export default Pic
