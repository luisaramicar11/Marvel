import { StoriesCard } from "./StoriesCard";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export function Stories() {
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/stories?limit=10&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  let { data, isPending, error, setData } = useFetch(url);
  const [herosPerPage, setHerosPerPage] = useState(10);

  console.log(data);

  const fetchHeros = (currentPage) => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/stories?limit=${herosPerPage}&offset=${currentPage}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
  };

  const handlePageClick = (pagNumber) => {
    console.log(pagNumber);
    console.log(pagNumber.selected);
    let currentPage = pagNumber.selected * 10;
    console.log(currentPage);
    const herosForServer = fetchHeros(currentPage);
    setData(herosForServer);
  };

  return (
    <>
      <div className="pt-5 bg-color">
        <div className="container">
          <section className="row g-0">
            <article className="col-12 text-center">
              <h1 className="fw-bold">Stories</h1>
            </article>
            <div>
              <ol className="list-group list-group-numbered pb-5 pt-5">
                {data === null ? (
                  (data = null)
                ) : (
                  <StoriesCard data={data?.data.results} />
                )}
              </ol>
            </div>
          </section>
        </div>
        <ReactPaginate
          previuosLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={100}
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
      </div>
    </>
  );
}
