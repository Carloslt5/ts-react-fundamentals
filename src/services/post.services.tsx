import axios from "axios"

const baseUrlApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

class PostServices {
    getAllPost() {
        return baseUrlApi.get("/posts")
    }
    getOnePost(id) {
        return baseUrlApi.get(`/posts/${id}`)
    }
}

const postservices = new PostServices()
export default postservices


// class PostServices {

//     constructor() {
//         this.api = axios.create({
//             baseURL: "https://jsonplaceholder.typicode.com"
//         })
//     }

//     getAllPost() {
//         return this.api.get("/posts")
//     }
//     getOnePost(id) {
//         return this.api.get(`/posts/${id}`)
//     }

// }

// const postservices = new PostServices()
// export default postservices