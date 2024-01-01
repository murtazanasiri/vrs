import React from "react";

import { FaWpforms } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";

const links = [
  {
    text: "all request",
    path: ".",
    icon: <MdQueryStats />,
  },
  {
    text: "new request",
    path: "new-request",
    icon: <FaWpforms />,
  },
];

export default links;
