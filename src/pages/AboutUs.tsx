import "../styles/pages/AboutUs.scss";

import usofImg from "../assets/Pic/Personel/usof.png";
import aliImg from "../assets/Pic/Personel/1675021540592.jfif";
import msnImg from "../assets/Pic/Personel/81595622.jfif";

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <table>
          <tr>
            <th>UI/UX</th>
            <td>
              <img src={usofImg} alt="" />
              <i>Yousof Asadi</i>
            </td>
            <td className="personal-github">
              <a href="https://github.com/YousofAsadi">GitHub</a>
            </td>
          </tr>
          <tr>
            <th>Front-End</th>
            <td>
              <img src={aliImg} alt="" />
              <i>Ali Maher</i>
            </td>
            <td className="personal-github">
              <a href="https://github.com/aliiimaher">GitHub</a>
            </td>
          </tr>
          <tr>
            <th>Back-End</th>
            <td>
              <img src={msnImg} alt="" />
              <i>Mohsen Zahmatkesh</i>
            </td>
            <td className="personal-github">
              <a href="https://github.com/msnzmt">GitHub</a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default AboutUs;
