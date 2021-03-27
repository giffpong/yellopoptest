import React from 'react';
import '../styles/ProfileHeaderComponent.css';

function ProfileHeaderComponent() {
  return (
    <div className="profile-container">
      <img
        className="logo-profile-header"
        src="./img_avatar.png"
        alt="Avatar"
      />
      <div className="profile-container-header">
        <h1>Herman Proce(@Tagline)</h1>
        <div className="profile-container-header-row2">
          <img className="logo-header" src="./suit.png" alt="Avatar" />
          <p>&nbsp;&nbsp;30,0000&nbsp;&nbsp;</p>
          <img className="logo-header" src="./search.png" alt="Avatar" />
          <p>&nbsp;&nbsp;30,0000&nbsp;&nbsp;</p>
        </div>
        <h5>34 Casts ● 4,500 Followers ● 300 Following</h5>
      </div>
    </div>
  );
}

export default ProfileHeaderComponent;
