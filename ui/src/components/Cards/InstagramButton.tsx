import React from "react";
import { createButton } from "react-social-login-buttons";
import { InstagramIcon } from "./InstagramIcon";

const config = {
  text: "Message",
  icon: InstagramIcon,
  iconFormat: (name: any) => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" },
};

export const InstagramButton = createButton(config);
