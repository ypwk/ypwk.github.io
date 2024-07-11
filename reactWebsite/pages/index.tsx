import TabInfo from "@/components/TabInfo";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
      <TabInfo tabName="Home" />
      <div className="row">
        <div className="one-half column project-title">
          <h1>Kevin Wu</h1>
        </div>
        <div className="one-half column project-title">
          <a href="https://www.wm.edu/" target="_blank">
            <img className="img-fit" src="images/wam-banner.png" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="one-half column">
          <p>
            Hello there! My name is Kevin Wu, and I am an undergraduate student
            at William & Mary graduating in 2024, majoring in Computer Science
            and Mathematics.
          </p>
          <p>
            Right now, my interests lie in quantum computing, machine learning,
            and optimization.
          </p>
          <p>
            In my free time, I like to play the violin with my quartet and go to
            the gym!
          </p>
        </div>
        <div className="one-half column">
          {/* <img className="img-fit" src="images/headshot.jpg" /> */}
        </div>
      </div>
    </div>
  );
}
