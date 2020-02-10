import React from 'react';

const Profile = () => {
    return (
        <div className="page-content">

            <div className="page-content__inner">

                <div className="user">
                    <img src="https://placehold.it/150x150" alt="user-logo" className="user__logo" />
                    <div className="user__info">
                        <h2 className="user__info-title">Andrew S.</h2>
                        <p className="user__info-item">Date of Birth: 01.06.1990</p>
                        <p className="user__info-item">City: Moscow</p>
                        <p className="user__info-item">Education: MGU 2015</p>
                        <p className="user__info-item">Web Site: <a href="https://google.com">https://google.com</a></p>
                    </div>
                </div>

                <div className="posts">
                    <h2 className="posts__title">My Posts</h2>
                    <form className="posts__form">
                        <textarea placeholder="Your news"></textarea>
                        <button type="submit">Send</button>
                    </form>

                    <div className="posts__items">

                        <div className="posts__item">
                            <div className="posts__item-avatar">
                                <img src="https://placehold.it/30x30" alt="" />
                            </div>
                            <p className="posts__item-text">Here my new post</p>
                        </div>

                        <div className="posts__item">
                            <div className="posts__item-avatar">
                            <img src="https://placehold.it/30x30" alt="" />
                            </div>
                            <p className="posts__item-text">Here my new post</p>
                        </div>

                        <div className="posts__item">
                            <div className="posts__item-avatar">
                            <img src="https://placehold.it/30x30" alt="" />
                            </div>
                            <p className="posts__item-text">Here my new post</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Profile;