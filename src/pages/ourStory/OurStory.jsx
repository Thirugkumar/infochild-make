import React from "react";
import "./OurStory.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import family from "../../assets/page-image/infonits-family-ourstory.webp";

function OurStory() {
  return (
    <>
      <div className="ourstory">
        <div className="ourstory-head primarybg">
          <img src={family} className="infonits-family-pic" />
        </div>
        <div className="ourstory-story">
          <h3 className="ourstory-sub secondary">Our story</h3>
          <h2 className="ourstory-heading primary">Journey of INFONITS</h2>
          <p className="our-real-story primary">
            <span className="story-company-links">
              <a href="https://infonits.io" target="_blank">
                Infonits (Pvt) Ltd
              </a>
            </span>
            . is one of the excellent registered company where you can get
            creative designs and developments on the digital platform. We do
            ever change decoding for customer requirements to provide the best
            solutions that fit budget and time. Our Infonits started on the 21st
            of December 2014 in the field of graphic design and development with
            the name of SS Creation design by our founder and the director{" "}
            <span className="ceo-name">Mr. S. Chandramouleesan.</span> Later on
            2022 we have changed the brand name Infonits which is providing
            graphic design and IT solutions. Our main focus is to convey the
            messages to our clients through imagery and buildup their brand's
            identity as well as to support our clients in several ways in the
            digital platform. Occasionally, a new way of organizing work leads
            to extraordinary improvements. In a recent seven-year experience in
            which we looked in depth at several projects from a range of
            sectors, including business, health care, and social services, etc.
            <br />
            <br />
            In 2016, we planned to upgrade and established SS Tech as a part of
            our company to organized seminars and awareness programs physically.
            During the pandemic situations, we collaborated with Siragugal
            amayam and did seminars, awareness programs weekly through SS learn
            hub platform. Still, we are providing our SS Tech services to
            5000-6500 students. Every year we are providing concerts for the
            student to encourage their innovative and creativity skills.
            Improvement of our company in 2017, our Infonits has launched a
            website with exclusive and professional standards. we launched a
            mobile application called G-Bot used to learn graphic designs easily
            and effectively.
            <br />
            <br />
            We are having our official main branch in Sri Lanka and having a
            sub-branch in England. Since 2020, we are the designing partners on
            IBC Tamil Germany for the “Uravin Oli” event, designing partners for
            Salesforce-Jaffna and Climathon until now. In 2021 we are one of the
            partners in the biggest platform of{" "}
            <span className="story-company-links">
              <a href="http://kodugo.com/" target="_blank">
                Kodugo.com
              </a>
            </span>
            &nbsp; and Cyber Warders Pvt. Ltd. We are one of the excellent
            technical partners at{" "}
            <span className="story-company-links">
              <a
                href="https://trailblazercommunitygroups.com/salesforce-developer-group-jaffna-sri-lanka/"
                target="_blank"
              >
                Salesforce's
              </a>
            </span>{" "}
            -{" "}
            <span className="story-company-links">
              <a href="https://yarlsfo.org/Hackforce22/" target="_blank">
                Hackforce
              </a>
            </span>
            '21 event at Jaffna in 2021.
            <br />
            <br />
            We Are All About designing and developing products and services are
            our mission and our vision is to make an evolution through advanced
            creativity and innovations. Advancement of our company in 2020,
            Infonits is registered in England. We are having 10-20 powerful team
            members with excellent project management skills. We are providing
            Internship programs for the students and encourage entrepreneurs to
            work with us. We have worked successfully with our clients in the
            fields of Graphic design, Logo design, print design, Web
            development, Digital Marketing, Software development, Social media
            marketing, Branding, and Marketing expertise which gives us the
            capabilities of building up to now. We are expertise in logo designs
            and Web Development with low cost and customer satisfaction.
            <br />
            <br />A combination of talents uniquely supports our client's needs,
            but we believe our hands-on experience and knowledge of building
            systems are the foundation for the specialized services we offer. We
            are a Creative Advertising and Web Design company in Sri Lanka. We
            empower our client's projects with maximum impact. We use a hands-on
            approach to ensure that we satisfy our clients while providing
            powerful experiences.
            <br />
            <br />
            With a skillful team behind everything we do, our creative
            capabilities are endless and unmatched. As one of the leading,
            IT-based oriented companies in Sri Lanka, and as a well-known brand
            in the globalized UK, USA, Canada and etc. Our company is driven by
            its deep passion for dedicated services all over the world.
          </p>
          <p className="story-vision primary">
            Customer satisfaction is our motive and guarantees 100% customer
            satisfaction.
          </p>
        </div>
        <div className="timeline-vertical">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Dec 21, 2014"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-paint-brush" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Sri Lanka's Best Graphic Design Company | 2014
              </h4>
              <p>
                Infonits, the best graphic design company, was founded in Sri
                Lanka.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Nov 09, 2017"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-microchip" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Upgrade and Established SS Tech | 2016{" "}
              </h4>

              <p>
                Organized seminars and awareness programs physically through SS
                Tech
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="2020"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-paint-brush" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Primary Deployment Oversea{" "}
              </h4>

              <p>
                Infonits's first-ever international deployment took place in
                England as a sub branch.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="2021"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-pencil" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Boosting Partners in Design{" "}
              </h4>
              <p>
                We are the event's design partners on IBC Tamil Germany as well
                as the Salesforce-Jaffna and Climathon design partners.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="2021"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-building" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Deployed as a Commercial Enterprises{" "}
              </h4>
              <p>
                We are one of the partners on Kodugo.com's and Cyber Warders
                Pvt. Ltd.'s largest platform.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="2022"
              iconStyle={{
                background: "#ff5319",
              }}
              icon={<i className="fa fa-arrow-right" />}
            >
              <h4 className="vertical-timeline-element-title secondary">
                Brand Identity
              </h4>
              <p>We changed the Brand name as " infonits "</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{
                background: "#003366",
              }}
              icon={<i className="fa fa-star" />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default OurStory;
