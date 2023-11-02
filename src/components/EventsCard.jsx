import { useNavigate } from "react-router-dom";
import "./Events.css";

export function EventsCard({ data }) {
  const navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((events) => (
            <div className="cardevents" key={events.id}>
              <div className="events">
                <img
                  className="img_events"
                  src={`${events.thumbnail.path}.${events.thumbnail.extension}`}
                  alt="card Events"
                  onClick={() => navigate(`${events.id}`)}
                />

                <div className="description">
                  <h3>{events.title}</h3>
                  <h5>{events.modified}</h5>
                </div>
              </div>
            </div>
          ))
        : data === null}
    </>
  );
}
