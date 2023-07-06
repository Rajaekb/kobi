import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}

export default async function Page({ params }) {
  console.log(params)

  const data = await getData(params.id)

  return (
    <div className='grid grid-cols-2 gap-6'>

      <Link href="testId" className=''
      >
        <div className='flex flex-col flex-wrap'>
          <Image
            src={data.img}
            alt="blog"
            width={400}
            height={500}
            className='object-fit rounded-xl'
          />
        </div>
        <div>
          <h1 className='font-bold'>{data.title}</h1>
          <p>
            {data.desc}
          </p>
          <div className='text-gray-500'>
            <Image
              src={data.img}
              alt="author"
              width={20}
              height={20}
              className='object-contain  rounded-full'
            />
            {data.username}
          </div>
          <p>
            {data.content}
          </p>
        </div>
      </Link>


    </div>
  )
}
