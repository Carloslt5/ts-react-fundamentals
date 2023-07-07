import axios, { AxiosInstance } from "axios"

// const baseUrlApi = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// })

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
    getOnePost(id) {
        return this.instance.get(`/posts/${id}`)
    }
}

const postservices = new PostServices()
export default postservices

// class HttpClient {
//     instance: AxiosInstance;
//     constructor(baseURL: string) {
//         this.instance = axios.create({
//             baseURL
//         });
//     }
// }

// class PostServices extends HttpClient {

//     constructor() {
//         super('https://jsonplaceholder.typicode.com');
//     }

//     getAllPost() {
//         return this.instance.get("/posts")
//     }

//     getOnePost(id: string) {
//         return this.instance.get(`/posts/${id}`)
//     }

// }

// const postservices = new PostServices()
// export default postservices
