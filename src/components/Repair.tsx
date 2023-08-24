import repairSvg from "../assets/Pic/construction-amico.svg";

import "../styles/components/Repair.scss";

function Repair() {
  return (
    <>
      <div className="repair-page-container">
        <div className="repair-page-text-container">
          در حال تعمیرات هستیم ...
          <br />
          از شکیبایی شما سپاسگزاریم.
        </div>
        <img src={repairSvg} />
      </div>
    </>
  );
}

export default Repair;
