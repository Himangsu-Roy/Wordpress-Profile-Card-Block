import { __ } from "@wordpress/i18n";
import { __experimentalGrid as Grid, PanelBody } from "@wordpress/components";

const Style = ({attribute, setAttribute}) => {
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Purpose", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody>
    </>
  );
};

export default Style;
