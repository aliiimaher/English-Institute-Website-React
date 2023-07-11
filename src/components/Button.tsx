import { useEffect, useState } from "react";

interface Props {
  text: string;
  size?: "small" | "large";
}

function Button({ text, size = "small" }: Props) {
  const [btnSize, setBtnSize] = useState("btn-sm");

  useEffect(() => {
    generateBtnSize();
  }, []);

  const generateBtnSize = () => {
    if (size === "large") {
      setBtnSize("btn-lg");
    } else {
      setBtnSize("btn-sm");
    }
  };

  return (
    <>
      <button
        type="button"
        className={"btn btn-primary border-0 " + btnSize}
        style={{ backgroundColor: "#F27E2E", color: "#1C1A2D" }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
