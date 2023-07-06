import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PostListPage from '../pages/PostList/PostListPage'
import PostPage from '../pages/PostPage/PostPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/postslist" element={<PostListPage />} />
            <Route path="/postslist/:id" element={<PostPage />} />
        </Routes>
    )
}

export default AppRoutes