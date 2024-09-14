import React from 'react'

interface Props {
    post: Posts
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string
}

const Card = ({post}: Props) => {
  return (
    <div key={post.id} className='w-2/6 mb-28 border-2 border-red-500 border-s-red-700'>
      <div>
        image
      </div>

      <div>
        <h2 className='text-2xl my-4'>
          {post.title}
        </h2>

        <p>{post.body}</p>
        
      </div>
    </div>
  )
}

export default Card