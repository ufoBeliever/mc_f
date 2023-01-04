import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../../component";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss";

export const Header = () => {
  const [openHamburger, setOpenHambuger] = useState<boolean>(false);

  const setHamburgerHandler = () => {
    setOpenHambuger((prev: boolean) => !prev);
  };

  const headerOptions = [
    { title: "About", link: "/about" },
    { title: "News", link: "/news" },
    { title: "Find us", link: "/locations" },
    { title: "Gallery", link: "/gallery" },
    { title: "Support our club", link: "/donations" },
  ];
  return (
    <>
      <header
        className="h-20
                bg-gray-900
                flex
                justify-between
                items-center
                px-4
                lg:px-8
                xl:px-14"
      >
        <Link to="/">
          <img
            src={require("../../assets/logo.png")}
            className="h-12"
            alt="logo"
          />
        </Link>
        <nav>
          <ul className="hidden xl:space-x-20 lg:space-x-14 md:space-x-10 sm:space-x-6 sm:flex">
            {headerOptions.map((el, id) => {
              return (
                <li key={id}>
                  <HeaderLink label={el.title} link={el.link} />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex sm:hidden">
          <button onClick={setHamburgerHandler}>
            {openHamburger ? (
              <AiOutlineClose color="white" size="40px" />
            ) : (
              <RxHamburgerMenu color="white" size="40px" />
            )}
          </button>
        </div>
      </header>
      <div
        className={
          "absolute w-full bg-gray-900 sm:hidden burger " +
          (openHamburger ? "burger_show" : "")
        }
      >
        <nav className="m-8">
          <ul className="flex flex-col items-center space-y-6">
            {headerOptions.map((el, id) => {
              return (
                <li
                  key={id}
                  className="space-y-6 w-full flex items-center flex-col"
                >
                  <HeaderLink label={el.title} link={el.link} mobile={true} />
                  {id === headerOptions.length - 1 ? null : (
                    <div className="h-px bg-white w-full" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
