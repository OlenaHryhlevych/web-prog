import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const renderPagination = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((p, index) => (
      <li key={index} className={`page-item ${p === page ? "active" : ""} ${p === "..." ? "disabled" : ""}`}>
        {p === "..." ? (
          <span className="page-link">{p}</span>
        ) : (
          <button onClick={() => setPage(p)} className="page-link">{p}</button>
        )}
      </li>
    ));
  };

  return (
    <nav>
      <ul className="pagination justify-content-center mt-4">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button onClick={() => setPage(page - 1)} className="page-link">Previous</button>
        </li>
        {renderPagination()}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button onClick={() => setPage(page + 1)} className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
