import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center my-10 w-[90%] space-y-20 lg:space-y-24 max-w-7xl">
        <div className="flex flex-col justify-center items-center">
          <div className="title-head">Testimonials</div>
          <div className="text-black text-sm text-center my-8">
          Inspiring Testimonials from Industry Pioneers.
          </div>
        </div>
        <div className="flex  flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0 lg:space-x-10">
          <div className="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-20 ">
              <img src="https://source.unsplash.com/150x150/?man" className="rounded-full" alt="" />
            </div>
            <p className="text-center text-sm p-5">
            John Smith, the Chief Technology Officer at Acme Corp, is a forward-thinking tech enthusiast with a knack for transforming complex ideas. </p>
            <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
            <h1 className="text-green-800 text-lg font-semibold">John Smith </h1>
            <p className="text-black text-sm mb-10 lg:mt-[5px]">from <b>Acme Corp</b></p>
            </div>
          </div>
          <div className="bg-slate-200 shadow-lg  flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-20 ">
              <img src="https://source.unsplash.com/150x150/?woman" className="rounded-full" alt="" />
            </div>
            <p className="text-center text-sm p-5">
            As the Lead Data Scientist at TechGuru Enterprises, Sophie Johnson showcases an unmatched dedication to unraveling the potential of data. </p>
            <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
              <h1 className="text-green-800 text-lg font-semibold">Sophie Johnson  </h1>
              <p className="text-black text-sm mb-10 lg:mt-[5px]">from <b>TechGuru Enterprises</b></p>
            </div>
          </div>
          <div className="bg-slate-200 shadow-lg mb-10 flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
            <div className="-mt-20 ">
              <img src="https://source.unsplash.com/150x150/?man&coprate" className="rounded-full" alt="" />
            </div>
            <p className="text-center text-sm p-5">
            Michael Davis, the Head of Product Design at NexGen Innovations, is a visionary leader with a relentless commitment to user-centric design.            </p>
            <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
              <h1 className="text-green-800 text-lg font-semibold">Michael Davis </h1>
              <p className="text-black text-sm mb-10 lg:mt-[5px]">from <b>NexGen Innovations</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
