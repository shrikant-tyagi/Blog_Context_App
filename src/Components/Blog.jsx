import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = ({post}) => {
  return (
    <div className='text-sm flex-col flex gap-y-1'>
       <NavLink to={`/blogs/${post.id}`} ><h2 className='text-xl font-semibold hover:underline'>{post.title}</h2></NavLink>
       <div className='text-sm italic'>By {post.author} on <NavLink className='underline font-semibold' to={`/categories/${post.category}`}> {post.category} </NavLink> </div>
       <div className=''>Posted On {post.date}</div>

       <p className='my-2'>{post.content}</p>

       <div className=''>
          {
            post.tags.map((tag,index) => {
                return (
                  <NavLink to={`/tags/${tag}`} >
                    <span key={index} className='mr-3 underline text-blue-600'>#{tag}</span>
                  </NavLink>
                )
            })
          }
        </div>
    </div>
  )
}

export default Blog