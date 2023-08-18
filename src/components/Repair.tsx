import repairSvg from "../assets/Pic/construction-amico.svg";

function Repair() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            textAlign:  "center",
            marginBottom: "20px",
          }}
        >
          در حال تعمیرات هستیم ...
          <br />
          از شکیبایی شما سپاسگزاریم.
        </div>
        <img src={repairSvg} style={{ maxWidth: "540px" }} />
      </div>
    </>
  );
}

export default Repair;
