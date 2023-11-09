"use client";
import SingleBlog from "@/components/smallComponents/SingleBlog";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "react-js-pagination";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCountPage, setTotalCountPage] = useState(0);
  const [itemPerPage,setItemPerPage] = useState(8)
  const fetchBlogs = async () => {
    // const token = 'aaf32ccac8ca74b5521f3c25694a34c6604ba4bbc9c7b1c3c7e8a72c17616582e1b407ae963f7a59b2d99807405d5bfb418cbe9bb5e73fe900cbc77c7b6d187dbb0446d87e0e121828ccaed63a0580b9285adfbf98fc11f1828d780e0dec79c774b2918e078cb3193982cd65ebbf3428955fc168833f636a18782305510ace03'
    try {
      const res = await fetch(
        `http://localhost:1337/api/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${itemPerPage}`
      );

      const data = await res.json();
      setBlogs(data?.data);
      setTotalCountPage(data.meta.pagination.total);
      setItemPerPage(data.meta.pagination.pageSize)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);
  const handlePagination = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div className="mt-10 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 title-head">
        all blogs
      </h2>
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-left gap-4">
        {blogs.length !== 0 ?(blogs?.map(blog => (
    <div
      key={blog.id}
      className="overflow-hidden   text-center shadow-sm"
    >
      <div className="h-26 overflow-hidden">
        <Image
          loader={({ src }) => `http://localhost:1337${src}`}
          src={`${blog?.attributes?.image?.data?.attributes?.formats.large.url}`}
          alt=""
          className='mx-auto'
          width={300}
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
        {blog?.attributes?.content.slice(0,30)}......
      </p>
      <Link href={`/blog/${blog.id}`}>
      <button  className="btn-black">Read More</button>
      </Link>
    </div>
  ))):(<div className=' md:relative left-20'><div className="flex justify-center items-center mt-10">
  <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
</div></div>)
}
        </div>
      </div>
      {
        totalCountPage > itemPerPage && 
      <div>
        <Pagination
          activePage={currentPage}
          totalItemsCount={totalCountPage}
          itemsCountPerPage={itemPerPage}
          onChange={handlePagination}
          prevPageText="pre"
          firstPageText="first"
          lastPageText="last"
          nextPageText="next"
          activeClass="item-active-class"
          itemClass="item-class"
          linkClass="link-class"
          activeLinkClass="active-link"
          />
      </div>
        }
    </div>
  );
};

export default page;
