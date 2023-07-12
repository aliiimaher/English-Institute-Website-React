import { useEffect, useState } from "react";

import "../styles/components/Button.scss";

interface Props {
  text: string;
  size?: "small" | "large";
  backgroundColor?: "yes" | "no";
}

function Button({ text, size = "small", backgroundColor = "yes" }: Props) {
  const [btnSize, setBtnSize] = useState("btn-sm");
  const [btnBackground, setBtnBackground] = useState("background-yes");

  useEffect(() => {
    generateBtnSize(), generateBtnBackground();
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

  return (
    <>
      <button
        type="button"
        className={
          "btn btn-primary shadow my-btn " + btnSize + " " + btnBackground
        }
      >
        {text}
      </button>
    </>
  );
}

export default Button;
