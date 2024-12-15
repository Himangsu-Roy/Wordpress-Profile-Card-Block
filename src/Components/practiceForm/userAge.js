import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import React, { useState } from "react";

const UserAgeControl = () => {
  const [value, setValue] = useState(10);
  console.log(value);

  return (
    <NumberControl
      __next40pxDefaultSize
      label="Age"
      isShiftStepEnabled={true}
      onChange={setValue}
      shiftStep={10}
      value={value}
    />
  );
};

export default UserAgeControl;
