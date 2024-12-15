import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import React, { useState } from "react";

const UserPhoneControl = () => {
  const [value, setValue] = useState(10);
console.log(value)
  return (
    <NumberControl
      __next40pxDefaultSize
      label="Phone"
      isShiftStepEnabled={true}
      onChange={setValue}
      shiftStep={10}
      value={value}
    />
  );
};

export default UserPhoneControl;
