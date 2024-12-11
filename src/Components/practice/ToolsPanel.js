/**
 * External dependencies
 */
import styled from "@emotion/styled";
import React, { useState } from "react";

/**
 * WordPress dependencies
 */
import {
  BoxControl,
  __experimentalToolsPanel as ToolsPanel,
  __experimentalToolsPanelItem as ToolsPanelItem,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const PanelDescription = styled.div`
  grid-column: span 2;
`;

const SingleColumnItem = styled(ToolsPanelItem)`
  grid-column: span 1;
`;

export function DimensionPanel() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [padding, setPadding] = useState();
  const [margin, setMargin] = useState();

  console.log(height);
  console.log(width);
  console.log(padding);
  console.log(margin);

  const resetAll = () => {
    setHeight(undefined);
    setWidth(undefined);
    setPadding(undefined);
    setMargin(undefined);
  };

  return (
    <ToolsPanel label={__("Dimensions")} resetAll={resetAll}>
      <PanelDescription>
        Select dimensions or spacing related settings from the menu for
        additional controls.
      </PanelDescription>
      <SingleColumnItem
        hasValue={() => !!height}
        label={__("Height")}
        onDeselect={() => setHeight(undefined)}
        isShownByDefault
      >
        <UnitControl
          __next40pxDefaultSize
          label={__("Height")}
          onChange={setHeight}
          value={height}
        />
      </SingleColumnItem>
      <SingleColumnItem
        hasValue={() => !!width}
        label={__("Width")}
        onDeselect={() => setWidth(undefined)}
        isShownByDefault
      >
        <UnitControl
          __next40pxDefaultSize
          label={__("Width")}
          onChange={setWidth}
          value={width}
        />
      </SingleColumnItem>
      <ToolsPanelItem
        hasValue={() => !!padding}
        label={__("Padding")}
        onDeselect={() => setPadding(undefined)}
      >
        <BoxControl
          __next40pxDefaultSize
          label={__("Padding")}
          onChange={setPadding}
          values={padding}
          allowReset={false}
        />
      </ToolsPanelItem>
      <ToolsPanelItem
        hasValue={() => !!margin}
        label={__("Margin")}
        onDeselect={() => setMargin(undefined)}
      >
        <BoxControl
          __next40pxDefaultSize
          label={__("Margin")}
          onChange={setMargin}
          values={margin}
          allowReset={false}
        />
      </ToolsPanelItem>
    </ToolsPanel>
  );
}

export default DimensionPanel;
