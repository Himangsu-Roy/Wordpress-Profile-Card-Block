import { useState } from "react";
import { CheckboxControl } from "@wordpress/components";

const MyUsefulCheckboxControl = () => {
  const [isChecked, setChecked] = useState(true);
  return (
    <CheckboxControl
      __nextHasNoMarginBottom
      label="I agree to the defined terms, conditions, and policies"
      //   help="Is the user a author or not?"
      checked={isChecked}
      onChange={setChecked}
    />
  );
};

export default MyUsefulCheckboxControl;
