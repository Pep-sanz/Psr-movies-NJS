"use client";

import { useState } from "react";
import { Button, Input } from "antd";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import MyModal from "./my-modal";
import Link from "next/link";

const navbarContent = [
  { label: "Film", href: "/movies", logo: "" },
  { label: "Tv", href: "/tv", logo: "" },
  { label: "About As", href: "/", logo: "" },
  { label: "Contact As", href: "/", logo: "" },
];

export default function MyNavbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleShowMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleChangeSearch = (e) => {
    dispatch(getSearchValue(e.target.value));
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-8 bg-cyan-950 fixed top-0 left-0 right-0 z-50">
        <div className="logo text-2xl sm:text-3xl">
          <Link href="/">
            <span>PSR</span> Movies
          </Link>
        </div>
        <ul className=" hidden md:flex justify-around items-center w-1/2 transition-all duration-300 ease-in-out ">
          {navbarContent.map((item, i) => (
            <li key={i} className="font-medium hover:text-primary-color active:text-primary-color">
              <Link href={item?.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center md:hidden">
          <Button className="button-antd text-lg" onClick={showDrawer}>
            <FaShoppingCart />
          </Button>
          <Button onClick={showModal} className="button-antd text-lg">
            <FaSearch />
          </Button>
          <MyModal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            modalBody={
              <div className="input-search">
                <Input placeholder="cari produk" prefix={<FaSearch />} onChange={handleChangeSearch} />
                <div className="w-full"></div>
              </div>
            }
          />
        </div>
      </nav>
    </>
  );
}
