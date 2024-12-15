import { useState } from "react";
import { SelectControl } from "@wordpress/components";

const MyUserSelectControl = ({ label = "Select Gender", options = [] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]?.value || "");
  console.log(selectedOption);
  return (
    <SelectControl
      label={label}
      value={selectedOption}
      options={options}
      onChange={(gender) => setSelectedOption(gender)}
      __next40pxDefaultSize
      __nextHasNoMarginBottom
    />
  );
};

export default MyUserSelectControl;
