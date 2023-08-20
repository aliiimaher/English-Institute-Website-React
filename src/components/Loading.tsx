import ReactLoading from "react-loading";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
      }}
    >
      <ReactLoading type={"bars"} color={"#F27E2E"} height={100} width={100} />
    </div>
  );
}

export default Loading;