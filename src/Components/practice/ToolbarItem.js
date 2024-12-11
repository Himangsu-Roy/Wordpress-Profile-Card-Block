// import { Toolbar, ToolbarItem, Button } from "@wordpress/components";

// function MyToolbarItem() {
//   return (
//     <Toolbar label="Options">
//       <ToolbarItem as={Button}>I am a toolbar button</ToolbarItem>
//       <ToolbarItem as="button">I am another toolbar button</ToolbarItem>
//     </Toolbar>
//   );
// }

// export default MyToolbarItem;

import { Toolbar, ToolbarItem, DropdownMenu } from "@wordpress/components";
import { table } from "@wordpress/icons";

function MyToolbarItem() {
  return (
    <Toolbar label="Options">
      <ToolbarItem>
        {(toolbarItemHTMLProps) => (
          <DropdownMenu
            icon={table}
            toggleProps={toolbarItemHTMLProps}
            label={"Edit table"}
            controls={[]}
          />
        )}
      </ToolbarItem>
    </Toolbar>
  );
}

export default MyToolbarItem;
