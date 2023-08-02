interface Props {
  placeHolder?: string;
  icon?: string;
  reactHookFrom?: any;
  }

function InputBox({ placeHolder, icon, reactHookFrom }: Props) {
  return (
    <>
      <div
        className="input-group mb-3 rounded"
        style={{ backgroundColor: "#3A365E", padding: "8px" }}
      >
        <img src={icon} alt="Image" className="rounded" />
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
          {...reactHookFrom}
          onChange={onchange}
        />
      </div>
    </>
  );
}

export default InputBox;
