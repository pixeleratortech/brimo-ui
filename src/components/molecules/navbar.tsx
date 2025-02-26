"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navLink } from "@/helper/const";
import Button from "../atoms/button";
import Link from "next/link";
import FadeInFromBottom from "../animation/fadeInBottom";
import Paragraph from "../atoms/paragraph";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpenDropdownIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav
        className={`fixed w-full z-40 top-0 start-0 transition-all duration-300 bg-primary-blue ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
          <FadeInFromBottom duration={200} className="nav-logo">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/icons/brimo_logo.svg"
                width={100}
                height={100}
                className="w-[180px] lg:w-[80px]"
                alt="BRIMO MERCHANT LOGO"
              />
            </Link>
          </FadeInFromBottom>

          {/* DESKTOP NAV */}
          <ul className="lg:flex hidden p-4">
            {navLink.map((item, index) => (
              <li key={index} className="relative group">
                {!item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className="px-4 text-primary-white font-brineue-bold"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="px-4 text-primary-white font-brineue-bold flex items-center"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          openDropdownIndex === index
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                      className={`absolute left-0 mt-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 ${
                        openDropdownIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0 pointer-events-none"
                      }`}
                    >
                      {/* If there are children */}
                      {item.hasChildren ? (
                        <div className="grid grid-cols-2 gap-6 px-10 py-10 w-[800px]">
                          {item.dropdownItems.map((dropdown, dropdownIndex) => (
                            <div key={dropdownIndex}>
                              <Paragraph className="mb-2 text-primary-blue text-2xl font-brineue-bold">
                                {dropdown.title}
                              </Paragraph>
                              <ul>
                                {dropdown.link.map((linkItem, linkIndex) => (
                                  <li key={linkIndex}>
                                    <Link
                                      href={linkItem.href}
                                      className="block text-primary-blue text-sm hover:bg-gray-100 py-0.5 rounded"
                                      onClick={handleLinkClick} // Close dropdown on link click
                                    >
                                      <Paragraph fontUbuntu className="">
                                        {linkItem.name}
                                      </Paragraph>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="p-4 w-48">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link
                                  //@ts-expect-error: dropdownItem may not have href property
                                  href={dropdownItem.href}
                                  className="block text-primary-blue text-sm px-2 py-2 rounded-[20px]"
                                  onClick={handleLinkClick} // Close dropdown on link click
                                >
                                  <Paragraph fontUbuntu>
                                    {"name" in dropdownItem
                                      ? dropdownItem.name
                                      : ""}
                                  </Paragraph>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
              buttonText={"Unduh Sekarang"}
              className={
                "rounded-3xl hidden md:block text-sm px-6 py-2 font-brineue-bold text-primary-blue text-center font-jakarta bg-primary-white"
              }
            />
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-blue rounded-lg md:hidden "
              aria-controls="navbar-sticky"
              aria-expanded={isSidebarOpen}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR TOGGLE */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-primary-blue"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* MOBILE NAV */}
        <ul className="flex flex-col p-4 mt-12 space-y-4">
          {navLink.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block py-2 px-4 text-primary-blue font-brineue-bold hover:bg-primary-blue hover:text-primary-white rounded"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <Button
            buttonText={"Daftar Sekarang"}
            className={
              "rounded-2xl text-sm px-6 py-3 text-primary-white text-center font-jakarta bg-primary-blue"
            }
          />
        </ul>
      </div>

      {/* SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
