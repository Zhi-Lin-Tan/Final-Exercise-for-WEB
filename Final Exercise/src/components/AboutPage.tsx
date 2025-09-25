import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function About() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sessions") || "[]");
    setSessions(stored);
  }, []);

  return (
    <div>
      <h1>📅 All Created Sessions</h1>
      {sessions.length === 0 && <p>No sessions created yet.</p>}

    {sessions.map((s, index) => (
      <div key={index} className="ExistedSession">
        <h2>{s.title}</h2>
        <p>{s.description}</p>

        <div className="session-detail">
          <div className="detail-row">
            <span className="label">Date:</span>
            <span className="value">{s.date}</span>
          </div>
          <div className="detail-row">
            <span className="label">Time:</span>
            <span className="value">{s.time}</span>
          </div>
          <div className="detail-row">
            <span className="label">Max Participants:</span>
            <span className="value">{s.maxParticipants}</span>
          </div>
          <div className="detail-row">
            <span className="label">Type:</span>
            <span className="value">{s.type}</span>
          </div>
        </div>

        <button onClick={() => navigate(`/session/${s.id}/join`)}>I wanna join</button>

      </div>
    ))}
    </div>
  );
}
