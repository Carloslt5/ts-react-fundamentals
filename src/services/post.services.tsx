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


}

const postservices = new PostServices()

export default postservices