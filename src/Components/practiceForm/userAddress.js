import { useState } from "react";
import { TextControl } from "@wordpress/components";

const MyUserAddressTextControl = () => {
    const [address, setAddress] = useState("");
    

  return (
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      label="Address"
      value={address}
      onChange={(value) => setAddress(value)}
    />
  );
};

export default MyUserAddressTextControl;
