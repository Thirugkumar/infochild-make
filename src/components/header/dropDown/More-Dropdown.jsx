import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const MoreMenu = [
    {
      icon: <i className="fa fa-image" />,
      title: "Gallery",
      path: "/gallery/",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-copy" />,
      title: "Blog",
      path: "/blog/",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-phone" />,
      title: "Contact",
      path: "/contact/",
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
        {MoreMenu.map((item, index) => {
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
