import React from 'react';
import '../styles/ProfileDetailComponent.css';

function ProfileDetailComponent() {
  const showLog = (e) => {
    console.log(
      '🚀 ~ file: ProfileDetailComponent.js ~ line 6 ~ showLog ~ e',
      e
    );
    console.log('test');
  };
  return (
    <div className="container profile-detail">
      <div className="profile-detail-menu">
        <a onClick={showLog}>Home</a>
        <a>About</a>
      </div>
    </div>
  );
}

export default ProfileDetailComponent;
