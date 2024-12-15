import { useState } from "react";
import { CheckboxControl } from "@wordpress/components";

const MyUserAgreeWithTermsCheckboxControl = () => {
  const [isChecked, setChecked] = useState(true);
  console.log(isChecked);
  return (
    <CheckboxControl
      __nextHasNoMarginBottom
      label="Agree With Terms"
     
      checked={isChecked}
      onChange={setChecked}
    />
  );
};

export default MyUserAgreeWithTermsCheckboxControl;
