import Link from "next/link";
import SvgCom from "./smallComponents/SvgCom";
import {icons} from "@/icons/icons";
function Header() {
  return (
    <header className="text-gray-600 flex items-center justify-center border-2 max-w-7xl mx-auto">
      <div className="container  w-[100%] md:w-[80%]  mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <SvgCom />
            <span className="ml-1 text-xl font-bold">Blogwebi</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base">
            <Link href='/' className="header-link">Home</Link>
            <Link href='/blog' className="header-link">Blog</Link>
            <Link href='/about' className="header-link">About</Link>
            <Link href='/search' className="header-link"><icons.search size={20}/></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
