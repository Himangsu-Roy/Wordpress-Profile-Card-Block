import { __ } from "@wordpress/i18n";
import { __experimentalGrid as Grid, PanelBody } from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import {
  useBlockProps,
  __experimentalColorGradientControl as ColorGradientControl,
} from "@wordpress/block-editor";

const Style = ({ attributes, setAttributes }) => {
  const { colors, styles } = attributes;

  const { cardBorderGradient, cardBorderColor } = styles;

  console.log(cardBorderGradient, "cardBorderGradient from style ---");
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Border", "b-blocks")}
        initialOpen={false}
      >
        <ColorGradientControl
          colorValue={cardBorderColor}
          gradientValue={cardBorderGradient}
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          gradients={[
            {
              name: "Vivid cyan blue to vivid purple",
              gradient:
                "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
              slug: "vivid-cyan-blue-to-vivid-purple",
            },
            {
              name: "Light green cyan to vivid green cyan",
              gradient:
                "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
              slug: "light-green-cyan-to-vivid-green-cyan",
            },
            {
              name: "Luminous vivid amber to luminous vivid orange",
              gradient:
                "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
              slug: "luminous-vivid-amber-to-luminous-vivid-orange",
            },
          ]}
          label={__("Choose a color or a gradient")}
          onColorChange={(newValue) => {
            console.log(newValue, "color change");
            setAttributes({ cardBorderColor: newValue });
          }}
          onGradientChange={(newValue) => {
            console.log(newValue, "gradient change");
            setAttributes({
              styles: { ...styles, cardBorderGradient: newValue },
            });
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
