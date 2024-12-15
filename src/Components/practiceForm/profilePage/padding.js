import React, { useState } from "react";

/**
 * WordPress dependencies
 */
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export function MyUserProfilePagePadding() {
  const [padding, setPadding] = useState();

  console.log(padding);

  const resetAll = () => {
    setPadding(undefined);
  };

  return (
    <BoxControl
      __next40pxDefaultSize
      hasValue={() => !!padding}
      label={__("Padding")}
      onDeselect={() => setPadding(undefined)}
      resetAll={resetAll}
      onChange={setPadding}
      values={padding}
      allowReset={false}
    />
  );
}

export default MyUserProfilePagePadding;
