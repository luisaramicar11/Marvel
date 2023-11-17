import { useFetch } from "../hooks/useFetch";
import { useState, useContext } from "react";
import { CharactersCard } from "./CharactersCard";
import ReactPaginate from "react-paginate";
import LanguageContext from "./context/LanguageContext";
import "./Characters.css";

export function Characters() {
  const { texts } = useContext(LanguageContext);

  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  let { data, isPending, error, setData } = useFetch(url);
  const [search, setSearch] = useState("");
  const [herosPerPage, setHerosPerPage] = useState(10);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
    console.log(search);
    if (
      url ===
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    ) {
      setUrl(
        `https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
      );
    }
  };

  const fetchHeros = (currentPage) => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${herosPerPage}&offset=${currentPage}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
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
      <div className="header-characters min-vh-100 bg-hero-image p-4">
        <article className="min-vh-100 p-4">
          <div className="search-bar text-center pt-5 ">
            <input
              type="search"
              placeholder={texts.searchSuperhero}
              className="search bg-second-color"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={searchMarvel}
            />
          </div>
          <div className="content-characterCard">
            {data === null ? (
              (data = null)
            ) : (
              <CharactersCard data={data?.data.results} />
            )}
          </div>
          <ReactPaginate
            previuosLabel={texts.paginationPrevious}
            nextLabel={texts.paginationNext}
            breakLabel={"..."}
            pageCount={157}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center m-0"}
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
        </article>
      </div>
    </>
  );
}
