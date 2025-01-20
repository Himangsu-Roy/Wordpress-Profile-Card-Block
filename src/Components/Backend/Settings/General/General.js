import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  __experimentalInputControl as InputControl,
  Button,
  TextareaControl,
  __experimentalSpacer as Spacer,
} from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";

import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { useState } from "@wordpress/element";
// import {
//   Icon,
//   more,
//   arrowLeft,
//   arrowRight,
//   arrowUp,
//   arrowDown,
// } from "@wordpress/icons";

const General = ({ attributes, setAttributes, selectedSkillIndex }) => {
  const { bio, name, title, stats, skills, profileImage } = attributes;

  const { followers, following, projects } = stats;

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Card", "b-blocks")}
      initialOpen={false}
    >
      {/* Profile Image */}
      <InputControl
        label="Profile Image"
        labelPosition="top"
        value={profileImage?.url}
        type="url"
        onChange={(newImage) => {
          setAttributes({ profileImage: { ...profileImage, url: newImage } });
        }}
      />
      <MediaUpload
        onSelect={(newImage) => {
          setAttributes({
            profileImage: {
              ...profileImage,
              url: newImage?.sizes?.full?.url,
            },
          });
        }}
        allowedTypes={["image"]}
        value={profileImage?.url}
        render={({ open }) => (
          <Button
            variant="secondary"
            onClick={open}
            style={{
              width: "100%",
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {__("Change Profile Image", "b-blocks")}
          </Button>
        )}
      />

      <Spacer />

      {/* Profile Name */}
      <InputControl
        label="Profile Name"
        labelPosition="top"
        value={name}
        onChange={(newName) => {
          setAttributes({ name: newName });
        }}
        placeholder="Profile Name"
      />

      <Spacer />

      {/* Profile title */}
      <InputControl
        label="Profile Title"
        labelPosition="top"
        value={title}
        onChange={(newTitle) => {
          setAttributes({ title: newTitle });
        }}
        placeholder="Profile Title"
      />

      <Spacer />

      {/* Projects */}
      <InputControl
        label="Projects"
        labelPosition="top"
        value={projects}
        onChange={(newProject) => {
          setAttributes({ stats: { ...stats, projects: newProject } });
        }}
      />

      <Spacer />

      {/* Followers */}
      <InputControl
        label="Followers"
        labelPosition="top"
        value={followers}
        onChange={(newFollowers) => {
          setAttributes({ stats: { ...stats, followers: newFollowers } });
        }}
      />

      <Spacer />

      {/* Following */}
      <InputControl
        label="Following"
        labelPosition="top"
        value={following}
        onChange={(newFollowing) => {
          setAttributes({ stats: { ...stats, following: newFollowing } });
        }}
      />

      <Spacer />

      {/* Bio */}
      <TextareaControl
        label="Bio"
        labelPosition="top"
        value={bio}
        onChange={(newBio) => {
          setAttributes({ bio: newBio });
        }}
        placeholder="Write Your Bio"
      />

      <Spacer />

      {/* Skills */}
      {selectedSkillIndex !== undefined && selectedSkillIndex !== null ? (
        <InputControl
          label="Skill"
          labelPosition="top"
          value={skills[selectedSkillIndex]}
          onChange={(newSkill) => {
            const newSkills = [...skills];
            newSkills[selectedSkillIndex] = newSkill;
            setAttributes({ skills: newSkills });
          }}
          placeholder="Write Your Skills"
        />
      ) : null}

      <Spacer />

      {/* Add Skill */}
      {/* <InputControl
        label="Add Skill"
        labelPosition="top"
        value={skills[selectedSkillIndex]}
        onChange={(newSkill) => {
          if (selectedSkillIndex === undefined || selectedSkillIndex === null) {
            const newSkills = [...skills];
            newSkills.push(newSkill);
            setAttributes({ skills: newSkills });
            return;
          }

          // const newSkills = [...skills];
          // newSkills[selectedSkillIndex] = newSkill;
          // setAttributes({ skills: newSkills });
        }}
        placeholder="Add Your Skills"
      /> */}
      {/* <Button
        variant="secondary"
        onClick={() => {
          const newSkills = [...skills];
          newSkills.push("");
          setAttributes({ skills: newSkills });
        }}
      >
        {__("Add Skill", "b-blocks")}
      </Button> */}

      {/* Remove skill */}
      {/* {selectedSkillIndex !== undefined && selectedSkillIndex !== null ? (
        <Button
          variant="secondary"
          onClick={() => {
            const newSkills = [...skills];
            newSkills.splice(selectedSkillIndex, 1);
            setAttributes({ skills: newSkills });
          }}
        >
          {__("Remove Skill", "b-blocks")}
        </Button>
      ) : null} */}
    </PanelBody>
  );
};

export default General;
