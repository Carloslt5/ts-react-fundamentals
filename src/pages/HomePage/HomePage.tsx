import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <>
            <h1 className="text-4xl text-center my-4">Home Page</h1>
            <div className="flex justify-center container mx-auto px-2 ">
                <Link to={'/postslist'} className="text-white bg-gray-900 py-2 px-4 rounded content-center">
                    View Posts List
                </Link>
            </div>
        </>
    )
}

export default HomePage