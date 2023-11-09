'use client'
import { useParams } from 'next/navigation'
import { useState,useEffect } from 'react'
import Image from 'next/image'
const page = () => {
  const {id} = useParams()
  const [blog,setBlog] = useState({})

  const fetchBlogs = async()=>{

    // const token = 'aaf32ccac8ca74b5521f3c25694a34c6604ba4bbc9c7b1c3c7e8a72c17616582e1b407ae963f7a59b2d99807405d5bfb418cbe9bb5e73fe900cbc77c7b6d187dbb0446d87e0e121828ccaed63a0580b9285adfbf98fc11f1828d780e0dec79c774b2918e078cb3193982cd65ebbf3428955fc168833f636a18782305510ace03'
    try {
      const res =await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
      const data = await res.json()
      setBlog(data?.data)
     console.log(data.data)
    }
      catch (error) {
        console.log(error)
     }
    }
    useEffect(()=>{
      fetchBlogs()
    },[id]) 

    const imageUrl = blog?.attributes?.image?.data?.attributes?.formats?.large?.url;

  return (
    <div className="flex justify-center ">
      <div className="max-w-3xl p-4 ">
        <h1 className="font-bold text-2xl  text-gray-800 my-10">
          {blog?.attributes?.title}
        </h1>
        {imageUrl ? (
          <div className="flex justify-center">
            <Image
              loader={({ src, width }) => `http://localhost:1337${src}?w=${width}`}
              src={imageUrl}
              alt={blog?.attributes?.title || "Blog Image"}
              priority
              width={500}
              height={300}
            />
          </div>
        ) : null}
        <p className="text-gray-600 break-words text-lg mt-4">{blog?.attributes?.content}</p>
      </div>
    </div>

  )
}

export default page