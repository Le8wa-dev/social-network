import React from 'react';
import preloader from './../../../assets/images/preloader.svg'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={s.loader}>
        <img src={preloader} />
    </div>

}

export default Preloader;