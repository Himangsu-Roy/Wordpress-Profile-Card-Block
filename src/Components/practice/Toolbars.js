import { Toolbar, ToolbarButton } from "@wordpress/components";
import { formatBold, formatItalic, link } from "@wordpress/icons";

function MyToolbars() {
  const handleButtonClick = (label) => {
    console.log(`${label} button clicked`);
  };
  return (
    <Toolbar label="Options">
      <ToolbarButton
        icon={formatBold}
        label="Bold"
        onClick={() => handleButtonClick("Bold")}
      />
      <ToolbarButton
        icon={formatItalic}
        label="Italic"
        onClick={() => handleButtonClick("Italic")}
      />
      <ToolbarButton
        icon={link}
        label="Link"
        onClick={() => handleButtonClick("Link")}
      />
    </Toolbar>
  );
}

export default MyToolbars;
