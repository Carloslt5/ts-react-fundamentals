import axios from "axios"

class PostServices {

    constructor() {

        this.api = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })

    }

    getAllPost() {
        return this.api.get(`/posts`)
    }

    getOnePost(id) {
        return this.api.get(`/posts/${id}`)
    }


}

const postservices = new PostServices()

export default postservices