import { useState } from "react";
import { SelectControl } from "@wordpress/components";

const MyUsefulSelectControl = ({ label = "Select Gender", options = [] }) => {
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

export default MyUsefulSelectControl;

//? Render a user interface to select multiple users from a list.
// options={[
//         { label: "Big", value: "100%" },
//         { label: "Medium", value: "50%" },
//         { label: "Small", value: "25%" },
//       ]}

{
  /* <SelectControl
  multiple
  label={__("User")}
  value={this.state.users} // e.g: value = [ 'a', 'c' ]
  onChange={(users) => {
    this.setState({ users });
  }}
  options={[
    { value: "", label: "Select a User", disabled: true },
    { value: "a", label: "User A" },
    { value: "b", label: "User B" },
    { value: "c", label: "User c" },
  ]}
  __next40pxDefaultSize
  __nextHasNoMarginBottom
/>; */
}

//? Render a user interface to select items within groups
// const [item, setItem] = useState("");

// // ...

// <SelectControl
//   label={__("My dinosaur")}
//   value={item} // e.g: value = 'a'
//   onChange={(selection) => {
//     setItem(selection);
//   }}
//   __next40pxDefaultSize
//   __nextHasNoMarginBottom
// >
//   <optgroup label="Theropods">
//     <option value="Tyrannosaurus">Tyrannosaurus</option>
//     <option value="Velociraptor">Velociraptor</option>
//     <option value="Deinonychus">Deinonychus</option>
//   </optgroup>
//   <optgroup label="Sauropods">
//     <option value="Diplodocus">Diplodocus</option>
//     <option value="Saltasaurus">Saltasaurus</option>
//     <option value="Apatosaurus">Apatosaurus</option>
//   </optgroup>
// </SelectControl>;
