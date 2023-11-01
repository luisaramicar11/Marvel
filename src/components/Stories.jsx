//import "./Characters.css";
import { StoriesCard } from "./StoriesCard";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
/* import { Pagination } from "./Pagination"; */
import ReactPaginate from "react-paginate";

export function Stories() {
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  //https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df
  //https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df
  let { data, isPending, error } = useFetch(url);
  const [search, setSearch] = useState("");
  const [herosPerPage, setHerosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(data);

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
  console.log(data?.data.results[0].characters.collectionURI);

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
                  <StoriesCard data={currentHero} />
                )}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
