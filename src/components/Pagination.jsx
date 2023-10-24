import ReactPaginate from "react-paginate";
/* import "bootstrap/dist/css/bootstrap.min.css";

export function Pagination({
  herosPerPage,
  setCurrentPage,
  currentPage,
  totalHeros,
}) {
  console.log(Math.ceil(totalHeros / herosPerPage));

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalHeros / herosPerPage); i++) {
    pageNumber.push(i);
  }

  console.log(pageNumber);

  const onNextPage = () => {
    if (currentPage < totalHeros) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            tabIndex="-1"
            aria-disabled="true"
            onClick={onPrevPage}
          >
            Previous
          </a>
        </li>

        {pageNumber.map((noPage) => (
          <li
            key={noPage}
            className={`page-item ${noPage === currentPage ? "active" : ""}`}
            onClick={() => {
              onSpecificPage(noPage);
            }}
          >
            <a className="page-link" href="#">
              {noPage}
            </a>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage >= pageNumber.length ? "disabled" : ""
          }`}
        >
          <a className="page-link" href="#" onClick={onNextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
} */

/* import ReactPaginate from "react-paginate";

export function Pagination() {
  return ();
}*/
