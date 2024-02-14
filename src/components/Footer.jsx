import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className='w-full md:w-1/4'>
                    <h1 className='font-semibold text-xl pb-4'>Cafe Web</h1>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ratione esse dolores cum mollitia veniam eos quasi nam consequuntur laborum excepturi perspiciatis voluptatibus expedita numquam, iste fugiat voluptates cupiditate accusantium!</p>
                </div>
                <div >
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Drinks</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Menu</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Reviews</a>
                    </nav>
                </div>
                <div >
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Drinks</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Premium Menu</a>
                    </nav>
                </div>
                <div >
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">ContactMe@gmail.com</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">+1 234 567 8910</a>
                        <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Social Media</a>
                    </nav>
                </div>
            </div>
            <div>
                <p className='text-center py-4'>@copyright developed by
                    <span className='text-brightColor'> me</span> |
                    All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer