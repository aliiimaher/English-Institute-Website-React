import "../styles/pages/AboutUs.scss";

import usofImg from "../assets/Pic/Personel/usof.png";
import aliImg from "../assets/Pic/Personel/1675021540592.jfif";
import msnImg from "../assets/Pic/Personel/81595622.jfif";

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-person">
          <img src={usofImg} alt="" />
          <div>
            <a href="https://github.com/YousofAsadi">
              <i>Yousof Asadi</i>
            </a>
          </div>
          UI/UX
        </div>
        <div className="about-us-person">
          <img src={aliImg} alt="" />
          <div>
            <a href="https://github.com/aliiimaher">
              <i>Ali Maher</i>
            </a>
          </div>
          Front-End
        </div>
        <div className="about-us-person">
          <img src={msnImg} alt="" />
          <div>
            <a href="https://github.com/msnzmt">
              <i>Mohsen Zahmatkesh</i>
            </a>
          </div>
          Back-End
        </div>
      </div>
    </>
  );
}

export default AboutUs;
