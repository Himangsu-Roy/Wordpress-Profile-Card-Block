import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUserEmailControl = () => {
  const [email, setEmail] = useState("");

  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Email"
      value={email}
      onChange={(value) => setEmail(value)}
    />
  );
};

export default MyUserEmailControl;
