import { __ } from "@wordpress/i18n";
import React from "react";

import {
  withNotices,
  withFocusReturn,
  withFocusOutside,
  withFallbackStyles,
  withConstrainedTabbing,
  navigateRegions,
  __experimentalSpacer as Spacer,
  __experimentalHStack as HStack,
  FormTokenField,
  FormToggle,
  FormFileUpload,
  ExternalLink,
  __experimentalElevation as Elevation,
  __experimentalSurface as Surface,
  DuotonePicker,
  DuotoneSwatch,
  Dropdown,
  DropdownMenu,
  DropZone,
  Draggable,
  Panel,
  __experimentalDivider as Divider,
  __experimentalVStack as VStack,
  Disabled,
  TextControl,
  DateTimePicker,
  Dashicon,
  __experimentalFlyout as Flyout,
  CustomSelectControl,
  __experimentalConfirmDialog as ConfirmDialog,
  __unstableComposite as Composite,
  ColorPicker,
  ColorPalette,
  ColorIndicator,
  ClipboardButton,
  CircularOptionPicker,
  CheckboxControl,
  __experimentalHeading as Heading,
  __experimentalText as Text,
  CardMedia,
  CardHeader,
  FlexBlock,
  FlexItem,
  CardFooter,
  CardBody,
  CardDivider,
  Card,
  ButtonGroup,
  BaseControl,
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  Button,
  Guide,
  TextareaControl,
  PanelRow,
} from "@wordpress/components";
import { wordpress } from "@wordpress/icons";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { useState } from "@wordpress/element";
import {
  Icon,
  more,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
} from "@wordpress/icons";
import MyComponentWithSpokenMessages from "../../../practice/skopenMessages";
// import MyModal from '../../../practice/Modal';
import MyItemGroup from "../../../practice/ItemGroup";
import MyKeyboardShortcut from "../../../practice/KeyboardShortcut";
import MyMenuGroup from "../../../practice/MyMenuGroup";
import MyMenuItem from "../../../practice/MyMenuItem";
import MyMenuItemsChoice from "../../../practice/MyMenuItemsChoice";
import MyModal from "../../../practice/MyModal";
import MyNavigableContainer from "../../../practice/MyNavigableContainer ";
import MyNavigation from "../../../practice/MyNavigation";
import MyNavigator from "../../../practice/MyNavigator";
import MyNotice from "../../../practice/MyNotice";
import MyNumberControl from "../../../practice/MyNumberControl";
import MyPanel from "../../../practice/MyPanel";
import MyPlaceholder from "../../../practice/MyPlacehoder";
import MyPopover from "../../../practice/MyPopover";
import MyLoadingComponent from "../../../practice/MyLoadingComponent";
import MyQueryControls from "../../../practice/MyQueryControls";
import MyRadioControl from "../../../practice/MyRadioControl";
import MyControlledRadioRadioGroup from "../../../practice/MyControlledRadioRadioGroup";
import MyRangeControl from "../../../practice/MyRangeControl";
import Edit from "../../../practice/ResizableBox";
import ResizeTooltip from "../../../practice/ResizeTooltip";
import MyResponsiveWrapper from "../../../practice/ResponsiveWrapper";
import MySandBox from "../../../practice/Sandbox";
import MyScrollLock from "../../../practice/ScrollLock";
import MySearchControl from "../../../practice/SearchControl";
import MySelectControl from "../../../practice/SelectControl";
import MySlotFillProvider from "../../../practice/SlotFill";
import MySnackbarNotice from "../../../practice/Snackbar";
import Example from "../../../practice/Spacer";
import MySpiner from "../../../practice/Spinner";
import MySurface from "../../../practice/Surface";
import MyTabPanel from "../../../practice/TabPanel";
import MyTextControl from "../../../practice/TextControl";
import MyTextHighlight from "../../../practice/TextHighlight";
import MyTextareaControl from "../../../practice/TextareaControl";
import MyToggleControl from "../../../practice/ToggleControl";
import MyToggleGroupControlOptionIcon from "../../../practice/ToggleGroupControlOptionIcon";
import MyToggleGroupControlOption from "../../../practice/ToggleGroupControlOption";
import MyToggleGroupControl from "../../../practice/ToggleGroupControl";
import MyToolbar from "../../../practice/ToolbarButton";
import MyToolbarDropdownMenu from "../../../practice/ToolbarDropdownMenu";
import MyToolbarGroup from "../../../practice/ToolbarGroup";
import MyToolbarItem from "../../../practice/ToolbarItem";
import MyToolbars from "../../../practice/Toolbars";
import DimensionPanel from "../../../practice/ToolsPanel";
import MyTooltip from "../../../practice/Tooltip";
import TreeMenu from "../../../practice/TreeGrid";
import MyTreeSelect from "../../../practice/TreeSelect";
import MyTruncate from "../../../practice/Truncate";
import MyUnitControl from "../../../practice/UnitControl";
import VerticalStack from "../../../practice/VStack";
import MediaUploader from "../../../practice/MediaUploadCheck";
import MyUsefulTextControl from "../../../UsefulComponents/MyUsefulTextControl";
import MyUsefulTextareaControl from "../../../UsefulComponents/MyUsefulTextareaControl";
import MyUsefulNumberControl from "../../../UsefulComponents/MyUsefulNumberControl";
import MyUsefulRangeControl from "../../../UsefulComponents/MyUsefulRangeControl";
import MyUsefulToggleControl from "../../../UsefulComponents/MyUsefulToggleControl";
import MyUsefulCustomSelectControl from "../../../UsefulComponents/MyUsefulCustomSelectControl";
import MyUsefulControlledCustomSelectControl from "../../../UsefulComponents/MyUsefulCustomSelectControl";
import MyUsefulSelectControl from "../../../UsefulComponents/MyUsefulSelectControl";

