import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between p-6 bg-slate-400 mb-2 sticky top-0 text-white'>
                <div className='flex list-none gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
                <div className='flex place-content-center'>
                    searchBar
                </div>
            </div>
        </>
    )
}

export default Navbar
