import React from "react";
import { useState } from "react";
import Settings from "../Backend/Settings/Settings";
import { RichText } from "@wordpress/block-editor";

const ProfileCard = ({
  attributes,
  selectedSkillIndex,
  setAttributes,
  setSelectedSkillIndex,
}) => {
  // const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  const {
    bio,
    name,
    title,
    stats,
    skills,
    profileImage,
    nameSelectTag,
    statLabel,
    message,
    follow,
    cards,
  } = attributes;

  

  // const { followers, following, projects } = stats;
  // const { text: messageText, link: messageLink } = message;
  // const { text: followText, link: followLink } = follow;

  // console.log(messageText, "messageText");
  // const {
  //   projects: changeProjects,
  //   followers: changeFollowers,
  //   following: changeFollowing,
  // } = statLabel;

  const selectedSkill = (index) => {
    setSelectedSkillIndex(index);
  };

  return (
    <>
      {/* <Settings {...{ attributes, setAttributes, selectedSkillIndex }} />; */}
      {/* <body> */}
      <div className="profile-card-wrapper">
        {cards.map((card, idx) => {
          console.log(card, "card from ProfileCard");
          return (
            <div key={idx} className="container">
              <div className={`profile-card profile-card-${idx}`}>
                <div className="card-content">
                  <div className="avatar-wrapper">
                    <div className="avatar">
                      <div className="avatar-inner">
                        <div className="avatar-image">
                          <img src={card.profileImage.url} />
                        </div>
                      </div>
                      <div className="avatar-glow"></div>
                      <div className="avatar-border"></div>
                    </div>
                  </div>

                  <div className="profile-info">
                    {/* <h2 className="name">{card.name}</h2> */}
                    <RichText
                      className="name"
                      tagName={card.nameSelectTag}
                      value={card.name}
                      onChange={(newName) => {
                        const updateName = [...cards];
                        newName[idx].name = newName;
                        setAttributes({ cards: updateName });
                      }}
                      placeholder="Profile Name"
                    />
                    {/* <p className="title">{card.title}</p> */}
                    <RichText
                      className="title"
                      tagName="p"
                      value={card.title}
                      onChange={(newTitle) => {
                        const updateTitle = [...cards];
                        updateTitle[idx].title = newTitle;
                        setAttributes({ cards: updateTitle });
                      }}
                      placeholder="Profile Title"
                    />

                    <div className="stats">
                      <div className="stat">
                        {/* <span className="stat-value">
                          {card.stats.projects}
                        </span> */}
                        <RichText
                          className="stat-value"
                          tagName="span"
                          value={card.stats.projects}
                          onChange={(newProject) => {
                            const newCards = [...cards];
                            newCards[idx].stats.projects = newProject;
                            setAttributes({ cards: newCards });

                            // setAttributes({
                            //   stats: { ...stats, projects: newProject },
                            // });
                          }}
                          placeholder="Projects"
                        />
                        {/* <span className="stat-label">
                          {card.statLabel.projects}
                        </span> */}
                        <RichText
                          className="stat-label"
                          tagName="span"
                          value={card.statLabel.projects}
                          onChange={(newProjectLabel) => {
                            const newCards = [...cards];
                            newCards[idx].statLabel.projects = newProjectLabel;
                            setAttributes({ cards: newCards });
                          }}
                          placeholder="Change Projects"
                        />
                      </div>
                      <div className="stat">
                        {/* <span className="stat-value">
                          {card.stats.followers}
                        </span> */}
                        <RichText
                          className="stat-value"
                          tagName="span"
                          value={card.stats.followers}
                          onChange={(newFollower) => {
                            const newCards = [...cards];
                            newCards[idx].stats.followers = newFollower;
                            setAttributes({ cards: newCards });
                          }}
                          placeholder="Followers"
                        />
                        {/* <span className="stat-label">
                          {card.statLabel.followers}
                        </span> */}

                        <RichText
                          className="stat-label"
                          tagName="span"
                          value={card.statLabel.followers}
                          onChange={(newFollowerLabel) => {
                            const newCards = [...cards];
                            newCards[idx].statLabel.followers =
                              newFollowerLabel;
                            setAttributes({ cards: newCards });
                          }}
                          placeholder="Change Followers"
                        />
                      </div>

                      <div className="stat">
                        {/* <span className="stat-value">
                          {card.stats.following}
                        </span> */}
                        <RichText
                          className="stat-value"
                          tagName="span"
                          value={card.stats.following}
                          onChange={(newFollowing) => {
                            const newCards = [...cards];
                            newCards[idx].stats.following = newFollowing;
                            setAttributes({ cards: newCards });
                          }}
                          placeholder="Following"
                        />
                        {/* <span className="stat-label">
                          {card.statLabel.following}
                        </span> */}
                        <RichText
                          className="stat-label"
                          tagName="span"
                          value={card.statLabel.following}
                          onChange={(newFollowingLabel) => {
                            const newCards = [...cards];
                            newCards[idx].statLabel.following =
                              newFollowingLabel;
                            setAttributes({ cards: newCards });
                          }}
                          placeholder="Change Following"
                        />
                      </div>
                    </div>

                    {/* <div className="bio">{card.bio}</div> */}

                    <RichText
                      className="bio"
                      tagName="div"
                      value={card.bio}
                      onChange={(newBio) => {
                        const newCards = [...cards];
                        newCards[idx].bio = newBio;
                        setAttributes({ cards: newCards });
                      }}
                      placeholder="Write Your Bio"
                    />

                    {/* Skills */}
                    {/* <div className="skills">
                      {card.skills.map((skill, index) => (
                        // <span
                        //   key={index}
                        //   className="skill"
                        //   onClick={() => selectedSkill(index)}
                        // >
                        //   {skill}
                        // </span>
                        <RichText
                          onClick={() => selectedSkill(index)}
                          key={index}
                          className="skill"
                          tagName="span"
                          value={skill}
                          onChange={(newSkill) => {
                            const newSkills = [...cards];
                            newSkills[index].skills[selectedSkillIndex] =
                              newSkill;
                            setAttributes({ cards: newSkills });
                          }}
                          placeholder="Write Your Skills"
                        />
                      ))}
                    </div> */}

                    {/* Skills */}
                    <div className="skills">
                      {card.skills.map((skill, index) => (
                        <RichText
                          key={index}
                          className={`skill ${
                            selectedSkillIndex === index ? "selected" : ""
                          }`}
                          tagName="span"
                          value={skill}
                          onClick={() => selectedSkill(index)}
                          onChange={(newSkill) => {
                            const updatedCards = [...cards];
                            updatedCards[idx].skills[selectedSkillIndex] =
                              newSkill;
                            setAttributes({ cards: updatedCards });
                          }}
                          placeholder="Write Your Skills"
                        />
                      ))}
                    </div>

                    <div className="actions">
                      <button className="action-btn primary">
                        <a
                          href={card.follow.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="follow"
                        >
                          <RichText
                            className="follow"
                            tagName="span"
                            value={card.follow.text}
                            onChange={(newFollow) => {
                              const newCards = [...cards];
                              newCards[idx].follow.text = newFollow;
                              setAttributes({ cards: newCards });
                            }}
                            placeholder={card.follow.text}
                          />
                        </a>
                        <div className="btn-effect"></div>
                      </button>

                      <button className="action-btn secondary">
                        <a
                          href={card.message.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="follow"
                        >
                          <RichText
                            className="follow"
                            tagName="span"
                            value={card.message.text}
                            onChange={(newMessage) => {
                              const newCards = [...cards];
                              newCards[idx].message.text = newMessage;
                              setAttributes({ cards: newCards });
                            }}
                            placeholder={card.message.text}
                          />
                        </a>
                        <div className="btn-effect"></div>
                      </button>

                      {/* <a href={card.follow.link} className="follow">
                        {card.follow.text}
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="card-shine"></div>
                <div className="card-border"></div>
                <div className="card-glow"></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </body> */}
    </>
  );
};

export default ProfileCard;
