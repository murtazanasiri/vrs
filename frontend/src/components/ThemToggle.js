import React from "react";

import Wrapper from "../assets/wrappers/ThemeToggle";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};

export default ThemToggle;
