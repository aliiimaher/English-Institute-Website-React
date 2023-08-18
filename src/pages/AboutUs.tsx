import "../styles/pages/AboutUs.scss";

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <table>
          <tr>
            <th>UI/UX</th>
            <td>
              <i>Yousof Asadi</i>
            </td>
            <td>
              <a href="https://github.com/YousofAsadi">GitHub</a>
            </td>
          </tr>
          <tr>
            <th>Front-End</th>
            <td>
              <i>Ali Maher</i>
            </td>
            <td>
              <a href="https://github.com/aliiimaher">GitHub</a>
            </td>
          </tr>
          <tr>
            <th>Back-End</th>
            <td>
              <i>Mohsen Zahmatkesh</i>
            </td>
            <td>
              <a href="https://github.com/msnzmt">GitHub</a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default AboutUs;
