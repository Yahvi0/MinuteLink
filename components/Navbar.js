'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/shorten', label: 'Try Me' },
    { href: '/contact', label: 'Contact Us' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-purple-900/70 border-b border-purple-400/20 text-white">
            <div className="flex justify-between items-center px-4 md:px-8 h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-fuchsia-400 transition-all duration-500">
                        Minute<span className="text-white">Link</span>
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.href} className="relative group">
                            <Link href={link.href} className="text-sm font-medium text-purple-100 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-fuchsia-400 to-indigo-300 group-hover:w-full transition-all duration-300" />
                        </li>
                    ))}
                </ul>

                {/* CTA buttons */}
                <div className="hidden md:flex gap-3 items-center">
                    <Link
                        href="/shorten"
                        className="px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-400/50 hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        Try Now
                    </Link>
                    <Link
                        href="/github"
                        className="px-4 py-2 rounded-full font-semibold text-sm border border-black-300/40 hover:bg-white/10 hover:border-white/60 transition-all duration-200"
                    >
                        GitHub
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <span className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white rounded transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col gap-1 px-4 pb-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-purple-100 hover:text-white hover:pl-2 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="flex gap-3 pt-2">
                        <Link href="/shorten" className="flex-1 text-center px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-fuchsia-500 to-indigo-500">
                            Try Now
                        </Link>
                        <Link href="/github" className="flex-1 text-center px-4 py-2 rounded-full font-semibold text-sm border border-purple-300/40">
                            GitHub
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar