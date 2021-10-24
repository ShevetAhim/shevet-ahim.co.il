import React, { useState, VFC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { nextImageProps } from "../../lib/imageUtils";
import navbarData from "../../content/_meta/navbar.json";
import { Navbar } from "../../lib/types";
import NavMenu from "./NavMenu";
import style from "./Navbar.module.scss";

const NavBar: VFC = () => {
  const [isActive, setActive] = useState(false);

  const accommodations = [
    { title: "White Khan", category: "accommodations", slug: "white-khan" },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href="/" passHref>
            <Image {...nextImageProps("logo.png", 84, 30)} alt="Logo" />
          </Link>
        </div>

        <span
          role="button"
          className={classNames("navbar-burger", isActive && "is-active")}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            setActive(!isActive);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div className={classNames("navbar-menu", isActive && "is-active")}>
        <div className="navbar-start">
          {(navbarData as Navbar).map((item) => {
            return <NavMenu {...item} key={item.title} />;
          })}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className={style.faLink}
                href="https://www.facebook.com/ShevetAhim/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size="2em" />
              </a>
              <a
                className={style.faLink}
                href="https://www.instagram.com/galilee_bedouin_camplodge/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size="2em" />
              </a>
              <a
                className="button"
                href="https://galilee-bedouin-camplodge.com"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
