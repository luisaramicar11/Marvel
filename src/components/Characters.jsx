import allCharacters from "../assets/images/allCharacters.png";
import "./Characters.css";
import { CharactersCard } from "./CharactersCard";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
/* import { Pagination } from "./Pagination"; */
import ReactPaginate from "react-paginate";

export function Characters() {
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  //https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df
  //https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df
  let { data, isPending, error } = useFetch(url);
  const [search, setSearch] = useState("");
  const [herosPerPage, setHerosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(herosPerPage);

  const indexOfLastHero = currentPage * herosPerPage; //1*20=20
  const indexOfFirstHero = indexOfLastHero - herosPerPage; //20-20=0
  const currentHero = data?.data.results.slice(
    indexOfFirstHero,
    indexOfLastHero
  );

  //console.log(data);
  console.log(currentHero);

  const totalHeros = data?.data.total;

  console.log(data?.data.total);

  //console.log(currentHero);
  //console.log(isPending, error);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
  };

  const fetchHeros = (currentHero) => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?limit=${currentHero}&offset=${herosPerPage}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
  };

  const handlePageClick = (pag) => {
    console.log(pag.selected);
    let currentHero = pag.selected + 1;
    console.log(currentHero);
    const herosForServer = fetchHeros(currentHero);
  };

  return (
    <>
      <div className="header-characters">
        <div className="image-header-characters">
          <img src={allCharacters} alt="All Characters" />
        </div>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search Superhero"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchMarvel}
          />
        </div>
      </div>
      <div className="content-characterCard">
        {data === null ? (data = null) : <CharactersCard data={currentHero} />}
      </div>
      {/* <Pagination
      herosPerPage={herosPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalHeros={totalHeros} 

      nPages={nPages}
      /> */}

      <ReactPaginate
        previuosLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={1557}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </>
  );
}
