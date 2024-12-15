import { useState } from "react";
import { __experimentalBorderControl as BorderControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const colors = [{ name: "Blue 20", color: "#72aee6" }];

const MyUserProfilePageBorder = () => {
  const [border, setBorder] = useState();
  console.log(border);

  return (
    <BorderControl
      __next40pxDefaultSize
      colors={colors}
      label={__("Border")}
      onChange={(value) => setBorder(value)}
      value={border}
    />
  );
};

export default MyUserProfilePageBorder;
