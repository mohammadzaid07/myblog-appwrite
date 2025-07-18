import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-xl p-2 shadow-md outline-1'>
                <div className='w-full justify-center shadow-md mb-4'>
                    <img src={appwriteService.getFileView(featuredImage)} alt={title}
                        className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard