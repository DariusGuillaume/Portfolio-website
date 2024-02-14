import Link from 'next/link'

const links = [
{url: '/', title: 'Home'},
{url: '/about', title: 'About'},
{url: '/projects', title: 'Projects'},
{url: '/contact', title: 'Contact'},
];





const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'> 
    {/* LOGO */}
    <div className=''> 
    <Link href = "/" className=" bg-sandtan w-10 h-10 rounded-lg 
        items-center justify-center flex font-bold shadow-md"> 
    <span className="text-white mr-1 items-center "> DG  </span>
    </Link>
     
    </div>   
    {/* MENU*/}
    <div className=''> 
     {/* MENU BUTTON*/} 
     <button className='w-10 h-8 flex flex-col'>
    <div className='w-10 h-1 bg-black rounded'></div>
    <div className='w-10 h-1 bg-black rounded'></div>
    <div className='w-10 h-1 bg-black rounded'></div>
    </button>
    {/* MENU LIST*/}  
    <div className=''>
    {links.map(link=>(<Link href = {link.url} key = {link.title}>{link.title}</Link>))}
      </div>
    </div>
    </div>
  )
}

export default Navbar