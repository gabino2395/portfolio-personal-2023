import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" p-5 sticky top-0">
      <nav className="flex   items-center justify-between  sticky top-0 z-10 ">
        <Link to={"/"}>
          <div className="icon    ">
            <img className="h-8 sm:h-16 w-18" src="./profile.svg" alt="" />
          </div>
        </Link>
        <div className="myName border-solid bg text-1xl sm:text-3xl text-red-100 my-font">
          Gabino Mendez Acosta
        </div>
        <ul className="md:flex justify-between gap-3 nav-fonts hidden  ">
          <li className="">
            {/* <Link to={'/projects'}>Projects</Link> */}
            <a
              className="bg-red style
            "
              href="#projects-container "
            >
              Proyects
            </a>
            {/* <Link to={'/#projects-container'}>Projects</Link> */}
          </li>
          <li>
            {" "}
            <Link to={"/about"}> About</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Talks</Link>
          </li>
        </ul>
        <buton
          id="mobile-open-button"
          class="text-3xl md:hidden focus:outline-none"
        >
          &#9776;
        </buton>
      </nav>
    </header>
  );
};

export default Navbar;
