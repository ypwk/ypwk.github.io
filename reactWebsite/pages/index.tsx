import TabInfo from "@/components/TabInfo";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
      <TabInfo tabName="Home" />
      <div className="row">
        <div className="one-half column project-title">
          <h1>Kevin Yipu Wu</h1>
        </div>
        <div className="one-half column project-title">
          <a href="https://www.wm.edu/" target="_blank">
            <img className="img-fit" src="images/uw-banner.png" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="one-half column">
          <p>
            My name is Kevin Wu, and I am a second year doctoral
            student at the University of Washington in the Electrical and
            Computer Engineering department.
          </p>
          <p>
            Right now, my interests lie in neutral atom quantum computing,
            quantum error correction, and machine learning.
          </p>
          <p>In my free time, I like to scull or sweep on Seattle&apos;s waterways and lakes and go to the gym!</p>
        </div>
        <div className="one-half column">
          <img className="img-fit" src="images/headshot.jpg" />
        </div>
      </div>
    </div>
  );
}
