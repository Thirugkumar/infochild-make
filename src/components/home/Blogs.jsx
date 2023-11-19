import React from "react";
import "../styles/blogs.css";
import image1 from "../../assets/images/blogcard1.webp";
import image2 from "../../assets/images/blogcard2.webp";

function Blogs() {
  return (
    <div className="blogs">
      <div className="blog-left">
        <button className="blog-btn1">BLOG & NEWS</button>
        <h2 className="blog-heading">Our Latest News</h2>
        <button className="blog-btn2">READ MORE</button>
      </div>
      <section className="blog-right">
        <div className="b-card">
          <div className="b-imgs">
            <img src={image1} alt="image_of blogs" width={340} />
            <div className="b-info">
              <button className="b-btn">Experience Sharing</button>
              <p className="info">
                The Future of Front-End Development Trends to watch in 2023
              </p>
            </div>
          </div>
        </div>
        <div className="b-card">
          <div className="b-imgs">
            <img src={image2} alt="image_of blogs" width={340} />
            <div className="b-info">
              <button className="b-btn">Experience Sharing</button>
              <p className="info">
                10 Website Accessibily Best Practice to Improve UX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
