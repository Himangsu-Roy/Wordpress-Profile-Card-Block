import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUserNameTextControl = () => {
  const [name, setName] = useState("");
console.log(name)
  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Name"
      value={name}
      onChange={(value) => setName(value)}
    />
  );
};

export default MyUserNameTextControl;
