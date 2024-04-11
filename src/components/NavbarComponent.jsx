import React from 'react'

export default function NavbarComponent() {
  return (
    <section className=' absolute w-full bg-transparent z-50'>


<nav class=" border-gray-200 ">
  <div class="w-full h-32 flex flex-wrap items-center justify-between mx-auto p-7 ">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse ">
      <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" class="h-8" alt="Flowbite Logo" />
      
  </a>
 
    <div class="items-center justify-between gap-10 w-full flex md:w-auto md:order-1" id="navbar-search">
      
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
        <li>
        <button type="button" class="text-white   hover:bg-white  hover:text-black text-xl  rounded-lg font-medium px-5 py-2.5 me-2 mb-2 ">Home</button>
        </li>
        <li>
        <button type="button" class="text-white   hover:bg-white  hover:text-black text-xl  rounded-lg font-medium px-5 py-2.5 me-2 mb-2 ">Popular</button>
        </li>
        <li>
        <button type="button" class="text-white   hover:bg-white  hover:text-black text-xl  rounded-lg font-medium px-5 py-2.5 me-2 mb-2 ">Romance</button>
        
        </li>
        <li>
        <button type="button" class="text-white   hover:bg-white  hover:text-black text-xl  rounded-lg font-medium px-5 py-2.5 me-2 mb-2 ">Anime</button>
         
              </li>
      </ul>


 <div class="flex md:order-2 ">
   
    <div class="relative hidden md:block">
      <input type="text" id="search-navbar" class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

    </div>
  </div>

</nav>

    </section>
  )
}
