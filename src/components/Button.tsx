import { useEffect, useState } from "react";

import "../styles/components/Button.scss";

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
        className={"btn btn-primary shadow my-btn " + btnSize}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
