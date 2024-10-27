import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className='flex justify-around p-4'>
                <div className='text-sm'>
                    Copyright &copy; NEXT JS | All rights reserved
                </div>
                <ul className='flex gap-3 text-sm'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
