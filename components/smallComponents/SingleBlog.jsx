import React from 'react'

const SingleBlog = () => {
    
  return (
    <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
    <div className="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?nature "
            alt="" className="" /> </div>
    <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
    <div className="font-bold text-lg text-black m-2">There is something about nature that just feels so calming.
    </div>
    <p className="text-gray-500 m-2 text-sm">There is something about nature that just feels so
            calming. Whether you are out hiking through the wilderness or simply taking a stroll through your
            local park, being surrounded by natural beauty can really put you in a good mood. And there is
            definitely something therapeutic about spending time in nature, whether it is clearing your mind
            after a long day or just enjoying the peace and quiet.</p>
            <button className="btn-black">Read More</button>
</div>
  )
}

export default SingleBlog