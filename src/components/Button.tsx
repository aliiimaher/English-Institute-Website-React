import { useEffect, useState } from "react";

import "../styles/components/Button.scss";

interface Props {
  text: string;
  size?: "small" | "large";
  backgroundColor?: "yes" | "no";
  btn100Width?: "yes" | "no";
}

function Button({
  text,
  size = "small",
  backgroundColor = "yes",
  btn100Width = "no",
}: Props) {
  const [btnSize, setBtnSize] = useState("btn-sm");
  const [btnBackground, setBtnBackground] = useState("background-yes");
  const [btn100WidthStatus, setBtn100WidthStatus] = useState("");

  useEffect(() => {
    generateBtnSize(), generateBtnBackground(), generateBtnWidth();
  }, []);

  const generateBtnSize = () => {
    if (size === "large") {
      setBtnSize("btn-lg");
    } else {
      setBtnSize("btn-sm");
    }
  };

  const generateBtnBackground = () => {
    if (backgroundColor === "no") {
      setBtnBackground("background-no");
    } else {
      setBtnBackground("background-yes");
    }
  };

  const generateBtnWidth = () => {
    if (btn100Width === "yes") {
      setBtn100WidthStatus("btn-yes-100-width");
    } else {
      setBtn100WidthStatus("");
    }
  };

  return (
    <>
      <button
        type="button"
        className={
          "btn btn-primary shadow my-btn " +
          btnSize +
          " " +
          btnBackground +
          " " +
          btn100WidthStatus
        }
      >
        {text}
      </button>
    </>
  );
}

export default Button;
