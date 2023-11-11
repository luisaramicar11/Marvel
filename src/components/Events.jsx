import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { EventsCard } from "./EventsCard";
import ReactPaginate from "react-paginate";

import "./Events.css";

export default function Events() {
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/events?limit=10&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  let { data, isPending, error, setData } = useFetch(url);
  const [eventPerPage, setEventPerPage] = useState(10);

  const fetchEvents = (currentPage) => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/events?limit=${eventPerPage}&offset=${currentPage}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
  };

  const handlePageClick = (pagNumber) => {
    let currentPage = pagNumber.selected * 10;

    const eventForServer = fetchEvents(currentPage);
    setData(eventForServer);
  };

  return (
    <>
      <div className="containerEvents">
        {data === null ? (
          (data = null)
        ) : (
          <EventsCard data={data?.data.results} />
        )}
      </div>
      <ReactPaginate
        previuosLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={157}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mb-0"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
