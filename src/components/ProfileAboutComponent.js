import React, { useState } from 'react';
import '../styles/ProfileAboutComponent.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SEXUAL = ['Choose...', 'Female', 'Male'];

function ProfileAboutComponent() {
  const [name, setName] = useState('Herman Proce');
  const [tagline, setTagline] = useState('@Tagline');
  const [sex, setSex] = useState(1);
  const [dateSelected, setDateSelected] = useState(new Date(1991, 8, 10));

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeTagline = (event) => setTagline(event.target.value);
  const handleChangeSex = (event) => setSex(event.target.value);

  return (
    <div className="container about">
      <div className="header">
        <h1 style={{ margin: '30px 0px 20px 0px' }}>About you</h1>
      </div>
      <div className="input-group-row">
        <div className="input-group-column input-left">
          <div className="input-label">
            <div className="input-label-header">
              <span>display name</span>
            </div>
            <div className="input-label-tailer">
              <span>15 characters</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="input-group-column input-right">
          <div className="input-label">
            <div className="input-label-header">
              <span>Tagline</span>
            </div>
            <div className="input-label-tailer">
              <span>15 characters</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            value={tagline}
            onChange={handleChangeTagline}
          />
        </div>
      </div>
      <div className="input-group-row">
        <div className="input-group-column input-left">
          <div className="input-label">
            <div className="input-label-header">
              <span>Sexual</span>
            </div>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            defaultValue={sex}
            onChange={handleChangeSex}
          >
            {SEXUAL.map((value, index) => {
              return (
                <option key={index} value={index}>
                  {value}
                </option>
              );
            })}
            {/* <option value="0">Choose...</option>
            <option value="1">Female</option>
            <option value="2">Male</option> */}
          </select>
        </div>
        <div className="input-group-column input-right">
          <div className="input-label">
            <div className="input-label-header">
              <span>Birthday</span>
            </div>
          </div>
          {/* <input type="text" className="form-control" /> */}
          {/* <Form.Group controlId="dob">
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Form.Group> */}
          {/* <input
            type="date"
            className="input-group-field"
            name="birthdate"
            id="birthdate"
            value={dateSelected}
            onChange={handleChangeDate}
          /> */}
          <div className="input-date-picker">
            <DatePicker
              selected={dateSelected}
              onChange={(date) => setDateSelected(date)}
              dateFormat="dd MMMM yyyy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAboutComponent;
