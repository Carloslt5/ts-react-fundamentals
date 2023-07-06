import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import postservices from './../../services/post.services'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}

const PostListPage = () => {
    const [postData, setPostData] = useState<Post[]>()

    const loadPost = () => {
        postservices
            .getAllPost()
            .then(({ data }) => {
                setPostData(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (
        <>
            <h1 className="text-4xl text-center my-4">Posts List</h1>
            <section className="container mx-auto px-2 py-4 flex flex-col gap-2">

                {!postData
                    ? <h1>Loading...</h1>
                    : postData.map((post) => (
                        <div className="py-4 px-8 bg-white shadow-lg rounded-lg " key={post.id}>
                            <div className="flex flex-col justify-center md:justify-end">
                                <h1><strong>{post.title}</strong></h1>
                                <p className="mt-2 text-gray-600">
                                    {post.body}
                                </p>
                            </div>
                            <div className="container mx-auto mt-4">
                                <Link to={`/postslist/${post.id}`} className="text-white bg-gray-900 py-2 px-4 rounded content-center">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    )
                    )}
            </section>
            <div className="flex justify-center container mx-auto mt-4 px-2 ">
                <Link to={'/'} className="text-white bg-gray-900 py-2 px-4 rounded content-center">
                    Go Home
                </Link>
            </div>
        </>
    )
}

export default PostListPage