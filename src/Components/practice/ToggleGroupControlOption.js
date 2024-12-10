import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

function MyToggleGroupControlOption() {
  return (
    <ToggleGroupControl
      label="my label"
      value="vertical"
      isBlock
      __nextHasNoMarginBottom
      __next40pxDefaultSize
    >
      <ToggleGroupControlOption
        value="horizontal"
        label="Horizontal"
        showTooltip={true}
        onChange={(value) => console.log(value)}
      />
      <ToggleGroupControlOption value="vertical" label="Vertical" />
    </ToggleGroupControl>
  );
}

export default MyToggleGroupControlOption;
