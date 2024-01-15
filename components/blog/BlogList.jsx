import React from 'react'
import { BlogData } from './BlogData'
import BlogCard from './BlogCard'

function BlogList() {
  return (
    <div className='flex  justify-center  flex-wrap gap-4'>
        {
            BlogData.map((item,index)=>(
              <div key={index}>
                <BlogCard  id={item.id} title={item.title} introduction={item.introduction} />
                </div>
            ))
        }
    </div>
  )
}

export default BlogList