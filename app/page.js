import Herosection from '@/components/Herosection'
import HomeBlog from '@/components/HomeBlog'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
   <div>
    {/* Hero Section  */}
    <Herosection/>
    {/* Home Latest blog */}
<HomeBlog/>
   {/* testimonials Section */}
   <Testimonials/>
   </div>
  )
}
