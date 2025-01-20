import React from "react";
import { useState } from "react";
import Settings from "../Backend/Settings/Settings";
import { RichText } from "@wordpress/block-editor";

const ProfileCard = ({ attributes, setAttributes, setSelectedSkillIndex }) => {
  // const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  const { bio, name, title, stats, skills, profileImage } = attributes;

  const { followers, following, projects } = stats;

  const selectedSkill = (index) => {
    setSelectedSkillIndex(index);
  };

  return (
    <>
      {/* <Settings {...{ attributes, setAttributes, selectedSkillIndex }} />; */}
      <body>
        <div className="container">
          <div className="profile-card">
            <div className="card-content">
              <div className="avatar-wrapper">
                <div className="avatar">
                  <div className="avatar-inner">
                    <div className="avatar-image">
                      <img src={profileImage.url} />
                    </div>
                  </div>
                  <div className="avatar-glow"></div>
                  <div className="avatar-border"></div>
                </div>
              </div>

              <div className="profile-info">
                {/* <h2 className="name">{name}</h2> */}
                <RichText
                  className="name"
                  tagName="h2"
                  value={name}
                  onChange={(newName) => {
                    setAttributes({ name: newName });
                  }}
                  placeholder="Profile Name"
                />
                {/* <p className="title">{title}</p> */}
                <RichText
                  className="title"
                  tagName="p"
                  value={title}
                  onChange={(newTitle) => {
                    setAttributes({ title: newTitle });
                  }}
                  placeholder="Profile Title"
                />

                <div className="stats">
                  <div className="stat">
                    {/* <span className="stat-value">{projects}</span> */}
                    <RichText
                      className="stat-value"
                      tagName="span"
                      value={projects}
                      onChange={(newProject) => {
                        setAttributes({
                          stats: { ...stats, projects: newProject },
                        });
                      }}
                      placeholder="Projects"
                    />
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    {/* <span className="stat-value">{followers}</span> */}
                    <RichText
                      className="stat-value"
                      tagName="span"
                      value={followers}
                      onChange={(newFollower) => {
                        setAttributes({
                          stats: { ...stats, followers: newFollower },
                        });
                      }}
                      placeholder="Followers"
                    />
                    <span className="stat-label">Followers</span>
                  </div>
                  <div className="stat">
                    {/* <span className="stat-value">{following}</span> */}
                    <RichText
                      className="stat-value"
                      tagName="span"
                      value={following}
                      onChange={(newFollowing) => {
                        setAttributes({
                          stats: { ...stats, following: newFollowing },
                        });
                      }}
                      placeholder="Following"
                    />
                    <span className="stat-label">Following</span>
                  </div>
                </div>

                {/* <div className="bio">{bio}</div> */}
                <RichText
                  className="bio"
                  tagName="div"
                  value={bio}
                  onChange={(newBio) => {
                    setAttributes({ bio: newBio });
                  }}
                  placeholder="Write Your Bio"
                />

                <div className="skills">
                  {skills && skills.length > 0
                    ? skills.map((skill, index) => {
                        return (
                          <>
                            {/* <span
                              onClick={() => selectedSkill(index)}
                              key={index}
                              className="skill"
                            >
                              {skill}
                            </span> */}
                            <RichText
                              onClick={() => selectedSkill(index)}
                              key={index}
                              className="skill"
                              tagName="span"
                              value={skill}
                              onChange={(newSkill) => {
                                const newSkills = [...skills];
                                newSkills[index] = newSkill;
                                setAttributes({ skills: newSkills });
                              }}
                              placeholder="Write Your Skills"
                            />
                          </>
                        );
                      })
                    : null}
                </div>

                <div className="actions">
                  <button className="action-btn primary">
                    <span>Follow</span>
                    <div className="btn-effect"></div>
                  </button>
                  <button className="action-btn secondary">
                    <span>Message</span>
                    <div className="btn-effect"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="card-shine"></div>
            <div className="card-border"></div>
            <div className="card-glow"></div>
          </div>
        </div>
      </body>
    </>
  );
};

export default ProfileCard;
