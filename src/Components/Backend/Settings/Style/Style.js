import { __ } from "@wordpress/i18n";
import {
  __experimentalGrid as Grid,
  __experimentalText as Text,
  GradientPicker,
  FontSizePicker,
  FocusableIframe,
  FocalPointPicker,
  Flex,
  FlexBlock,
  FlexItem,
  __experimentalDimensionControl as DimensionControl,
  ComboboxControl,
  __experimentalBoxControl as BoxControl,
  __experimentalBorderControl as BorderControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  PanelBody,
  __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
  AnglePickerControl,
  Animate,
  Notice,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const colors = [{ name: "Blue 20", color: "#72aee6" }];

const options = [
  {
    value: "small",
    label: "Small",
  },
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "large",
    label: "Large",
  },
];

// Font Size Picker
const fontSizes = [
  {
    name: __("Small"),
    slug: "small",
    size: 12,
  },
  {
    name: __("Big"),
    slug: "big",
    size: 26,
  },
];
const fallbackFontSize = 16;

const Style = () => {
  const [alignment, setAlignment] = useState("center center");
  const [angle, setAngle] = useState(0);
  const [border, setBorder] = useState();
  const [values, setValues] = useState({
    top: "50px",
    left: "10%",
    right: "10%",
    bottom: "50px",
  });

  const [fontSize, setFontSize] = useState();
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [paddingSize, setPaddingSize] = useState("");

  const defaultBorder = {
    color: "#72aee6",
    style: "dashed",
    width: "1px",
  };

  const [borders, setBorders] = useState({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });
  const onChange = (newBorders) => setBorders(newBorders);

  const [focalPoint, setFocalPoint] = useState({
    x: 0.5,
    y: 0.5,
  });

  const url =
    "https://images.unsplash.com/photo-1732058824460-d89cb7b4a38f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${url})`,
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
  };

  // Font Size Picker
  const [fontSizePic, setFontSizePic] = useState(12);
  // Gradient Picker
  const [gradient, setGradient] = useState(null);

  // console.log(fontSize)
  // console.log(paddingSize)
  // console.log(focalPoint)
  console.log(fontSizePic);
  // Gradient Picker
  console.log(gradient);

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Purpose", "b-blocks")}
        initialOpen={false}
      >
        <AlignmentMatrixControl
          value={alignment}
          onChange={(setAlignment) => console.log(setAlignment)}
        />
        <AnglePickerControl
          value={angle}
          onChange={(setAngle) => console.log(setAngle)}
        />
        <Animate type="slide-in" options={{ origin: "top" }}>
          {({ className }) => (
            <Notice className={className} status="success">
              <p>Animation finished.</p>
            </Notice>
          )}
        </Animate>
        {/* Border Box Control */}
        <BorderBoxControl
          __next40pxDefaultSize
          color={colors}
          label={__("Borders")}
          onChange={onChange}
          value={borders}
        />
        {/* Border Control */}
        <BorderControl
          __next40pxDefaultSize
          colors={colors}
          label={__("Border")}
          onChange={setBorder}
          value={border}
        />
        <BoxControl
          __next40pxDefaultSize
          values={values}
          onChange={setValues}
        />
        <ComboboxControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          label="Font Size"
          value={fontSize}
          onChange={setFontSize}
          options={filteredOptions}
          onFilterValueChange={(inputValue) =>
            setFilteredOptions(
              options.filter((option) => option.value === inputValue)
            )
          }
        />
        <DimensionControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          label={"Padding"}
          icon={"desktop"}
          onChange={(value) => setPaddingSize(value)}
          value={paddingSize}
        />
        <Flex>
          <FlexItem>
            <p>Code</p>
            {/* <p>Code</p> */}
          </FlexItem>
          <FlexBlock>
            <p>Poetry</p>
            {/* <p>Poetry</p> */}
          </FlexBlock>
        </Flex>
        <FocalPointPicker
          __nextHasNoMarginBottom
          url={url}
          value={focalPoint}
          onDragStart={setFocalPoint}
          onDrag={setFocalPoint}
          onChange={setFocalPoint}
        />
        <div style={style} />
        <FocusableIframe
          src="/my-iframe-url"
          onFocus={() => console.log("iframe is focused")}
        />
        {/* Font Size Picker */}\
        <FontSizePicker
          __next40pxDefaultSize
          fontSizes={fontSizes}
          value={fontSizePic}
          fallbackFontSize={fallbackFontSize}
          onChange={(newFontSize) => {
            setFontSizePic(newFontSize);
          }}
        />
        {/* Gradient Picker */}
        <GradientPicker
          value={gradient}
          onChange={(currentGradient) => setGradient(currentGradient)}
          gradients={[
            {
              name: "JShine",
              gradient:
                "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
              slug: "jshine",
            },
            {
              name: "Moonlit Asteroid",
              gradient:
                "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
              slug: "moonlit-asteroid",
            },
            {
              name: "Rastafarie",
              gradient:
                "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
              slug: "rastafari",
            },
          ]}
        />
        {/* Grid */}
        <Grid columns={2}>
          <Text>Code</Text>
          <Text>is</Text>
          <Text>Poetry</Text>
        </Grid>
      </PanelBody>
    </>
  );
};

export default Style;