const options = [
  {
    key: "small",
    name: "Small",
    style: { fontSize: "50%" },
  },
  {
    key: "normal",
    name: "Normal",
    style: { fontSize: "100%" },
  },
  {
    key: "large",
    name: "Large",
    style: { fontSize: "200%" },
  },
  {
    key: "huge",
    name: "Huge",
    style: { fontSize: "300%" },
  },
];

const DUOTONE_PALETTE = [
  {
    colors: ["#8c00b7", "#fcff41"],
    name: "Purple and yellow",
    slug: "purple-yellow",
  },
  { colors: ["#000097", "#ff4747"], name: "Blue and red", slug: "blue-red" },
];

const COLOR_PALETTE = [
  { color: "#ff4747", name: "Red", slug: "red" },
  { color: "#fcff41", name: "Yellow", slug: "yellow" },
  { color: "#000097", name: "Blue", slug: "blue" },
  { color: "#8c00b7", name: "Purple", slug: "purple" },
];

// Form Token Field
const continents = [
  "Africa",
  "America",
  "Antarctica",
  "Asia",
  "Europe",
  "Oceania",
];

// With Constrained Tabbing
const ConstrainedTabbing = withConstrainedTabbing(({ children }) => children);

// Fallback Styles
const { getComputedStyle } = window;

// Focus Return
const EnhancedComponent = withFocusReturn(() => (
  <div>
    Focus will return to the previous input when this component is unmounted
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      autoFocus={true}
      onChange={(fr) => {
        console.log(fr);
      }}
    />
  </div>
));

