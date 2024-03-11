import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3 h-40 bg-purple-600 text-white flex justify-around">
      <div className="text-center mt-10">
        <h1>Welcome to work manager</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </div>

      <ul className="mt-10">
        <li>
          <Link href={"/"}>Facebook</Link>
        </li>
        <li>
          <Link href={"/"}>Linkedin</Link>
        </li>
        <li>
          <Link href={"/"}>Github</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
