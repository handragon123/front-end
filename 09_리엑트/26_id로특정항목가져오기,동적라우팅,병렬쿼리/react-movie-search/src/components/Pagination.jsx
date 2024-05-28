import { useState, useEffect } from 'react';
import { sliceArrayByLimit } from '../utils.js';

export default function Pagination({ totalPage, limit, page, setPage }) {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <div className="pagination">
      {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}
      {currentPageArray?.map((v) => (
        <button
          className={`num_btn ${page === v + 1 && 'active'}`}
          key={v}
          type="button"
          onClick={() => setPage(v + 1)}
        >
          {v + 1}
        </button>
      ))}
      {page !== totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
