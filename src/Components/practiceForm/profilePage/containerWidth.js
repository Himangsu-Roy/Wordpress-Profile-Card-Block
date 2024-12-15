/**
 * External dependencies
 */
import styled from "@emotion/styled";
import React, { useState } from "react";

/**
 * WordPress dependencies
 */
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const PanelDescription = styled.div`
  grid-column: span 2;
`;

export function MyUserProfilePageContainerWidth() {
  const [width, setWidth] = useState();

  console.log(width);
  const resetAll = () => {
    setWidth(undefined);
  };

  return (
    <UnitControl
      __next40pxDefaultSize
      hasValue={() => !!width}
      label={__("Container Width")}
      onDeselect={() => setWidth(undefined)}
      isShownByDefault
      resetAll={resetAll}
      onChange={setWidth}
      value={width}
    />
  );
}

export default MyUserProfilePageContainerWidth;
