import PruferCodeAnimation from "@/components/PruferCode";
import TabInfo from "@/components/TabInfo";

export default function Page() {
  return (
    <div className="container">
      <TabInfo tabName="Contact" />
      <div className="proje>ct-title"></div>
      <div className="row">
        <div className="">
          <h1>Contact</h1>
          <p>Please feel free to reach out!</p>
        </div>
        <ul>
          <li>
            <u>
              <a href="https://www.linkedin.com/in/ypwk/" target="_blank">
                LinkedIn
              </a>
            </u>
          </li>
          <li>
            <u>
              <a href="https://github.com/ypwk" target="_blank">
                Github
              </a>
            </u>
          </li>
          <li>
            <u>
              <a href="mailto:ypwk@uw.edu" target="_blank">
                Email
              </a>
            </u>
          </li>
        </ul>
        <p>My phone number is the Prüfer code for the following tree:</p>
      </div>
      <PruferCodeAnimation />
    </div>
  );
}
