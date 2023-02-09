import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../../components";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss";
import { setHidden } from "../../utils";

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
                bg-primarydark
                flex
                justify-between
                items-center
                px-4
                lg:px-8
                xl:px-14"
      >
        <Link to="/">
          <div className="flex items-center">
            <img
              onClick={() => setOpenHambuger(false)}
              src={require("../../assets/logo.png")}
              className="h-16"
              alt=""
            />
            <span className="text-secondarydark font-semibold text-xl uppercase">
              Never stop
            </span>
          </div>
        </Link>
        <nav>
          <ul className="hidden xl:space-x-20 lg:space-x-14 md:space-x-10 lg:space-x-6 lg:flex">
            {headerOptions.map(({ title, link }, id) => {
              return (
                <li key={id}>
                  <HeaderLink label={title} link={link} />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex lg:hidden">
          <button
            onClick={() => {
              setHamburgerHandler();
              setHidden();
            }}
          >
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
          "absolute w-full bg-primarydark lg:hidden burger mt-20 z-50 " +
          (openHamburger ? "burger_show" : "")
        }
      >
        <nav className="m-8">
          <ul className="flex flex-col items-center space-y-6">
            {headerOptions.map(({ title, link }, id) => {
              return (
                <li
                  key={id}
                  className="space-y-6 w-full flex items-center flex-col"
                >
                  <HeaderLink
                    label={title}
                    link={link}
                    mobile={true}
                    onClick={() => setOpenHambuger(false)}
                  />
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
