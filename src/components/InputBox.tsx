interface Props {
  placeHolder?: string;
  icon?: string;
}

function InputBox({ placeHolder, icon}: Props) {
  return (
    <>
      <div
        className="input-group mb-3 rounded"
        style={{ backgroundColor: "#3A365E", padding: "8px" }}
      >
        <input
          type="text"
          className="form-control border-0"
          placeholder={placeHolder}
          aria-label="Username"
          dir="rtl"
          style={{
            marginRight: "2px",
            backgroundColor: "#3A365E",
            color: "#EAD2B7",
            outline: "none",
            boxShadow: "none",
          }}
        />
        <img
          src={icon}
          alt="Image"
          className="rounded"
        />
      </div>
    </>
  );
}

export default InputBox;
