import { __ } from "@wordpress/i18n";
import {
  SelectControl,
  __experimentalGrid as Grid,
  PanelBody,
  __experimentalSpacer as Spacer,
  __experimentalBoxControl as BoxControl,
  FontSizePicker,
  RangeControl,
  __experimentalDivider as Divider,
  ColorPalette,
  ColorPicker,
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import {
  useBlockProps,
  __experimentalColorGradientControl as ColorGradientControl,
} from "@wordpress/block-editor";

const Style = ({ attributes, setAttributes }) => {
  const {
    colors,
    // nameFontSize,
    // styles,
    // cardLayout,
    // nameSelectTag,
    // nameFontFamily,
    // nameFontWeight,
    // nameLetterSpacing,
    // nameLineHeight,
    // nameTextTrasform,
    // nameFontStyle,
    // titleFontFamily,
    // titleFontSize,
    // titleFontWeight,
    // titleLetterSpacing,
    // titleLineHeight,
    // titleTextTrasform,
    // titleFontStyle,
    // textColor,
    // backgroundColor,
    // alpha,
    cards,
  } = attributes;

  // const { borderRadius } = cardLayout;

  // const {
  //   textContentGradient,
  //   cardBorderGradient,
  //   cardBorderColor,
  //   avatarBorderGradient,
  // } = styles;

  // Update color function
  const updateBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  // // Update alpha (transparency) function
  const updateAlpha = (value) => {
    setAttributes({ alpha: value });
  };

  // const rgbaColor = `rgba(${parseInt(
  //   backgroundColor.slice(1, 3),
  //   16
  // )}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(
  //   backgroundColor.slice(5, 7),
  //   16
  // )}, ${alpha})`;

  // console.log(rgbaColor, "rgbaColor from style ---");

  // console.log(cardBorderGradient, "cardBorderGradient from style ---");
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Styles", "b-blocks")}
        initialOpen={true}
      >
        {cards.map((card, index) => {
          return (
            <PanelBody
              key={index}
              className="bPlPanelBody"
              title={__(`Card Style ${index + 1}`, "b-blocks")}
              initialOpen={false}
            >
              <PanelBody
                className="bPlPanelBody"
                title={__("Border Gradient", "b-blocks")}
                initialOpen={false}
              >
                <p>
                  <strong>{__("Card Border Gradient", "b-blocks")}</strong>
                </p>
                <Spacer />
                <ColorGradientControl
                  title={__("Card Border Gradient", "b-blocks")}
                  colorValue={card.styles.cardBorderColor}
                  gradientValue={card.styles.cardBorderGradient}
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
                    // const newCards = [...cards];
                    // newCards[index].styles.cardBorderColor = newValue;
                    // setAttributes({ cards: newCards });
                    // setAttributes({ cardBorderColor: newValue });
                  }}
                  onGradientChange={(newValue) => {
                    console.log(newValue, "gradient change");
                    const newCards = [...cards];
                    newCards[index].styles.cardBorderGradient = newValue;
                    setAttributes({ cards: newCards });
                    // setAttributes({
                    //   styles: { ...styles, cardBorderGradient: newValue },
                    // });
                  }}
                />

                {/* avatar border Color */}

                <p>
                  <strong>
                    {__("Profile Image Border Gradient", "b-blocks")}
                  </strong>
                </p>

                <Spacer />
                <ColorGradientControl
                  title={__("Profile Image Border Gradient", "b-blocks")}
                  colorValue={card.styles.cardBorderColor}
                  gradientValue={card.styles.avatarBorderGradient}
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
                    const newCards = [...cards];
                    newCards[index].styles.cardBorderColor = newValue;
                    setAttributes({ cards: newCards });
                    setAttributes({ cardBorderColor: newValue });
                  }}
                  onGradientChange={(newValue) => {
                    const newCards = [...cards];
                    newCards[index].styles.avatarBorderGradient = newValue;
                    setAttributes({ cards: newCards });
                  }}
                />
              </PanelBody>

              <PanelBody
                className="bPlPanelBody"
                title={__("Text Content Gradient", "b-blocks")}
                initialOpen={false}
              >
                <p>
                  <strong>{__("Text Content Gradient", "b-blocks")}</strong>
                </p>
                <Spacer />
                <ColorGradientControl
                  colorValue={card.styles.cardBorderColor}
                  gradientValue={card.styles.textContentGradient}
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
                    const newCards = [...cards];
                    newCards[index].styles.cardBorderColor = newValue;
                    setAttributes({ cards: newCards });
                    setAttributes({ cardBorderColor: newValue });
                  }}
                  onGradientChange={(newValue) => {
                    const newCards = [...cards];
                    newCards[index].styles.textContentGradient = newValue;
                    setAttributes({ cards: newCards });
                  }}
                />
              </PanelBody>

              <PanelBody
                className="bPlPanelBody"
                title={__("Profile Layout", "b-blocks")}
                initialOpen={false}
              >
                <BoxControl
                  label={__("Border Radius", "b-blocks")}
                  values={card.cardLayout.borderRadius}
                  onChange={(newValue) =>
                    setAttributes({ borderRadius: newValue })
                  }
                />

                <Spacer />

                {/* Backgroud Color  */}
                <p> {__("Background Color", "b-blocks")}</p>
                <ColorPicker
                  color={card.backgroundColor}
                  onChange={(color) => {
                    const newCards = [...cards];
                    newCards[index].backgroundColor = color;
                    setAttributes({ cards: newCards });
                  }}
                />
                <RangeControl
                  label="Opacity"
                  value={card.alpha}
                  onChange={(value) => {
                    const newCards = [...cards];
                    newCards[index].alpha = value;
                    setAttributes({ cards: newCards });
                  }}
                  min={0}
                  max={1}
                  step={0.01}
                />
              </PanelBody>

              <PanelBody
                className="bPlPanelBody"
                title={__("Typography", "b-blocks")}
                initialOpen={false}
              >
                <p>
                  <strong>{__("Name Font Style", "b-blocks")}</strong>
                </p>
                <Spacer />
                {/* Name Tag Control */}
                <SelectControl
                  label={__("Select Name Tag", "b-blocks")}
                  value={card.nameSelectTag}
                  options={[
                    { label: "H1", value: "h1" },
                    { label: "H2", value: "h2" },
                    { label: "H3", value: "h3" },
                    { label: "H4", value: "h4" },
                    { label: "H5", value: "h5" },
                    { label: "H6", value: "h6" },
                  ]}
                  onChange={(newHeading) =>
                    setAttributes({ nameSelectTag: newHeading })
                  }
                />

                {/* Font Family Control */}
                <SelectControl
                  label={__("Font Family", "text-domain")}
                  value={card.nameFontFamily}
                  options={[
                    { label: "Arial", value: "Arial, sans-serif" },
                    { label: "Georgia", value: "Georgia, serif" },
                    {
                      label: "Times New Roman",
                      value: '"Times New Roman", serif',
                    },
                    { label: "Courier New", value: '"Courier New", monospace' },
                  ]}
                  onChange={(newFamily) =>
                    setAttributes({ nameFontFamily: newFamily })
                  }
                />

                {/* Font Size Control */}
                <p>{__("Font Size", "b-blocks")}</p>
                <FontSizePicker
                  label={__("Font Size", "b-blocks")}
                  value={card.nameFontSize}
                  onChange={(newSize) =>
                    setAttributes({ nameFontSize: newSize })
                  }
                />

                {/* Title Font Weight */}
                <SelectControl
                  label={__("Font Weight", "b-blocks")}
                  value={card.nameFontWeight}
                  options={[
                    { label: "Normal", value: "normal" },
                    { label: "Bold", value: "bold" },
                    { label: "Light", value: "300" },
                    { label: "Extra Bold", value: "900" },
                  ]}
                  onChange={(newNameFontWeight) => {
                    setAttributes({ nameFontWeight: newNameFontWeight });
                  }}
                />

                <RangeControl
                  label="Letter Spacing"
                  value={card.nameLetterSpacing}
                  min={0}
                  max={10}
                  step={0.1}
                  onChange={(value) =>
                    setAttributes({ nameLetterSpacing: value })
                  }
                />

                <RangeControl
                  label="Line Height"
                  value={card.nameLineHeight}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(value) => setAttributes({ nameLineHeight: value })}
                />

                {/* Name Text Transform */}
                <SelectControl
                  label={__("Text Transform", "b-blocks")}
                  value={card.nameTextTrasform}
                  options={[
                    { label: "None", value: "none" },
                    { label: "Uppercase", value: "uppercase" },
                    { label: "Lowercase", value: "lowercase" },
                    { label: "Capitalize", value: "capitalize" },
                  ]}
                  onChange={(newTextTransform) => {
                    setAttributes({ nameTextTrasform: newTextTransform });
                  }}
                />
                {/* Name Font Style */}
                <SelectControl
                  label={__("Font Style", "b-blocks")}
                  value={card.nameFontStyle}
                  options={[
                    { label: "Normal", value: "normal" },
                    { label: "Italic", value: "italic" },
                    { label: "Oblique", value: "oblique" },
                  ]}
                  onChange={(newNameFontStyle) => {
                    setAttributes({ nameFontStyle: newNameFontStyle });
                  }}
                />

                <Divider />

                <p>
                  <strong>{__("Title Font Style", "b-blocks")}</strong>
                </p>
                <Spacer />

                {/* Title Tag Control */}
                {/* Title Font Family Control */}
                <SelectControl
                  label={__("Font Family", "text-domain")}
                  value={card.titleFontFamily}
                  options={[
                    { label: "Arial", value: "Arial, sans-serif" },
                    { label: "Georgia", value: "Georgia, serif" },
                    {
                      label: "Times New Roman",
                      value: '"Times New Roman", serif',
                    },
                    { label: "Courier New", value: '"Courier New", monospace' },
                  ]}
                  onChange={(newFamily) =>
                    setAttributes({ titleFontFamily: newFamily })
                  }
                />

                {/* Title Font Size Control */}
                <p>{__("Font Size", "b-blocks")}</p>
                <FontSizePicker
                  label={__("Font Size", "b-blocks")}
                  value={card.titleFontSize}
                  onChange={(newSize) =>
                    setAttributes({ titleFontSize: newSize })
                  }
                />

                {/* Title Font Weight */}
                <SelectControl
                  label={__("Font Weight", "b-blocks")}
                  value={card.titleFontWeight}
                  options={[
                    { label: "Normal", value: "normal" },
                    { label: "Bold", value: "bold" },
                    { label: "Light", value: "300" },
                    { label: "Extra Bold", value: "900" },
                  ]}
                  onChange={(newTitleFontWeight) => {
                    setAttributes({ titleFontWeight: newTitleFontWeight });
                  }}
                />

                {/* title letter spacing */}
                <RangeControl
                  label="Letter Spacing"
                  value={card.titleLetterSpacing}
                  min={0}
                  max={10}
                  step={0.1}
                  onChange={(value) =>
                    setAttributes({ titleLetterSpacing: value })
                  }
                />

                {/* title line height */}
                <RangeControl
                  label="Line Height"
                  value={card.titleLineHeight}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(value) =>
                    setAttributes({ titleLineHeight: value })
                  }
                />

                {/* Title Text Transform */}
                <SelectControl
                  label={__("Text Transform", "b-blocks")}
                  value={card.titleTextTrasform}
                  options={[
                    { label: "None", value: "none" },
                    { label: "Uppercase", value: "uppercase" },
                    { label: "Lowercase", value: "lowercase" },
                    { label: "Capitalize", value: "capitalize" },
                  ]}
                  onChange={(newTextTransform) => {
                    setAttributes({ titleTextTrasform: newTextTransform });
                  }}
                />
                {/* Title Font Style */}
                <SelectControl
                  label={__("Font Style", "b-blocks")}
                  value={card.titleFontStyle}
                  options={[
                    { label: "Normal", value: "normal" },
                    { label: "Italic", value: "italic" },
                    { label: "Oblique", value: "oblique" },
                  ]}
                  onChange={(newTitleFontStyle) => {
                    setAttributes({ titleFontStyle: newTitleFontStyle });
                  }}
                />

                <Spacer />

                <Divider />

                {/* Font Color */}
                <p>
                  <strong>{__("Text Color", "b-blocks")}</strong>
                </p>
                <ColorPalette
                  title={__("Text Color", "b-blocks")}
                  value={card.textColor}
                  onChange={(value) => setAttributes({ textColor: value })}
                />
              </PanelBody>
            </PanelBody>
          );
        })}
      </PanelBody>
    </>
  );
};

export default Style;
