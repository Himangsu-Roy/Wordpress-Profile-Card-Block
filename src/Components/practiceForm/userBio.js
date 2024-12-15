import { useState } from "react";
import { TextareaControl } from "@wordpress/components";

const MyUserBioTextareaControl = () => {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <TextareaControl
      __nextHasNoMarginBottom
      label="Bio"
      help="Enter some text"
      value={text}
      onChange={(value) => setText(value)}
    />
  );
};

export default MyUserBioTextareaControl;
