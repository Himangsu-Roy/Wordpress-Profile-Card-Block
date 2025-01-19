import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { useState } from "@wordpress/element";
// import {
//   Icon,
//   more,
//   arrowLeft,
//   arrowRight,
//   arrowUp,
//   arrowDown,
// } from "@wordpress/icons";

const General = ({ attributes, setAttributes }) => {
  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Card", "b-blocks")}
      initialOpen={false}
    >
      
    </PanelBody>
  );
};

export default General;
