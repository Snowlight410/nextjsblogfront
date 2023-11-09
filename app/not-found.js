import Link from 'next/link'
 
export default function NotFound() {
    
  return (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col space-y-4 text-left px-6">
            <div className="text-7xl font-bold text-black">404</div>
            <div className="text-stone-500 font-medium">Oops, you still haven't found what you're looking for?</div>
            <div className="flex space-x-4 items-center justify-start">
              <div className="text-sm font-medium text-stone-500">Back to Home Page</div>
              <Link href="/">
                <div className="bg-black px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
                  Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    };
