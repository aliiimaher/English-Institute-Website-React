import { useEffect, useState } from "react";

import "../styles/components/Button.scss";

interface Props {
  text: string;
  size?: "small" | "large";
  backgroundColor?: "yes" | "no";
  btn100Width?: "yes" | "no";
  icon?: string;
  onclick?: () => void;
  type?: "button" | "submit";
}

function Button({
  text,
  size = "small",
  backgroundColor = "yes",
  btn100Width = "no",
  icon,
  onclick,
  type = "button",
}: Props) {
  const [btnSize, setBtnSize] = useState("btn-sm");
  const [btnBackground, setBtnBackground] = useState("background-yes");
  const [btn100WidthStatus, setBtn100WidthStatus] = useState("");
  const [btnIcon, setBtnIcon] = useState("");

  useEffect(() => {
    generateBtnSize(),
      generateBtnBackground(),
      generateBtnWidth(),
      generateSpaceForBtnIcon();
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

  const generateSpaceForBtnIcon = () => {
    if (icon) {
      setBtnIcon("btn-icon-true");
    } else {
      setBtnIcon("");
    }
  };

  return (
    <>
      <button
        type={type}
        className={
          "btn btn-primary shadow my-btn " +
          btnSize +
          " " +
          btnBackground +
          " " +
          btn100WidthStatus
        }
        onClick={onclick}
      >
        {<img src={icon} className={btnIcon} />}
        {text}
      </button>
    </>
  );
}

export default Button;
