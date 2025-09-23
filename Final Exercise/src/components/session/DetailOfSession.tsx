import { useNavigate, useParams } from "react-router-dom";

export default function DetailOfSession() {
  const { id } = useParams();
  const navigate = useNavigate();

  const DetailOfSession: Record<string, any> = {
    football: {
      title: "Football Practice",
      description: "Weekly football training.",
      date: "2025-09-30",
      time: "19:30",
      maxParticipants: 20,
      type: "public",
    },
    boardgame: {
      title: "Board Game Night",
      description: "Bring your favorite games! Snacks provided.",
      date: "2025-10-16",
      time: "19:30",
      maxParticipants: 15,
      type: "private",
    },
    sing: {
      title: "Choir Rehearsal",
      description: "Rehearsing songs for Christmas.",
      date: "2025-10-05",
      time: "19:30",
      maxParticipants: 15,
      type: "public",
    },
  };

  const session = id ? DetailOfSession[id] : null;

  
  return (
    <div>
      <h2>{session.title}</h2>
      <p>{session.description}</p>
      <p>
        <strong>Date:</strong> {session.date}
      </p>
      <p>
        <strong>Time:</strong> {session.time}
      </p>
      <p>
        <strong>Max Participants:</strong> {session.maxParticipants}
      </p>
      <p>
        <strong>Type:</strong> {session.type}
      </p>

      <button onClick={() => navigate(`/session/${session.id}/join`)}>I wanna join</button>
    </div>
  );
}

