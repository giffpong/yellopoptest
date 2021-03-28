import React from 'react';
import '../styles/UploadResultComponent.css';

function UploadResultComponent(props) {
  return (
    <div className="container upload-result">
      <div className="card" style={{ width: '18rem' }}>
        <div>
          <div className="tag-img">
            <p>Category name</p>
          </div>
          <img
            className="card-img-top"
            src={props.filePath}
            alt="Card image cap"
            style={{ width: '100%', height: '200px' }}
          />
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing volutpat...
          </p>
          <p className="card-text-footer">
            Creator name <br />
            45 minutes ago &nbsp;
            <img className="logo-header" src="./suit.png" alt="Avatar" />
            &nbsp;&nbsp;30,0000&nbsp;&nbsp;
            <img className="logo-header" src="./search.png" alt="Avatar" />
            &nbsp;&nbsp;30,0000&nbsp;&nbsp;
          </p>
          <p className="card-text-footer"></p>
        </div>
      </div>
    </div>
  );
}

export default UploadResultComponent;
