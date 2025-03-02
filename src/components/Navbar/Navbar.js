"use client";

import Link from "next/link";
import "./Navbar.css";
import Applogo from "../Applogo/Applogo";

import { TbMenu4 } from "react-icons/tb";
import { GiCrossedBones } from "react-icons/gi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  useEffect(() => {}, []);
  return (
    <div>
      <Applogo />
      <button
        onClick={() => {
          setMenu(!menu);
        }}
        className="Menu_Button lg:hidden flex"
      >
        {menu ? <TbMenu4 /> : <GiCrossedBones />}
      </button>
      {!menu ? (
        <div className="Small_Display_Menu flex lg:hidden">
          <Link className="Navbar_Buttons" href={"/"}>
            Home
          </Link>

          <Link className="Navbar_Buttons" href={"/chief"}>
            chief
          </Link>
          <Link className="Navbar_Buttons" href={"/menu"}>
            Menu
          </Link>
          <Link className="Navbar_Buttons" href={"/login"}>
            Sign in
          </Link>
          <Link className="Navbar_Buttons" href={"/register"}>
            Sign Up
          </Link>
        </div>
      ) : null}

      <div className="Big_Display_Menu lg:flex hidden">
        <Link className="Navbar_Buttons" href={"/"}>
          Home
        </Link>
        <Link className="Navbar_Buttons" href={"/chief"}>
          Chief
        </Link>
        <Link className="Navbar_Buttons" href={"/menu"}>
          Menu
        </Link>{" "}
        <Link className="Navbar_Buttons" href={"/login"}>
          Sign in
        </Link>
        <Link className="Navbar_Buttons" href={"/register"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
