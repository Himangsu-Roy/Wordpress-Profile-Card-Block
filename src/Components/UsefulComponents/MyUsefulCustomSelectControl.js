import { useState } from "react";
import { CustomSelectControl } from "@wordpress/components";

const options = [
  {
    key: "small",
    name: "Small",
    style: { fontSize: "50%" },
  },
  {
    key: "normal",
    name: "Normal",
    style: { fontSize: "100%" },
  },
  {
    key: "large",
    name: "Large",
    style: { fontSize: "200%" },
  },
  {
    key: "huge",
    name: "Huge",
    style: { fontSize: "300%" },
  },
];

function MyUsefulCustomSelectControl() {
  const [fontSize, setFontSize] = useState();
  console.log(fontSize?.style?.fontSize);
  return (
    <CustomSelectControl
      __next40pxDefaultSize
      label="Font Size"
      options={options}
      onChange={({ selectedItem }) => setFontSize(selectedItem)}
    />
  );
}

function MyUsefulControlledCustomSelectControl() {
  const [fontSize, setFontSize] = useState(options[0]);
  return (
    <CustomSelectControl
      __next40pxDefaultSize
      label="Font Size"
      options={options}
      onChange={({ selectedItem }) => setFontSize(selectedItem)}
      value={options.find((option) => option.key === fontSize.key)}
    />
  );
}

// export default MyUsefulControlledCustomSelectControl;
export default MyUsefulCustomSelectControl;
