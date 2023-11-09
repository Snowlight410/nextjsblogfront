import Image from "next/image";
import heroMain from '@/public/heromain.jpg'
import Link from "next/link";
const Herosection = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10">
            <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
              <div className="text-4xl font-bold">
              Forging the Future with Innovation and Expertise in a Changing World.
              </div>
              <div className="text-xl font-semibold text-gray-400">
              Empowering Tomorrow's Tech Today
              </div>
              <div className="md:text-lg">
                <Link href={'/blog'}>
                <button className="btn-black">
                  Explore Blogs
                </button>
                </Link>
              </div>
            </div>
            <div className="w-3/4 h-60 md:h-[70vh] my-4 rounded-lg overflow-hidden">
              <Image src={heroMain} className="h-full w-full" alt="mainimage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Herosection