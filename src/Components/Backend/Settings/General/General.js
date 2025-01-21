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
  const {
    bio,
    message,
    follow,
    statLabel,
    name,
    title,
    stats,
    skills,
    profileImage,
    cards,
  } = attributes;

  console.log(cards, "cards");

  const { followers, following, projects } = stats;
  const {
    projects: changeProjects,
    followers: changeFollowers,
    following: changeFollowing,
  } = statLabel;
  const { text: messageText, link: messageLink } = message;
  const { text: followText, link: followLink } = follow;

  const handleSkillChange = (newSkill) => {
    // Avoid empty skills
    if (newSkill.trim() === "") return;

    const newSkills = [...skills];

    // Add new skill or update existing skill
    if (selectedSkillIndex != null) {
      newSkills[selectedSkillIndex] = newSkill; // Update skill at selected index
    } else {
      newSkills.push(newSkill); // Add new skill
    }

    setAttributes({ skills: newSkills });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Cards", "b-blocks")}
        initialOpen={true}
      >
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
              setAttributes({
                profileImage: { ...profileImage, url: newImage },
              });
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
            value={changeProjects}
            onChange={(newProject) => {
              setAttributes({
                statLabel: { ...statLabel, projects: newProject },
              });
            }}
          />
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
            value={changeFollowers}
            onChange={(newFollower) => {
              setAttributes({
                statLabel: { ...statLabel, followers: newFollower },
              });
            }}
          />
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
            value={changeFollowing}
            onChange={(newFollowing) => {
              setAttributes({
                statLabel: { ...statLabel, following: newFollowing },
              });
            }}
          />
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
          <InputControl
            label="Add Skill"
            labelPosition="top"
            value={skills[selectedSkillIndex]}
            onChange={(newSkill) => {
              if (
                selectedSkillIndex === undefined ||
                selectedSkillIndex === null
              ) {
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
          />

          <InputControl
            label="Add Skill"
            labelPosition="top"
            value={selectedSkillIndex != null ? skills[selectedSkillIndex] : ""}
            onChange={handleSkillChange}
            placeholder={
              selectedSkillIndex != null ? "Edit Skill" : "Add Your Skills"
            }
          />

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
          {selectedSkillIndex !== undefined && selectedSkillIndex !== null ? (
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
          ) : null}

          {/* Buttons */}
          <Spacer />

          {/* Message */}
          <InputControl
            label="Message"
            labelPosition="top"
            value={messageText}
            onChange={(newMessage) => {
              setAttributes({
                message: { ...message, text: newMessage },
              });
            }}
            placeholder="Enter button name"
          />
          <InputControl
            label="Message Link"
            labelPosition="top"
            value={messageLink}
            onChange={(newLink) => {
              setAttributes({
                message: { ...message, link: newLink },
              });
            }}
            placeholder="Enter button link"
          />

          <Spacer />

          {/* Follow */}
          <InputControl
            label="Follow"
            labelPosition="top"
            value={followText}
            onChange={(newFollow) => {
              setAttributes({
                follow: { ...follow, text: newFollow },
              });
            }}
            placeholder="Enter button name"
          />
          <InputControl
            label="Follow Link"
            labelPosition="top"
            value={followLink}
            onChange={(newLink) => {
              setAttributes({
                follow: { ...follow, link: newLink },
              });
            }}
            placeholder="Enter button link"
          />
        </PanelBody>

        {cards.map((card, index) => {
          return (
            <PanelBody
              key={index}
              className="bPlPanelBody"
              title={__(`Card ${index + 1}`, "b-blocks")}
              initialOpen={false}
            >
              {/* Profile Image */}
              <InputControl
                label="Profile Image"
                labelPosition="top"
                value={card.profileImage?.url}
                type="url"
                onChange={(newImage) => {
                  setAttributes({
                    profileImage: { ...profileImage, url: newImage },
                  });
                }}
              />
              <MediaUpload
                onSelect={(newImage) => {
                  setAttributes({
                    profileImage: {
                      ...card.profileImage,
                      url: newImage?.sizes?.full?.url,
                    },
                  });
                }}
                allowedTypes={["image"]}
                value={card.profileImage?.url}
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
                value={card.name}
                onChange={(newName) => {
                  const newCards = [...cards];
                  newCards[index].name = newName;
                  setAttributes({ cards: newCards });
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
                  const newCards = [...cards];
                  newCards[index].title = newTitle;
                  setAttributes({ cards: newCards });
                }}
                placeholder="Profile Title"
              />

              <Spacer />

              {/* Projects */}
              <InputControl
                label="Projects"
                labelPosition="top"
                value={changeProjects}
                onChange={(newProject) => {
                  
                  setAttributes({
                    statLabel: { ...statLabel, projects: newProject },
                  });
                }}
              />
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
                value={changeFollowers}
                onChange={(newFollower) => {
                  setAttributes({
                    statLabel: { ...statLabel, followers: newFollower },
                  });
                }}
                placeholder="Followers"
              />
              <InputControl
                label="Followers"
                labelPosition="top"
                value={followers}
                onChange={(newFollowers) => {
                  setAttributes({
                    stats: { ...stats, followers: newFollowers },
                  });
                }}
              />
              <Spacer />

              {/* Following */}
              <InputControl
                label="Following"
                labelPosition="top"
                value={changeFollowing}
                onChange={(newFollowing) => {
                  setAttributes({
                    statLabel: { ...statLabel, following: newFollowing },
                  });
                }}
              />
              <InputControl
                label="Following"
                labelPosition="top"
                value={following}
                onChange={(newFollowing) => {
                  setAttributes({
                    stats: { ...stats, following: newFollowing },
                  });
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
              <InputControl
                label="Skills"
                labelPosition="top"
                value={skills}
                onChange={(newSkill) => {
                  setAttributes({ skills: newSkill });
                }}
                placeholder="Write Your Skills"
              />
              <Spacer />

              {/* Message */}
              <InputControl
                label="Message"
                labelPosition="top"
                value={messageText}
                onChange={(newMessage) => {
                  setAttributes({
                    message: { ...message, text: newMessage },
                  });
                }}
                placeholder="Enter button name"
              />
              <InputControl
                label="Message"
                labelPosition="top"
                value={messageLink}
                onChange={(newLink) => {
                  setAttributes({
                    message: { ...message, link: newLink },
                  });
                }}
                placeholder="Enter button link"
              />
              <Spacer />

              {/* Follow */}
              <InputControl
                label="Follow"
                labelPosition="top"
                value={followText}
                onChange={(newFollow) => {
                  setAttributes({
                    follow: { ...follow, text: newFollow },
                  });
                }}
                placeholder="Enter button name"
              />
              <InputControl
                label="Follow"
                labelPosition="top"
                value={followLink}
                onChange={(newLink) => {
                  setAttributes({
                    follow: { ...follow, link: newLink },
                  });
                }}
                placeholder="Enter button link"
              />

              <Spacer />

              <div style={{ width: "100%", display: "flex", gap: "4px" }}>
                {/* Duplicate Button */}
                <Button
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="secondary"
                  // onClick={() => handleDuplicate(image, index)}
                >
                  Duplicate
                </Button>

                {/* Slider Remove Button */}
                <Button
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="primary"
                  onClick={() => {
                    // const newItems = images.filter((_, i) => i !== index);
                    // setAttributes({
                    //   images: newItems,
                    // });
                  }}
                >
                  {__("Remove", "b-blocks")}
                </Button>
              </div>
            </PanelBody>
          );
        })}
      </PanelBody>

      {/* Add New Card */}
      <Button
        variant="secondary"
        onClick={() => {
          const newCards = [...cards, attributes];
          setAttributes({ cards: newCards });
        }}
      >
        Add New Card
      </Button>
    </>
  );
};

export default General;
