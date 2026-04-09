"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tours", path: "/tours" },
    // { name: "Destinations", path: "/destinations" },
    { name: "Blog", path: "/blogs" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "dashboard", path: "/dashboard" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white">
      
      <div className="navbar container mx-auto px-4">

        <div className="navbar-start">
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 rounded-xl bg-white border"
            >
              {
                navLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`text-[16px] ${
                        pathname === link.path
                          ? "text-pink-500 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <Link href="/" className="text-2xl font-bold text-pink-500">
            TravelGuide
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            {
              navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-[17px] transition ${
                      pathname === link.path
                        ? "text-pink-500 font-semibold border-b-2 border-pink-500"
                        : "text-gray-700 hover:text-pink-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="navbar-end">
          <button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition">
            Book a Tour
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;