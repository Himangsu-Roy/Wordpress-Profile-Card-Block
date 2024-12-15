import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUserPasswordControl = () => {
  const [password, setPassword] = useState("");
console.log(password)
  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Password"
      value={password}
      onChange={(value) => setPassword(value)}
    />
  );
};

export default MyUserPasswordControl;
