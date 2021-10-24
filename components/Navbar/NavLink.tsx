import React, { VFC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavbarLink } from "../../lib/types";
import classNames from "classnames";

const NavLink: VFC<NavbarLink> = ({ path, title }) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        className={classNames("navbar-item", {
          "has-background-light": router.asPath == path,
        })}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
