import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ProfileCard from "../ProfileCard/ProfileCard";
import { prefix } from "../../utils/data";
// import {
//   __experimentalSpacer as Spacer,
//   Flex,
//   FlexItem,
//   FlexBlock,
//   ExternalLink,
// } from "@wordpress/components";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;
  const id = `${prefix}-${clientId}`;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={id}>
        <Style attributes={attributes} id={id} />

        <ProfileCard attribute={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};
export default Edit;
