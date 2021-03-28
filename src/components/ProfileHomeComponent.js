import React, { useState } from 'react';
import '../styles/ProfileHomeComponent.css';
import UploadResultComponent from './UploadResultComponent';

function ProfileHomeComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const filesUploaded = event.target.files;
    console.log(
      '🚀 ~ file: ProfileHomeComponent.js ~ line 15 ~ handleChange ~ filesUploaded',
      filesUploaded
    );
    const results = [...selectedFiles];
    results.push(...filesUploaded);
    setSelectedFiles(results);
  };

  const generateDetail = () => {
    const results = [];
    for (let index = 0; index < selectedFiles.length; index++) {
      const element = selectedFiles[index];
      console.log(
        '🚀 ~ file: ProfileHomeComponent.js ~ line 28 ~ generateDetail ~ element',
        element
      );
      results.push(
        <UploadResultComponent
          key={index}
          filePath={element.name}
        ></UploadResultComponent>
      );
    }
    return results;
  };
  return (
    <div className="container home">
      <div style={{ display: selectedFiles.length === 0 ? '' : 'none' }}>
        <img className="logo-upload" src="./upload-logo.png" alt="Avatar" />
        <br />
        <br />
        <h4>no upload cast</h4>
        <p>
          There is no one who loves pain itself who seeks after it and wants to
          have it, simply because it is pain.
        </p>
        <button className="upload-button" onClick={handleClick}>
          Upload a file
        </button>
      </div>
      <div
        style={{
          display: selectedFiles.length > 0 ? '' : 'none',
          textAlign: 'left',
        }}
      >
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
          multiple
        />
        <h1 style={{ margin: '30px 0px 20px 0px' }}>Your upload</h1>
        <div className="upload-content">{generateDetail()}</div>
      </div>
    </div>
  );
}

export default ProfileHomeComponent;
