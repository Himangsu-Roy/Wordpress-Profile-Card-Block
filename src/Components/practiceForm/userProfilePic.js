import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUserProfilePicControl = () => {
  const [profilePic, setProfilePic] = useState("");
  console.log(profilePic);
  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Profile Picture"
      value={profilePic}
      onChange={(value) => setProfilePic(value)}
    />
  );
};

export default MyUserProfilePicControl;
