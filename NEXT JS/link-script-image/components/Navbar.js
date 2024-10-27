import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 px-5'>
        <div className='text-xl font-bold'>
          <Link href="/">NEXT JS</Link>
        </div>
        <ul className='flex gap-3'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
        </ul>
    </nav>
  )
}

export default Navbar
