import Link from "next/link";

import styles from "./styles.module.scss";
import React from "react";

interface Props {
  isLink: boolean;
  isExternal: boolean;
  href: string;
  onClick: Function;
  text: string;
}

const defaultProps: Props = {
  isLink: false,
  isExternal: false,
  href: "",
  onClick: () => {},
  text: "Button Text",
};

function Button(props: Props) {
  const { isLink, isExternal, href, onClick, text } = props;

  let button;

  let style = styles.button;
  console.log(style);

  if (isLink) {
    button = (
      <Link className={style} href={href}>
        <a target={isExternal ? "_blank" : "_self"}>{text}</a>
      </Link>
    );
  } else {
    button = (
      <button
        className={style}
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    );
  }

  return <>{button}</>;
}

Button.defaultProps = defaultProps;

export default Button;