const General = ({
  attributes,
  setAttributes,
  fallbackTextColor,
  fallbackBackgroundColor,
}) => {
  const { purposeType } = attributes;
  const [click, setClick] = useState(0);
  const [isChecked, setChecked] = useState(true);
  const [currentColor, setCurrentColor] = useState();
  const [hasCopied, setHasCopied] = useState(false);
  const [color, setColor] = useState("#f00");
  const [colorPic, setColorPic] = useState();
  // const [fontSize, setFontSize] = useState();
  const [fontSize, setFontSize] = useState(options[0]);
  const [date, setDate] = useState(new Date());
  const [hasDropped, setHasDropped] = useState(false);
  const [duotone, setDuotone] = useState(["#000000", "#ffffff"]);

  const [isDisabled, setIsDisabled] = useState(true);
  // Form Token Field
  const [selectedContinents, setSelectedContinents] = useState([]);

  // Form Toggle
  // const [ isChecked, setChecked ] = useState( true );
  // Guide
  // const [isOpen, setIsOpen] = useState(true);

  let input = (
    <TextControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      label="Input"
      onChange={() => {}}
    />
  );

  if (isDisabled) {
    input = <Disabled>{input}</Disabled>;
  }

  const toggleDisabled = () => {
    setIsDisabled((state) => !state);
  };

  // const colors = [
  //   { color: '#f00', name: 'Red' },
  //   { color: '#0f0', name: 'Green' },
  //   { color: '#00f', name: 'Blue' },
  // ];

  const colors = [
    { name: "red", color: "#f00" },
    { name: "white", color: "#fff" },
    { name: "blue", color: "#00f" },
  ];

  // const colorOptions = (
  //   <>
  //     {colors.map(({ color, name }, index) => {
  //       return (
  //         <CircularOptionPicker.Option
  //           key={`${color}-${index}`}
  //           tooltipText={name}
  //           style={{ backgroundColor: color, color }}
  //           isSelected={index === currentColor}
  //           onClick={() => setCurrentColor(index)}
  //           aria-label={name}
  //         />
  //       );
  //     })}
  //   </>
  // );

  const handleClick = () => {
    setClick((preCount) => preCount + 1);
    console.log("Button clicked", click + 1);
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setIsOpen(false);
  };

  // Guide
  // if (!isOpen) {
  //   return null
  // }

  // Constrained Tabbing
  const [isConstrainedTabbing, setIsConstrainedTabbing] = useState(false);
  let form = (
    <form>
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 1"
        onChange={() => {}}
      />
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 2"
        onChange={() => {}}
      />
    </form>
  );
  if (isConstrainedTabbing) {
    form = <ConstrainedTabbing>{form}</ConstrainedTabbing>;
  }

  const toggleConstrain = () => {
    setIsConstrainedTabbing((state) => !state);
  };

  //
  const MyComponentWithFocusOutside = withFocusOutside(
    class extends React.Component {
      handleFocusOutside() {
        console.log("Focus outside");
      }

      // render() {
      //   return (
      //     <div>
      //       <TextControl onChange={() => { }} />
      //       <TextControl onChange={() => { }} />
      //     </div>
      //   );
      // }
    }
  );

  console.log(MyComponentWithFocusOutside);

  // Focus Return
  const [text, setText] = useState("");
  const unmount = () => {
    document.activeElement.blur();
    setText("");
  };

  // console.log(purposeType)
  // console.log(click);
  // console.log(isChecked)
  // console.log(hasCopied)
  // console.log(color);
  // console.log(colorPic);
  // console.log(fontSize);
  // console.log(date);
  console.log(isDisabled);
  console.log(hasDropped);
  console.log(duotone);
  // Form Toggle
  console.log(isChecked);
  // Form Token Field
  console.log(selectedContinents);
  // Guide
  console.log(isOpen);
  // Contrained Tabbing
  console.log(isConstrainedTabbing);

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Purpose", "b-blocks")}
      initialOpen={false}
    >
      <PanelRow>My Panel Inputs and Labels</PanelRow>
      <MyPanel />
      <SelectControl
        label={__("Purpose", "b-blocks")}
        labelPosition="left"
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) =>
          setAttributes({ purposeType: updateData(purposeType, v) })
        }
      />
      <small className="selectHelp">
        If you want change your purpose?Then you select purpose here.
      </small>
      <InputControl
        label="InputControl"
        labelPosition="top"
        value=""
        type="email"
        isPressEnterToChange
        onChange={(nextValue) => console.log(nextValue)}
      />
      <BaseControl help="Anything you want opens on click">
        <BaseControl.VisualLabel>Author</BaseControl.VisualLabel>
        <Button isSecondary style={{ marginLeft: "8px" }}>
          Select an author
        </Button>
      </BaseControl>
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button onClick={handleClick} variant="primary">
          Button 2
        </Button>
      </ButtonGroup>
      <Button variant="secondary">Click me!</Button>
      <Card>
        <CardBody>Card...</CardBody>
      </Card>
      <Card>
        <CardBody>...</CardBody>
        <CardDivider />
        <CardBody>...</CardBody>
      </Card>
      <Card>
        <CardBody>Card Body</CardBody>
        <CardFooter>Card Footer...</CardFooter>
      </Card>
      <Card>
        <CardBody>Flex card footer</CardBody>
        <CardFooter>
          <FlexBlock>Content</FlexBlock>
          <FlexItem>
            <Button>Action</Button>
          </FlexItem>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Card Header...</CardHeader>
        <CardBody>Card Header Body...</CardBody>
      </Card>
      <Card>
        <CardMedia>
          <img src="..." />
        </CardMedia>
        <CardBody>Card Media Body...</CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading level={4}>Card Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>Card Content</Text>
        </CardBody>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
      <CheckboxControl
        __nextHasNoMarginBottom
        label="Is author"
        help="Is the user a author or not?"
        checked={isChecked}
        onChange={setChecked}
      />
      {/* <CircularOptionPicker
        options={colorOptions}
        actions={
          <CircularOptionPicker.ButtonAction
            onClick={() => setCurrentColor(undefined)}
          >
            {'Clear'}
          </CircularOptionPicker.ButtonAction>
        }
      /> */}
      <ClipboardButton
        variant="primary"
        text="Text to be copied."
        onCopy={() => setHasCopied(true)}
        onFinishCopy={() => setHasCopied(false)}
      >
        {hasCopied ? "Copied!" : "Copy Text"}
      </ClipboardButton>
      <ColorIndicator colorValue="#0073aa" />
      <ColorPalette
        colors={colors}
        value={color}
        onChange={(color) => setColor(color)}
      />
      <ColorPicker
        color={colorPic}
        onChange={setColorPic}
        enableAlpha
        defaultValue="#000"
      />
      {/* <Composite>
        <Composite.Group>
          <Composite.GroupLabel>Label</Composite.GroupLabel>
          <Composite.Item>Item 1</Composite.Item>
          <Composite.Item>Item 2</Composite.Item>
        </Composite.Group>
      </Composite> */}
      <ConfirmDialog onConfirm={() => console.debug(" Confirmed! ")}>
        Are you sure? <strong>This action cannot be undone!</strong>
      </ConfirmDialog>
      <ConfirmDialog
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        Are you sure? <strong>This action cannot be undone!</strong>
      </ConfirmDialog>
      <CustomSelectControl
        __next40pxDefaultSize
        label="Font Size"
        options={options}
        onChange={({ selectedItem }) => setFontSize(selectedItem)}
      />
      <CustomSelectControl
        __next40pxDefaultSize
        label="Font Size"
        options={options}
        onChange={({ selectedItem }) => setFontSize(selectedItem)}
        value={options.find((option) => option.key === fontSize.key)}
      />
      {/* <Flyout trigger={<Button>Show/Hide content</Button>}>
        <Text>Code is Poetry</Text>
      </Flyout> */}
      <div>
        <Dashicon icon="admin-home" />
        <Dashicon icon="products" />
        <Dashicon icon="wordpress" />
      </div>
      <DateTimePicker
        currentDate={date}
        onChange={(newDate) => setDate(newDate)}
        is12Hour={true}
      />
      <div>
        {input}
        <Button variant="primary" onClick={toggleDisabled}>
          Toggle Disabled
        </Button>
      </div>
      <VStack spacing={4}>
        <Text>Some text here</Text>
        <Divider />
        <Text>Some more text here</Text>
      </VStack>
      <div id="draggable-panel">
        <Panel header="Draggable panel">
          <PanelBody>
            <Draggable elementId="draggable-panel" transferData={{}}>
              {({ onDraggableStart, onDraggableEnd }) => (
                <div
                  className="example-drag-handle"
                  draggable
                  onDragStart={onDraggableStart}
                  onDragEnd={onDraggableEnd}
                >
                  <Icon icon={more} />
                </div>
              )}
            </Draggable>
          </PanelBody>
        </Panel>
      </div>
      <div>
        {hasDropped ? "Dropped!" : "Drop something here"}
        <DropZone
          onFilesDrop={() => setHasDropped(true)}
          onHTMLDrop={() => setHasDropped(true)}
          onDrop={() => setHasDropped(true)}
        />
      </div>
      <DropdownMenu
        icon={more}
        label="Select a direction"
        controls={[
          {
            title: "Up",
            icon: arrowUp,
            onClick: () => console.log("up"),
          },
          {
            title: "Right",
            icon: arrowRight,
            onClick: () => console.log("right"),
          },
          {
            title: "Down",
            icon: arrowDown,
            onClick: () => console.log("down"),
          },
          {
            title: "Left",
            icon: arrowLeft,
            onClick: () => console.log("left"),
          },
        ]}
      />
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        popoverProps={{ placement: "bottom-start" }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button variant="primary" onClick={onToggle} aria-expanded={isOpen}>
            Toggle Popover!
          </Button>
        )}
        renderContent={() => <div>This is the content of the popover.</div>}
      />
      <DuotonePicker
        duotonePalette={DUOTONE_PALETTE}
        colorPalette={COLOR_PALETTE}
        value={duotone}
        onChange={setDuotone}
      />
      <DuotoneSwatch values={duotone} />
      <Surface>
        <Text>Code is Poetry</Text>
        <Elevation value={5} />
      </Surface>
      <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
      {/* Form file upload */}
      <FormFileUpload
        __next40pxDefaultSize
        accept="image/*"
        onChange={(event) => console.log(event.currentTarget.files)}
      >
        Upload
      </FormFileUpload>
      <FormFileUpload
        __next40pxDefaultSize
        accept="audio/*, video/*, image/*, application/pdf"
        onChange={(event) => {
          const files = event.currentTarget.files;
          for (let i = 0; i < files.length; i++) {
            console.log(`File ${i + 1}:`, files[i].name, files[i].type);
            // Add logic to handle different file types here
          }
          console.log(event, files);
        }}
      >
        Upload
      </FormFileUpload>
      {/* Form Toggle */}
      <FormToggle
        checked={isChecked}
        onChange={() => setChecked((state) => !state)}
      />
      {/* Form Token Field */}
      <FormTokenField
        __next40pxDefaultSize
        value={selectedContinents}
        suggestions={continents}
        onChange={(tokens) => setSelectedContinents(tokens)}
        __nextHasNoMarginBottom
      />
      {/* Guide */}
      {/* <Guide
        onFinish={() => setIsOpen(false)}
        pages={[
          {
            content: <p>Welcome to the ACME Store!</p>,
          },
          {
            image: <img src="https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />,
            content: (
              <p>
                Click <i>Add to Cart</i> to buy a product.
              </p>
            ),
          },
        ]}
      /> */}
      {/* HStack */}
      <HStack>
        <Text>Code</Text>
        <Text>is</Text>
        <Text>Poetry</Text>
      </HStack>
      <HStack>
        <Text>Code</Text>
        <Spacer>
          <Text>is</Text>
        </Spacer>
        <Text>Poetry</Text>
      </HStack>
      <HStack>
        <Text>Code</Text>
        <Spacer />
        <Text>is</Text>
        <Text>Poetry</Text>
      </HStack>
      {/* Heading */}
      <Heading>Code is Poetry</Heading>;{/* Navigate Regions */}
      <div>
        <div role="region" tabIndex="-1" aria-label="Header">
          Header
        </div>
        <div role="region" tabIndex="-1" aria-label="Content">
          Content
        </div>
        <div role="region" tabIndex="-1" aria-label="Sidebar">
          Sidebar
        </div>
      </div>
      {/* Constrain  Tabbing */}
      <div>
        {form}
        <Button variant="secondary" onClick={toggleConstrain}>
          {isConstrainedTabbing ? "Disable" : "Enable"} constrain tabbing
        </Button>
      </div>
      {/* Fallback Styles */}
      <div>
        <Button variant="primary">My button</Button>
        <div>Text color: {fallbackTextColor}</div>
        <div>Background color: {fallbackBackgroundColor}</div>
      </div>
      {/* Focus Return */}
      <div>
        <TextControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          placeholder="Type something"
          value={text}
          onChange={(value) => setText(value)}
        />
        {text && <EnhancedComponent />}
        {text && (
          <Button variant="secondary" onClick={unmount}>
            Unmount
          </Button>
        )}
      </div>
      {/* Spoken Messages */}
      <MyComponentWithSpokenMessages />
      {/* Icon */}
      <Icon icon={wordpress} />
      {/* Modal */}
      {/* <MyModal /> */}
      {/* Item Group */}
      <MyItemGroup />
      {/* Keyboard Shortcuts */}
      <MyKeyboardShortcut />
      {/* Menu Group */}
      <MyMenuGroup />
      {/* Menu Item */}
      <MyMenuItem />
      {/* Menu Items Choice */}
      <MyMenuItemsChoice />
      {/* My Modal */}
      <MyModal />
      {/* Navigable Container */}
      <MyNavigableContainer />
      {/* My Navigation */}
      <MyNavigation />
      {/* My Navigator */}
      {/* <MyNavigator /> */}
      {/* My Notice */}
      <MyNotice />
      {/* My Number Control */}
      <MyNumberControl />
      {/* MY Panel */}
      <MyPanel />
      {/* My Placeholder */}
      <MyPlaceholder />
      {/* Popover */}
      <MyPopover />
      {/* Progress Bar */}
      <MyLoadingComponent />
      {/* Query Controls */}
      <MyQueryControls />
      {/* My Radio Contrl */}
      <MyRadioControl />
      {/* My Controlled Radio Group */}
      <MyControlledRadioRadioGroup />
      {/* My Range Control  */}
      <MyRangeControl />
      {/* ResizableBox */}
      {/* <Edit /> */}
      {/* Resize Tooltip */}
      {/* <ResizeTooltip /> */}
      {/* MyResponsiveWrapper */}
      <MyResponsiveWrapper />
      {/* MY Sand Box */}
      <MySandBox />
      {/* My Scroll Lock */}
      <MyScrollLock />
      {/* Search Control */}
      <MySearchControl />
      {/* Select Control */}
      <MySelectControl />
      {/* Slot fill */}
      <MySlotFillProvider />
      {/* Snack Bar Notice */}
      <MySnackbarNotice />
      {/* Spacer */}
      <Example />
      {/* Spiner */}
      <MySpiner />
      {/* Surface */}
      <MySurface />
      {/* Tab Panel */}
      <MyTabPanel />
      {/* Text Control */}
      <MyTextControl />
      {/*  Text Highlight */}
      <MyTextHighlight />
      {/* Textarea Control */}
      <MyTextareaControl />
      {/* Toggle Control */}
      <MyToggleControl />
      {/* Toggle Group Control Option Icon */}
      <MyToggleGroupControlOptionIcon />
      {/* Toggle Group Options */}
      <MyToggleGroupControlOption />
      {/* MY Toggle Group Control */}
      <MyToggleGroupControl />
      {/* My Toolbar */}
      <MyToolbar />
      {/* My Toolbar Dropdown menu */}
      <MyToolbarDropdownMenu />
      {/* My Toolbar Group */}
      <MyToolbarGroup />
      {/* Toolbar Item */}
      <MyToolbarItem />
      {/* My Toolbars */}
      <MyToolbars />
      {/* Dimension Panel */}
      <DimensionPanel />
      {/* Tooltip */}
      <MyTooltip />
      {/* Tree Grid */}
      {/* <TreeMenu /> */}
      {/* My Tree Select */}
      <MyTreeSelect />
      {/* Truncate */}
      <MyTruncate />
      {/* Unit Control */}
      <MyUnitControl />
      {/* Vertical Stack | VStack */}
      <Spacer>
        <VerticalStack />
      </Spacer>
      {/* file- MediaUpload and MediaUploadCheck */}
      <Spacer>
        <MediaUploader />
      </Spacer>
      {/* //! Most Useful Components Start */}
      <MyUsefulTextControl />
      {/* My Useful Textarea Control */}
      <MyUsefulTextareaControl />
      {/* My Useful Number Control */}
      <MyUsefulNumberControl />
      {/* My Useful Range Control */}
      <MyUsefulRangeControl />
      {/* MY Useful Toggle Control */}
      <MyUsefulToggleControl />
      {/* My Useful Custom Select Control */}
      <MyUsefulCustomSelectControl />
      {/* My Useful Controlled Custom Select Control */}
      {/* <MyUsefulControlledCustomSelectControl /> */}
      {/* My Useful Select Control */}
      <MyUsefulSelectControl />
    </PanelBody>
  );
};

export default General;
