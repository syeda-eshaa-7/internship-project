


'use client'

import Link from "next/link";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { BsBell, BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

// ThemeToggle Component
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check the user's preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
    </button>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="relative flex justify-between items-center border-b border-gray-300 py-4 px-6 md:px-10 dark:border-gray-700 dark:bg-gray-900">
      {/* Logo and Mobile Menu */}
      <div className="text-3xl font-extrabold tracking-wide text-transparent">
        <h2 className="text-2xl text-orange-500 font-bold ml-10">MOMS</h2>
        <p className="text-xs text-orange-600 mt-[-2px]">Bringing Moments to Life</p>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-2xl focus:outline-none" onClick={handleNav}>
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      {nav && <div className="fixed inset-0 bg-black/70 md:hidden z-40" onClick={handleNav}></div>}

      {/* Side Drawer Menu */}
      <div
        className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[35%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 z-50 transition-transform duration-500 ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start w-full md:w-auto">
            <h2 className="text-2xl text-orange-500 font-bold ml-10">MOMS</h2>
            <p className="text-xs text-orange-600 mt-[-2px]">Bringing Moments to Life</p>
          </div>
          <button className="rounded-full shadow-lg p-3" onClick={handleNav}>
            <AiOutlineClose />
          </button>
        </div>

        {/* Search Bar Inside Mobile Menu */}
        <form className="flex bg-gray-300 rounded-full items-center px-4 w-full my-4">
          <input type="text" placeholder="Search" className="bg-transparent outline-none py-1 px-2 w-full" />
          <button type="submit" className="ml-2 text-xl">
            <IoSearchOutline />
          </button>
        </form>

        {/* Menu Links */}
        <ul className="uppercase">
          {["ABOUT US", "CATALOG", "PLACES", "BLOG", "CONTACT"].map((item, index) => (
            <li key={index} onClick={handleNav} className="py-4 text-sm">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Create Account Button */}
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:from-gray-500 hover:to-gray-700">
          Create Account
        </button>

        {/* Icons inside Mobile Menu */}
        <div className="flex items-center gap-6 mt-6">
          <Link href="/notifications">
            <BsBell className="text-2xl hover:text-orange-500 transition" />
          </Link>
          <Link href="/settings">
            <IoSettingsOutline className="text-2xl hover:text-orange-500 transition" />
          </Link>
          {/* Add Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">
        {["About", "Catalog", "Places", "Blog", "Contact"].map((item, index) => (
          <li key={index}>
            <Link href={`/${item.toLowerCase()}`} className="hover:underline decoration-gray-800 decoration-2 underline-offset-8 dark:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section: Search, Icons, and Button (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center gap-6">
        {/* Search Bar */}
        <form className="hidden md:flex bg-gray-300 rounded-full items-center px-4 w-48 lg:w-56">
          <input type="text" placeholder="Search" className="bg-transparent outline-none py-1 px-2 w-full" />
          <button type="submit" className="ml-2 text-xl">
            <IoSearchOutline />
          </button>
        </form>

        {/* Icons (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/notifications">
            <BsBell className="text-2xl hover:text-orange-500 transition" />
          </Link>
          <Link href="/settings">
            <IoSettingsOutline className="text-2xl hover:text-orange-500 transition" />
          </Link>
          {/* Add Theme Toggle Icon */}
          <ThemeToggle />
        </div>

        {/* Create Account Button (Hidden on Small Screens) */}
        <button className="hidden md:block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:from-gray-500 hover:to-gray-700">
          Create Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;