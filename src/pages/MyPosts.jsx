// src/pages/MyPosts.jsx
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'
import AddPostImage from '../assets/add-post.jpg'
import { Query } from 'appwrite'

function MyPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector(state => state.auth.userData)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (userData) {
            setLoading(true);
            appwriteService.getPosts([Query.equal("userId", userData.$id)]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
                setLoading(false);
            });
        }
    }, [userData])

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading your posts...</div>
    }

    return (
        <div className='min-h-[75vh] w-full py-8'>
            <Container>
                <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='break-inside-avoid'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <Link to={`/add-post`}>
                            <div className='break-inside-avoid'>
                                <div className='w-full bg-white rounded-xl p-2 shadow-md outline-1 max-w-sm mx-auto'>
                                    <div className='w-full shadow-md mb-4'>
                                        <img
                                            src={AddPostImage}
                                            alt="Add Post"
                                            className='rounded-xl w-full h-60 object-cover'
                                        />
                                    </div>
                                    <h2 className='text-xl font-bold text-center'>Add your first post</h2>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default MyPosts
