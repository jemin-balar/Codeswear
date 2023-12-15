import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Navbar = () => {
  const [iscart, setIsCart] = useState(false);

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
      <div className="cart absolute right-0 mx-5 top-4 cursor-pointer">
        <MdOutlineShoppingCart
          className="text-xl md:text-2xl"
          onClick={() => setIsCart(true)}
        />
      </div>
      {iscart && (
        <div className="sideCart h-full absolute top-0 right-0 bg-pink-200 py-10 px-8 w-72">
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            className="absolute top-5 right-2 cursor-pointer text-pink-500"
            onClick={() => setIsCart(false)}
          >
            <IoIosCloseCircle size={30} />
          </span>
          <ol className="list-decimal font-semibold">
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold overflow-auto">
                  Tshirt - wear the code
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500">
                  <AiFillMinusCircle />
                  <span className="mx-1 text-1xl">1</span>
                  <AiFillPlusCircle />
                </div>
              </div>
            </li>
          </ol>
          <div className="flex items-center justify-center">
            <button class="flex mx-auto mt-16  text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Checkout
            </button>
            <button class="flex mx-auto mt-16  text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Clearcart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
