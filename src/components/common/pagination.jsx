import React from 'react';
import { range, ceil} from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = ceil(itemsCount/pageSize)
  
  if(pageCount === 1) return null;
  const pages = range(1, pageCount + 1);

  return (
  <nav aria-label="...">
  <ul className="pagination" >
    {/* <li className="page-item"><a className="page-link">Previous</a></li> */}
    {pages.map((page) => (
    <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
      <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
    </li>
    ))}
    {/* <li className="page-item"><a className="page-link">Next</a></li> */}
  </ul>
</nav> );
}
 
export default Pagination;