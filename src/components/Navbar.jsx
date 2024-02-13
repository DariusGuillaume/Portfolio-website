import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'> 
    {/* LOGO */}
    <div className=''> 
    <Link href = "/" className="text-sm bg-sandtan rounded-md p-1 font-semibold flex items-center justify-center"> 
    <span className="text-white mr-1"> Darius  </span>
      <span className="w-12 h-8 rounded bg-white text-sandtan flex items-center justify-center"> .G</span>
   </Link>  
    </div>   
    {/* MENU*/}
    <div className=''>2 </div>
      
    </div>
  )
}

export default Navbar