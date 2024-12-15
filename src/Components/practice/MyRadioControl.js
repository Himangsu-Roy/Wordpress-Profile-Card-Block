import { RadioControl } from "@wordpress/components";
import { useState } from "react";

const MyRadioControl = () => {
  const [option, setOption] = useState("a");

  console.log(option);

  return (
    <RadioControl
      label="User type"
      help="The type of the current user"
      selected={option}
      options={[
        { label: "Author", value: "a" },
        { label: "Editor", value: "e" },
      ]}
      onChange={(value) => setOption(value)}
    />
  );
};

export default MyRadioControl;
