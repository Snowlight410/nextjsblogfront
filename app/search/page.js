"use client"

import {icons} from "@/icons/icons";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const page = () => {

  const [keyword,setkeyword]= useState('')
  const [blogs,setBlogs] = useState([])
  const [keywordNotFound, setKeywordNotFound] = useState(false); // State to handle keyword not found condition

   const handlsearch = async()=>{
      // const token = 'aaf32ccac8ca74b5521f3c25694a34c6604ba4bbc9c7b1c3c7e8a72c17616582e1b407ae963f7a59b2d99807405d5bfb418cbe9bb5e73fe900cbc77c7b6d187dbb0446d87e0e121828ccaed63a0580b9285adfbf98fc11f1828d780e0dec79c774b2918e078cb3193982cd65ebbf3428955fc168833f636a18782305510ace03'
      try{
      if (!keyword) {
        alert('Please enter a valid keyword for search.');
        return;
      } else {
        const res = await fetch(`http://localhost:1337/api/blogs?populate=*&filters[title][$eqi]=${keyword}`);
        const data = await res.json();

        setBlogs(data?.data);

          if (data.data.length === 0) {
            setKeywordNotFound(true); // Set state if keyword is not found
          } else {
            setKeywordNotFound(false); // Reset state if keyword is found
          }
        }
      }
        catch (error) {
          console.log(error)
        }
      }

      

  console.log(blogs)
  return (
    <div className=" my-5 h-[90vh] w-[90%] mx-auto">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          onChange={(e)=>{setkeyword(e.target.value)}}
          value={keyword}
          name="title"
          placeholder="Search"/>

            
        {/* Search button */}
        <button onClick={handlsearch}
          className="bg-green-900 p-3  text-white w-max font-normal hover:bg-green-700 cursor-pointer"  type="button"
         >
                search
        </button>
      </div>
      <div className="flex justify-center">
         <div className="grid grid-cols-4 gap-4">
  {blogs?.map(blog => (
    <div
      key={blog.id}
      className="overflow-hidden bg-white shadow-sm"
    >
      <div className="h-26 overflow-hidden">
        <Image
          loader={({ src,width }) => `http://localhost:1337${src}?w=${width}`}
          src={`${blog?.attributes?.image?.data?.attributes?.formats.large.url}`}
          alt=""
          priority
          width={250}
          height={250}
        />
      </div>
      <div className="text-sm text-gray-500 m-2">
           {
            new Date(blog?.attributes?.createdAt).toString().split("G")[0]
          }   
      </div>
      <h2 className="font-bold text-lg text-black m-2">
        {blog?.attributes?.title}
      </h2>
      <p className="text-gray-500 m-2 text-sm">
        {blog?.attributes?.content.slice(0,80)}......
      </p>
      <Link href={`/blog/${blog.id}`}>
      <button  className="btn-black">Read More</button>
      </Link>
    </div>
  ))}
</div>
{
  keywordNotFound &&  <div><h2 className="text-2xl font-bold">Result not Found.</h2></div>
}
</div>
    </div>
  );
};

export default page