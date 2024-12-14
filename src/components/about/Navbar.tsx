"use client";
// import { User } from "@/data/models/user";
import { Menu } from "iconsax-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AppLogo } from "../AppLogo";
import AvatarImage from "../AvatarImage";
import { ButtonBase } from "../base/ButtonBase";
import Link from "../base/Link";

const Navbar = ({ user }: { user?: any }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const route = usePathname();
  useEffect(() => {
    if (!toggleMenu) return;
    // document.documentElement.style.overflow = "scroll";
    document.body.style.overflow = "hidden";
    return () => {
      // document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [toggleMenu]);
  const links = (
    <>
      {/* <Link href="/upload">Upload</Link>
      <Link href="#">Product</Link> */}

      <Link href="/">Home</Link>
      <Link href="/#who-we-are">Who We Are</Link>
      <Link href="/#projects">Projects</Link>
      {/* <Link href="/donate" disabled>
        Donate
      </Link>
      <Link href="/#contact" disabled>
        Contact
      </Link> */}
      {/* <Link href="#">Careers</Link>
      <Link href="#">Community</Link> */}
    </>
  );
  return (
    <nav className="relative container  py-4 border-b ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none text-primary"
              : "block hamburger md:hidden focus:outline-none text-text"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <Menu size={20} />
          ''
        </button>
        <AppLogo />
        {/* Menu Items */}
        <div className="hidden xl:space-x-6 space-x-3 lg:space-x-6 md:flex">
          {links}
        </div>
        {/* Button */}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          onClick={() => setToggleMenu(false)}
          className={`${
            toggleMenu ? "" : "invisible"
          } fixed inset-0 bg-black/50 z-50 overflow-scroll`}
        >
          <div
            className={
              "rounded-b-md rounded-t-xs absolute top-16 flex flex-col items-stretch px-4 py-8 self-end mt-0 space-y-4 text-center bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
            style={{
              maxHeight: !toggleMenu ? 0 : "none",
              paddingTop: !toggleMenu ? 0 : undefined,
              paddingBottom: !toggleMenu ? 0 : undefined,
              zIndex: 1000,
              transition: "max-height 1s, overflow 2s step-end",
            }}
          >
            {links}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
