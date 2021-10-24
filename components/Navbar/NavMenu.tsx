import React, { VFC } from "react";

import { NavbarMenu } from "../../lib/types";
import NavLink from "./NavLink";

const NavMenu: VFC<NavbarMenu> = ({ title, path, items }) => {
  if (items) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <span className="navbar-link">{title}</span>

        <div className="navbar-dropdown">
          {items.map((item) => {
            return <NavLink {...item} key={item.path} />;
          })}
        </div>
      </div>
    );
  }
  if (path) {
    return <NavLink title={title} path={path} />;
  }
  throw Error("This should never happen!");
};

export default NavMenu;
