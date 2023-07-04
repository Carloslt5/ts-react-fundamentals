import { Link } from "react-router-dom"


const HomePage = () => {
    return (<>
        <h1 className="text-center">Home Page</h1>
        <Link to={'/postslist'}> View Posts List</Link>
    </>)
}

export default HomePage