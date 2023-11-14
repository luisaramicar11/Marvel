import { useNavigate } from "react-router-dom";
import "./Events.css";
import moment from "moment";

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
                  <h4>{events.title}</h4>
                  <h5>{moment(events.modified).format("MM-DD-YYYY")}</h5>
                </div>
              </div>
            </div>
          ))
        : data === null}
    </>
  );
}
