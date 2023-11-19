import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const WhoMenu = [
    {
      icon: <i className="fa fa-user" />,
      title: "About Us",
      path: "/about-us/",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-group" />,
      title: "Our Team",
      path: "/our-team/",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-book" />,
      title: "Our Story",
      path: "/our-story/",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {WhoMenu.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.icon}&nbsp;&nbsp;&nbsp;
                  {item.title}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
