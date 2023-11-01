import { useFetch } from "../hooks/useFetch";
import { EventsCard } from "./EventsCard";
import "./Events.css";

export default function Events() {
  let url =
    "https://gateway.marvel.com/v1/public/events?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df";
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="container">
        {data === null ? (
          (data = null)
        ) : (
          <EventsCard data={data.data.results} />
        )}
      </div>
    </>
  );
}
