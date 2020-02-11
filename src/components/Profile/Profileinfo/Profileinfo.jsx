import React from 'react';
import s from './Profileinfo.module.css'


const Profileinfo = () => {
    return (
        <div className={s.user}>
            <img className={s.user_logo} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-520570876-1552598555.jpg?crop=0.617xw:0.412xh;0.215xw,0.0214xh&resize=640:*" alt="user-logo"/>
            <div className={s.user_info}>
                <h2 className={s.user_title}>Andrew S.</h2>
                <p className={s.item}>Date of Birth: 01.06.1990</p>
                <p className={s.item}>City: Moscow</p>
                <p className={s.item}>Education: MGU 2015</p>
                <p className={s.item}>Web Site: <a href="https://google.com">https://google.com</a></p>
            </div>
        </div>
    );
}

export default Profileinfo
