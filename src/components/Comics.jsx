import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Modal from "./ComicsModal";
import LanguageContext from "./context/LanguageContext";
import ReactPaginate from "react-paginate";
import ThemeContext from "./context/ThemeContext";

import "./Comics.css";

export default function Comics() {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/comics?limit=10&offset=0&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
  );

  let { data, isPending, error, setData } = useFetch(url);
  const [comicsPerPage, setEventPerPage] = useState(10);

  const fetchComics = (currentPage) => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/comics?limit=${comicsPerPage}&offset=${currentPage}&ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`
    );
  };

  const handlePageClick = (pagNumber) => {
    let currentPage = pagNumber.selected * 10;
    const comicsForServer = fetchComics(currentPage);
    setData(comicsForServer);
  };

  const getDataItem = (id, title, description, img) => {
    let tempData = [id, title, description, img];

    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };

  return (
    <>
      <div className={theme}>
        <div className="contentComics">
          {data === null
            ? (data = null)
            : data?.data.results.map((comic) => (
                <div key={comic.id}>
                  <div className="cardComics">
                    <div className="mx-auto">
                      <h5 className="titleComics">{comic.title}</h5>
                      <button
                        className="buttonComics"
                        onClick={() =>
                          getDataItem(
                            comic.id,
                            comic.title,
                            comic.description,
                            `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                          )
                        }
                      >
                        {texts.comicsbutton}
                      </button>
                    </div>
                    <img
                      className="imgComics"
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt="cardComics Comics"
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
      {model === true ? (
        <Modal
          title={tempData[2]}
          description={tempData[3]}
          img={tempData[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
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
