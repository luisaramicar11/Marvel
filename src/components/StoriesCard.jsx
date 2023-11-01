//import "./CharactersCard.css";
import { useNavigate } from "react-router-dom";
export const StoriesCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((storie) => (
            <li
              key={storie.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{storie.type}</div>
                {storie.title}
              </div>
              <span className="badge bg-primary rounded-pill">{storie.id}</span>
            </li>
          ))
        : data === null}
    </>
  );
};
