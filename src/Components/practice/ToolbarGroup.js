import { Toolbar, ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { paragraph, formatBold, formatItalic, link } from "@wordpress/icons";

function MyToolbarGroup() {
  const handleButtonClick = (label) => {
    console.log(`${label} button clicked`);
  };

  return (
    <Toolbar label="Options">
      <ToolbarGroup>
        <ToolbarButton
          icon={paragraph}
          label="Paragraph"
          onClick={() => handleButtonClick("Paragraph")}
        />
      </ToolbarGroup>
      <ToolbarGroup>
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
      </ToolbarGroup>
    </Toolbar>
  );
}       

export default MyToolbarGroup;
