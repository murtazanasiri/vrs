import React from "react";
import { NavLink } from "react-router-dom";

import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";

const NavLinks = ({ isBigSiderbar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-lins">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            className="nav-link"
            onClick={isBigSiderbar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
