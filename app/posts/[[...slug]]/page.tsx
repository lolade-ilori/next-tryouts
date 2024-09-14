import React from 'react'
import Card from '../card';

interface Props {
    params: {slug: string[]}
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string
}

const PostById = async ({params: {slug}}:Props) => {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
  const posts: Posts[] = await res.json()

  return (
    <>
      {/* <div className='mb-4 border-2 border-s-violet-50'>
        <input type="text" className='w-full border-none focus:outline-none ' placeholder='Search by id' onChange={(e) => console.log(e.currentTarget.value)} />
      </div> */}
      <h1>This is a {slug}</h1>
      <div className=' flex justify-evenly flex-wrap'>
        {
          posts.map(post => 
            <Card post={post} key={post.id}/>
          )
        }
      </div>
    </>
  )
}

export default PostById