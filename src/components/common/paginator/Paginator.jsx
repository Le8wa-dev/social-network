import React, { useState } from 'react';
import s from './Paginator.module.css';


const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [ portionNumber, setPortionNumber ] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <button className={s.btn} onClick={() => { setPortionNumber(portionNumber - 1)/* ; onPageChanged(leftPortionPageNumber) */ }} >prev</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {

                return <span className={currentPage === p && s.selectedPage}
                    onClick={() => { onPageChanged(p) }}>{p}</span>
            })
        }
        { portionCount > portionNumber &&
            <button className={s.btn} onClick={() => { setPortionNumber(portionNumber + 1)/* ; onPageChanged(leftPortionPageNumber) */ }} >next</button>
        }

    </div>
}

export default Paginator;