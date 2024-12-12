import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUsefulTextControl = ({ label, placeholder, type }) => {
  const [className, setClassName] = useState("");
  console.log(className);
  console.log(label);

  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label={label}
      value={className}
      placeholder={placeholder}
      type={type}
      onChange={(value) => setClassName(value)}
    />
  );
};

export default MyUsefulTextControl;
