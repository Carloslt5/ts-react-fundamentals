import axios, { AxiosInstance } from "axios"

class PostServices {

    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com"
        });
    }

    getAllPost() {
        return this.instance.get("/posts")
    }
    getOnePost(id: any) {
        return this.instance.get(`/posts/${id}`)
    }
}

const postservices = new PostServices()
export default postservices

