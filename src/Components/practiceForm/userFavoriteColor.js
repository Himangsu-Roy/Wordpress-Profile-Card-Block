import { useState } from "react";
import { ColorPicker } from "@wordpress/components";

function UserFavoriteColor() {
  const [color, setColor] = useState();
  console.log(color);
  return (
    <ColorPicker
      color={color}
      onChange={setColor}
      enableAlpha
      defaultValue="#000"
    />
  );
}

export default UserFavoriteColor;
