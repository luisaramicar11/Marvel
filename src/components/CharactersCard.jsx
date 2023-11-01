import "./CharactersCard.css";
import { useNavigate } from "react-router-dom";
export const CharactersCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {data
        ? data.map((character) => (
            <div
              className="card-character"
              key={character.id}
              onClick={() => navigate(`${character.id}`)}
            >
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
              <div className="card-character-title">
                <h3 className="fs-5">{character.name}</h3>
              </div>
            </div>
          ))
        : data === null}
    </>
  );
};
