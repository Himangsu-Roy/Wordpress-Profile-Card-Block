import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

function MyToggleGroupControl() {
  return (
    <ToggleGroupControl
      label="my label"
      value="vertical"
      isBlock
      __nextHasNoMarginBottom
      __next40pxDefaultSize
    >
      <ToggleGroupControlOption value="horizontal" label="Horizontal" />
      <ToggleGroupControlOption value="vertical" label="Vertical" />
    </ToggleGroupControl>
  );
}

export default MyToggleGroupControl;
