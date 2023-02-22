import {NavLink} from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className='absolute flex items-center justify-between z-10 w-full px-[90px] text-white flex-wrap'>
            <NavLink to='/'>
                <h1 className='font-[Outfit] text-2xl font-bold items-center pt-[75px]'>
                    AnimeBinge
                </h1>
            </NavLink>
            <div className='font-[Montserrat] text-white font-normal text-base items-center pt-[81px] '>
                <NavLink to='/'>
                    <button className='mr-[53px] hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        Home
                    </button>
                </NavLink>
                <NavLink to='/discover'>
                    <button className='mr-[58px] hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        Discover
                    </button>
                </NavLink>
                <NavLink to='/aboutus'>
                    <button className='mr-[49px] hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        About Us
                    </button>
                </NavLink>
                <NavLink to='/signup'>
                    <button className='mr-[21px] px-7 py-3 border-[1px] border-white rounded-md hover:bg-[#106580]'>
                        Sign Up
                    </button>
                </NavLink>
                <NavLink to='/login'>
                    <button className='px-8 py-3 rounded-md bg-[#106580] hover:bg-white hover:text-[#106580]'>
                        Log In
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}
