import React from 'react'
import Image from 'next/image'
import profile from '@/public/profile.png'
import aboutme from '@/public/aboutme.jpg'
const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image alt="content" className="object-cover object-center h-full w-full" src={aboutme} />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <Image alt="content" className="object-cover object-center h-10 w-10" src={profile} />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-bold title-font mt-4 text-gray-900 text-lg ">Ali Hassan</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Building Tomorrow's Digital World Today.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">I'm a passionate web developer with a keen interest in crafting dynamic and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript, I specialize in building responsive, elegant, and intuitive user interfaces. With a solid foundation in various frameworks such as React and Angular, I strive to create engaging digital experiences. My expertise extends to back-end technologies like Node.js and databases, enabling me to deliver full-stack solutions. Always eager to learn and adapt to new technologies, I'm dedicated to creating robust and scalable web applications that push the boundaries of innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
 

  )
}

export default page