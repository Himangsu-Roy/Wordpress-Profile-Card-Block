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

  // const { followers, following, projects } = stats;
  // const {
  //   projects: changeProjects,
  //   followers: changeFollowers,
  //   following: changeFollowing,
  // } = statLabel;
  // const { text: messageText, link: messageLink } = message;
  // const { text: followText, link: followLink } = follow;

  const handleSkillChange = (newSkill) => {
    if (newSkill.trim() === "") return;

    const newSkills = [...skills];

    if (selectedSkillIndex != null) {
      newSkills[selectedSkillIndex] = newSkill;
    } else {
      newSkills.push(newSkill);
    }

    setAttributes({ skills: newSkills });
  };

  function handleDuplicate(card, index) {
    console.log(index, "image index");

    const newItems = [
      ...cards.slice(0, index + 1),
      { ...card },
      ...cards.slice(index + 1),
    ];
    setAttributes({ cards: newItems });
  }

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Cards", "b-blocks")}
        initialOpen={true}
      >
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
                value={card.title}
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
                value={card.stats.projects}
                onChange={(newProject) => {
                  const newCards = [...cards];
                  newCards[index].stats.projects = newProject;
                  setAttributes({ cards: newCards });
                }}
              />
              <InputControl
                label="Projects"
                labelPosition="top"
                value={card.statLabel.projects}
                onChange={(newProject) => {
                  const newCards = [...cards];
                  newCards[index].statLabel.projects = newProject;
                  setAttributes({ cards: newCards });
                  // setAttributes({ stats: { ...stats, projects: newProject } });
                }}
              />

              <Spacer />

              {/* Followers */}
              <InputControl
                label="Followers"
                labelPosition="top"
                value={card.stats.followers}
                onChange={(newFollower) => {
                  const newCards = [...cards];
                  newCards[index].stats.followers = newFollower;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   statLabel: { ...statLabel, followers: newFollower },
                  // });
                }}
                placeholder="Followers"
              />
              <InputControl
                label="Followers"
                labelPosition="top"
                value={card.statLabel.followers}
                onChange={(newFollowers) => {
                  const newCards = [...cards];
                  newCards[index].statLabel.followers = newFollowers;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   stats: { ...stats, followers: newFollowers },
                  // });
                }}
              />
              <Spacer />

              {/* Following */}
              <InputControl
                label="Following"
                labelPosition="top"
                value={card.stats.following}
                onChange={(newFollowing) => {
                  const newCards = [...cards];
                  newCards[index].stats.following = newFollowing;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   statLabel: { ...statLabel, following: newFollowing },
                  // });
                }}
              />
              <InputControl
                label="Following"
                labelPosition="top"
                value={card.statLabel.following}
                onChange={(newFollowing) => {
                  const newCards = [...cards];
                  newCards[index].statLabel.following = newFollowing;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   stats: { ...stats, following: newFollowing },
                  // });
                }}
              />
              <Spacer />

              {/* Bio */}
              <TextareaControl
                label="Bio"
                labelPosition="top"
                value={card.bio}
                onChange={(newBio) => {
                  const newCards = [...cards];
                  newCards[index].bio = newBio;
                  setAttributes({ cards: newCards });
                  // setAttributes({ bio: newBio });
                }}
                placeholder="Write Your Bio"
              />
              <Spacer />

              {/* Skills */}
              <InputControl
                label="Skills"
                labelPosition="top"
                value={card.skills[selectedSkillIndex]}
                onChange={(newSkill) => {
                  const newSkills = [...card.skills];
                  newSkills[selectedSkillIndex] = newSkill;
                  const newCards = [...cards];
                  newCards[index].skills = newSkills;
                  setAttributes({ cards: newCards });
                }}
                placeholder="Write Your Skills"
              />
              <Spacer />

              {/* Message */}
              <InputControl
                label={card.message.text}
                labelPosition="top"
                value={card.message.text}
                onChange={(newMessage) => {
                  const newCards = [...cards];
                  newCards[index].message.text = newMessage;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   message: { ...message, text: newMessage },
                  // });
                }}
                placeholder="Enter button name"
              />
              <InputControl
                label={`${card.message.text} Link`}
                labelPosition="top"
                value={card.message.link}
                onChange={(newLink) => {
                  const newCards = [...cards];
                  newCards[index].message.link = newLink;
                  setAttributes({ cards: newCards });

                  // setAttributes({
                  //   message: { ...message, link: newLink },
                  // });
                }}
                placeholder="Enter button link"
              />

              <Spacer />

              {/* Follow */}
              <InputControl
                label={card.follow.text}
                labelPosition="top"
                value={card.follow.text}
                onChange={(newFollow) => {
                  const newCards = [...cards];
                  newCards[index].follow.text = newFollow;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   follow: { ...follow, text: newFollow },
                  // });
                }}
                placeholder="Enter button name"
              />
              <InputControl
                label={`${card.follow.text} Link`}
                labelPosition="top"
                value={card.follow.link}
                onChange={(newLink) => {
                  const newCards = [...cards];
                  newCards[index].follow.link = newLink;
                  setAttributes({ cards: newCards });
                  // setAttributes({
                  //   follow: { ...follow, link: newLink },
                  // });
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
                  onClick={() => handleDuplicate(card, index)}
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
                    const newItems = cards.filter((_, i) => i !== index);
                    setAttributes({ cards: newItems });
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
          const newCard = {
            ...cards[0],
          };
          setAttributes({ cards: [...cards, newCard] });
        }}
      >
        Add New Card
      </Button>
    </>
  );
};

export default General;
