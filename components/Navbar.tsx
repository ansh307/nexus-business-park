import React from "react";

const Navbar = () => {
  return (
    <header
      className="
        absolute top-0 left-0 w-full
        bg-transparent 
        flex items-center justify-between
        py-6 md:py-8
        px-6 md:px-12 lg:px-24
        z-30
      "
    >
      <div className="text-xl font-light tracking-wide md:text-2xl uppercase">
        Nexus
      </div>

      <nav>
        <ul className="flex text-sm sm:text-base items-center gap-6 sm:gap-8 uppercase text-white">
          <li>
            <a href="/warehouses" className="">
              Warehouses
            </a>
          </li>
          <li>
            <a href="#" className="">
              Brochure
            </a>
          </li>
          <li>
            <a href="#" className="">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
