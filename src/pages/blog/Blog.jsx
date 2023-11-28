import React from "react";
import "./Blog.css";
import data from "../blog/data";

function Blog() {
  return (
    <section className="blogs">
      <div className="blogs-head">
        <h2 className="blogs-head-heading">
          We love to make some incredible, entertaining content by sharing our
          experiences and the lessons we have learned.
        </h2>
      </div>
      <div className="blogs-head-down">
        <h3 className="blog-head-down-sub secondary">blog & news</h3>
        <h1 className="blog-head-down-heading primary">Our Latest News</h1>
        <p className="blog-head-down-p primary">
          Wherever we go, community is created when we establis social bonds
          within the context of shared experience.
        </p>
      </div>
      <div className="blogs-cards">
        {data.map((item) => {
          return (
            <div className="blog-cd">
              <div className="blog-img">
                <img src={item.image} alt="" />
              </div>
              <div className="blog-cd-btn secondary">
                <button className="secondary">{item.btn}</button>
              </div>
              {item.category}
              <div className="blog-cd-details">
                <div className="event-date">
                  <i className="fa fa-calendar secondary" /> {item.date}
                </div>
                <div className="event-by">
                  <i className="fa fa-user secondary" /> By{" "}
                  <a href="">{item.user}</a>
                </div>
              </div>
              <div className="blog-cd-heading primary">
                <h1>{item.heading}</h1>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </section>
  );
}

export default Blog;
