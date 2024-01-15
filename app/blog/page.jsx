import BlogList from '@/components/blog/BlogList'

import React from 'react'

function BlogPage() {
  return (
    <div className='w-full  py-24  md:py-20 lg:py-28  h-[auto]'>

      <div className=''>
        <p className=' text-center text-[3rem] font-bold'> Blogs</p>
        <div >
        <BlogList/>
        </div>
      </div>
    </div>
  )
}

export default BlogPage