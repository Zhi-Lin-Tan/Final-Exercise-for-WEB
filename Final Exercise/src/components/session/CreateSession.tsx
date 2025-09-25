import React, { useState } from 'react';
import '../../App.css';

export default function CreateSession() {

  const [sessionData, setSessionData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    maxParticipants: '',
    type: 'public' 
  });

  const [saveButtonClicked, setSaveButtonClicked] = useState(false);

  function handleInputChange(event, fieldName) {
    setSessionData({
      ...sessionData,
      [fieldName]: event.target.value
    });
  }

    function saveSession() {
    const newSession = {
      ...sessionData,
      id: Date.now().toString(), 
    };

    const existingSessions = JSON.parse(localStorage.getItem("sessions") || "[]");

    existingSessions.push(newSession);

    localStorage.setItem("sessions", JSON.stringify(existingSessions));

    setSaveButtonClicked(true);
  }

  let output;
  if (saveButtonClicked === false) {
    output = (
      <div>
        <div>
          Title:
          <input
            type="text"
            placeholder="Session title"
            value={sessionData.title}
            onChange={(event) => handleInputChange(event, 'title')}
          />
        </div>

        <div>
          Description:
          <textarea
            placeholder="Describe your session..."
            value={sessionData.description}
            onChange={(event) => handleInputChange(event, 'description')}
          />
        </div>

        <div>
          Date:
          <input
            type="date"
            value={sessionData.date}
            onChange={(event) => handleInputChange(event, 'date')}
          />
        </div>

        <div>
          Time:
          <input
            type="time"
            value={sessionData.time}
            onChange={(event) => handleInputChange(event, 'time')}
          />
        </div>

        <div>
          Max Participants:
          <input
            type="number"
            placeholder="Max people"
            value={sessionData.maxParticipants}
            onChange={(event) => handleInputChange(event, 'maxParticipants')}
          />
        </div>

        <div>
          Type:
          <select
            value={sessionData.type}
            onChange={(event) => handleInputChange(event, 'type')}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div>
          <button onClick={saveSession}>Create Session</button>
        </div>
      </div>
    );
  } else {
    output = (
      <div>
        <h2>🎉 Session Created!</h2>
        <p><strong>Title:</strong> {sessionData.title}</p>
        <p><strong>Description:</strong> {sessionData.description}</p>
        <p><strong>Date:</strong> {sessionData.date}</p>
        <p><strong>Time:</strong> {sessionData.time}</p>
        <p><strong>Max Participants:</strong> {sessionData.maxParticipants}</p>
        <p><strong>Type:</strong> {sessionData.type}</p>

        <button onClick={() => setSaveButtonClicked(false)}>Create Another</button>
      </div>
    );
  }

  return (
    <div className="createSession">
      <h1>Create a New Hobby Session</h1>
      {output}
    </div>
  );
}
