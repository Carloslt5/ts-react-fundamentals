import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PostListPage from '../pages/PostList/PostListPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/postslist" element={<PostListPage />} />
        </Routes>
    )
}

export default AppRoutes