import React from "react";
import Stars from "../Stars/Stars";
const FilmItem = () => {
    const rndNum = Math.floor(Math.random() * (6 - 1) + 1);

    return (
        <React.Fragment>
            <div className="film-item-wrap">
                <div className="film-item-img-wrap">
                    <img src='https://i.postimg.cc/RZ3mr481/300x450.webp' alt="film" />
                    <span className="film-item-img-genre">genre</span>
                </div>
                <div className="film-item-content">
                    <h3>Супермен</h3>
                    <div className="film-item-stars-wrap">
                        <Stars starCount={rndNum}></Stars>
                    </div>
                </div>

                <div className="film-item-icons-wrap">
                    <div className="film-icons-fav-wrap">
                        <span className="material-symbols-outlined">favorite</span>
                    </div>
                        
                    <div className="film-icons-share-wrap">
                        <span className="material-symbols-outlined">share</span>
                    </div>
                       
                </div>
                <div className="film-item-control-wrap">
                    <div className="film-item-buy-btn-wrap">
                        <button className="buy-btn-wrap">Купить 1299 Р</button>
                    </div>
                    <div className="film-item-info-btn-wrap">
                        <button className="buy-btn-info">Подробнее</button>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default FilmItem;