import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GalleryData } from "./GalleryData";
const Gallery = () => {
  const [items, setItems] = useState(GalleryData);
  const filterItem = (categItem) => {
    const updateItems = GalleryData.filter((curg_pic) => {
      return curg_pic.title === categItem;
    });

    setItems(updateItems);
  };

  return (
    <>
      <div className="filterItems">
        <ul className="items-btns">
          <li className="nav-item">
            <button href="" onClick={() => setItems(GalleryData)}>
              All
            </button>
          </li>
          <li className="nav-item">
            <button href="" onClick={() => filterItem("logo")}>
              logo
            </button>
          </li>
          <li className="nav-item">
            <button href="" onClick={() => filterItem("graphic_design")}>
              graphic design
            </button>
          </li>
          <li className="nav-item">
            <button href="" onClick={() => filterItem("web_development")}>
              web development
            </button>
          </li>
          <li className="nav-item">
            <button href="" onClick={() => filterItem("case_study")}>
              case study
            </button>
          </li>
          <li className="nav-item">
            <button href="" onClick={() => filterItem("event")}>
              event
            </button>
          </li>
        </ul>
      </div>
      <div className="gallery-main">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}
        >
          <Masonry>
            {items.map((g_pic) => {
              const { name, image } = g_pic;

              return (
                <div class="galleryItem">
                  <img src={image} alt={name} />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
