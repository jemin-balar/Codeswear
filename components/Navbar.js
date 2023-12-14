import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt=""
            width={200}
            height={20}
            className="mx-5"
          />
        </Link>
      </div>
      <div className="nav py-2">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"} legacyBehavior>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"} legacyBehavior>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/stickers"} legacyBehavior>
            <a>
              <li>Sticker</li>
            </a>
          </Link>
          <Link href={"/mugs"} legacyBehavior>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-4">
        <MdOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
