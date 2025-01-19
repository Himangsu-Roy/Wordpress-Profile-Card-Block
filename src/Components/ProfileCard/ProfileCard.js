import React from "react";

const ProfileCard = ({ attribute, setAttribute }) => {
  console.log(attribute);

  const { bio, name, title, stats, skills } = attribute;

  const { followers, following, projects } = stats;

  return (
    <>
      <body>
        <div className="container">
          <div className="profile-card">
            <div className="card-content">
              <div className="avatar-wrapper">
                <div className="avatar">
                  <div className="avatar-inner"></div>
                  <div className="avatar-glow"></div>
                  <div className="avatar-border"></div>
                </div>
              </div>

              <div className="profile-info">
                <h2 className="name">{name}</h2>
                <p className="title">{title}</p>

                <div className="stats">
                  <div className="stat">
                    <span className="stat-value">{projects}</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{following}</span>
                    <span className="stat-label">Following</span>
                  </div>
                </div>

                <div className="bio">{bio}</div>

                <div className="skills">
                  {skills && skills.length > 0
                    ? skills.map((skill, index) => {
                        return (
                          <span key={index} className="skill">
                            {skill}
                          </span>
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
