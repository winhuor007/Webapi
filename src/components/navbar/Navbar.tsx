"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState([
    {
      name: "Home",
      path: "/",
      active: false,
    },
    {
      name: "About",
      path: "/about",
      active: true,
    },
    {
      name: "Blog",
      path: "/blog",
      active: false,
    },
    {
      name: "Service",
      path: "about/service",
      active: false,
    },
    {
      name: "Data-server component",
      path: "/data-server",
      active: true,
    },
    {
      name: "Data-client component",
      path: "/data-client",
      active: true,
    },
  ]);

  return (
    <div className=" flex ">
      <div> {/* <h1>Navbar</h1> */}</div>
      <div>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            display: inline;
            margin-right: 20px;
          }
          .active {
            font-weight: bold;
            text-decoration: underline;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Navbar;
