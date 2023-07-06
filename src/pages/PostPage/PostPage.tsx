import { Link, useParams } from "react-router-dom"
import postservices from './../../services/post.services'
import { useEffect, useState } from "react";
import { Post } from './../../types/Post.type';

const PostPage = () => {

    const { id } = useParams()
    const [post, setPost] = useState<Post>()

    const loadPost = () => {
        postservices
            .getOnePost(id)
            .then(({ data }: { data: Post }) => {
                setPost(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (
        <>
            <h1 className="text-4xl text-center my-4">EachPost</h1>
            {!post
                ? <h1>Loading...</h1>
                : <div className="container mx-auto py-4 px-8 bg-white shadow-lg rounded-lg " key={post.id}>
                    <div className="flex flex-col justify-center md:justify-end">
                        <h1 className="text-l">Post-{post.id}</h1>
                        <h2 className="text-2xl uppercase"><strong>{post.title}</strong></h2>
                        <p>{post.body}</p>
                    </div>
                    <div className="container mx-auto mt-4 flex gap-2">
                        <Link to={'/'} className="text-white bg-gray-900 py-2 px-4 rounded">
                            Go Home
                        </Link>
                        <Link to={'/postslist'} className="text-white bg-gray-600 py-2 px-4 rounded">
                            Go Posts List
                        </Link>
                    </div>
                </div>}
        </>
    )
}

export default PostPage