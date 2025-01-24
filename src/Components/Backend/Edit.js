import { useBlockProps } from "@wordpress/block-editor";
import { useState } from "react";
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
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  return (
    <>
      <Settings {...{ attributes, setAttributes, selectedSkillIndex }} />

      <div {...useBlockProps()} id={id}>
        <Style setAttributes={setAttributes} attributes={attributes} id={id} />

        <ProfileCard
          setSelectedSkillIndex={setSelectedSkillIndex}
          attributes={attributes}
          setAttributes={setAttributes}
          selectedSkillIndex={selectedSkillIndex}
        />
      </div>
    </>
  );
};
export default Edit;
