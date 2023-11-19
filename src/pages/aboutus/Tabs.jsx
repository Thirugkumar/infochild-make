import React, { useState } from "react";
import "./Tabs.css";
import { motion } from "framer-motion";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Our Vision",
      title: "We are all about designing and developing products and services",
      content1: "Easily accessible navigation",
      content2: "Coordinating color scheme",
      content3: "impressive user interaction",
    },
    {
      id: 2,
      tabTitle: "Our Mision",
      title:
        "To make an evolution through advanced creativity and innovations.",
      content1: "Target Market Share",
      content2: "Financial Management Share",
      content3: "Profit Margine",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            className="tabs-btn"
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content primary">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <motion.div
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                <p className="title">{tab.title}</p>
                <ul>
                  <li>{tab.content1}</li>
                  <li>{tab.content2}</li>
                  <li>{tab.content3}</li>
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
