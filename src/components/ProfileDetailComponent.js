import React, { useState } from 'react';
import '../styles/ProfileDetailComponent.css';
import ProfileHomeComponent from './ProfileHomeComponent';
import ProfileAboutComponent from './ProfileAboutComponent';

function ProfileDetailComponent() {
  const [tabActive, setTabActive] = useState({
    home: true,
    about: false,
  });

  const onTabChangeToHome = () => {
    setTabActive({
      home: true,
      about: false,
    });
  };

  const onTabChangeToAbout = () => {
    setTabActive({
      home: false,
      about: true,
    });
  };

  return (
    <div className="container profile-detail">
      <div className="profile-detail-menu">
        <a
          onClick={onTabChangeToHome}
          style={{
            ...(tabActive.home && {
              borderBottom: '5px solid #ffcd00',
              color: '#ffcd00',
            }),
          }}
        >
          Home
        </a>
        <a
          onClick={onTabChangeToAbout}
          style={{
            ...(tabActive.about && {
              borderBottom: '5px solid #ffcd00',
              color: '#ffcd00',
            }),
          }}
        >
          About
        </a>
      </div>
      <div
        className="profile-detail-home"
        style={{ display: tabActive.home ? 'flex' : 'none' }}
      >
        <ProfileHomeComponent></ProfileHomeComponent>
      </div>
      <div
        className="profile-detail-about"
        style={{ display: tabActive.about ? 'flex' : 'none' }}
      >
        <ProfileAboutComponent></ProfileAboutComponent>
      </div>
    </div>
  );
}

export default ProfileDetailComponent;
