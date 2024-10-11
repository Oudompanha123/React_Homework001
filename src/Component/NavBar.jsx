import React from 'react'

function NavBar() {
  return (
      <>
            

        <nav class="bg-white border-gray-200 dark:bg-gray-900 w-[90%] mx-auto">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Portfolio</span>
            </a>
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
              <div className='space-x-8 flex items-center'>
                <img src="src\Images\pf.jpg" alt="" className='w-10 h-10 rounded-full' />
                <p className='font-bold '>Jung Kok</p>
              </div>
            </div>
          </div>
        </nav>

      </>
    )
}

export default NavBar;
