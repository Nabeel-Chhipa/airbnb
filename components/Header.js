import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type='text' placeholder='Start your search'
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon
          className='h-8 bg-red-400 text-white p-2 cursor-pointer rounded-full md:mx-2 hidden md:inline-flex'
        />
      </div>
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='cursor-pointer hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header