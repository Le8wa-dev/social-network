import React from 'react';
import s from './News.module.css'

const News = (props) => {
    return (
        <div className={s.news}>
             <h2 className={s.title}>News</h2>
        </div>
    );
}

export default News;