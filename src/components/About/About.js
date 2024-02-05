import React from "react";
import { stackList } from "../../data/ProjectData";
import aboutImg from "../../Assets/img1.png";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={aboutImg} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Anish Shrestha</strong> Greetings! I'm an
            avid and driven student, deeply passionate about the captivating
            world of web development, with a specific focus on React. I thrive
            on the challenges inherent in crafting responsive and dynamic user
            interfaces, finding excitement in every line of code. My journey in
            web development isn't just about acquiring knowledge; it's a quest
            for continuous growth and improvement. With a commitment to staying
            on the cutting edge of technology, I aspire to play a pivotal role
            in shaping the future of web development. Let's connect,
            collaborate, and create something extraordinary!
          </div>
          <div className="AboutBio tagline2">
            <strong>
              I have become confident using the following technologies.
            </strong>
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
