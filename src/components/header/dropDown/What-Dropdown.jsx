import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const MenuItems = [
    {
      icon: <i className="fa fa-paint-brush" />,
      title: "Graphic Design",
      path: "/service/graphic-designs",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-globe" />,
      title: "Web Development",
      path: "/service/web-development",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-microchip" />,
      title: "IOT Services",
      path: "/",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-tablet" />,
      title: "Mobile App Development",
      path: "/service/mobile-app",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-desktop" />,
      title: "Digital Marketing",
      path: "/service/digital-marketing",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-laptop" />,
      title: "Software Development",
      path: "/service/software-development",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-search" />,
      title: "Search Engine Optimization",
      path: "/service/search-engine",
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
        {MenuItems.map((item, index) => {
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
