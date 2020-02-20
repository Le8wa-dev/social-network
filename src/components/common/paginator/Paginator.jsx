import React from 'react';
import s from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...pagesprops}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.pagination}>

        {pages.map(p => {

            return <span className={currentPage === p && s.selectedPage}
                onClick={() => { onPageChanged(p) }}>{p}</span>
        })}

    </div>
}

export default Paginator;