import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
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

export default async function Page() {

  const data = await getData()

  return (
    <div className='grid grid-cols-2 gap-6'>
      {data.map((item) => (
        <Link key={item._id} href={`/blog/${item._id}`} className=''
        >
          <div className='flex flex-col flex-wrap'>
            <Image
              src={item.img}
              alt="blog"
              width={400}
              height={500}
              className='object-fit'
            />
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>
              {item.desc} </p>
          </div>
        </Link>

      ))},
    </div>
  )
}
