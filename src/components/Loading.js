import logo from '../Loading.gif'

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <img src={logo} alt="loading" className="h-16 w-16"></img>
        </div>
    )
}

export default Loading
