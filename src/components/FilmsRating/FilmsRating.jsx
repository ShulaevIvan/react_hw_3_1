import React from 'react';
import FilmItem from '../FilmItem/FilmItem';


const FilmsRating = () => {
    return (
        <React.Fragment>
            <div className="films-container-wrap">
                <FilmItem></FilmItem>
                <FilmItem></FilmItem>
                <FilmItem></FilmItem>
                {/* <FilmItem></FilmItem>
                <FilmItem></FilmItem>
                <FilmItem></FilmItem>
                <FilmItem></FilmItem> */}
            </div>
            
        </React.Fragment>
    )
}

export default FilmsRating;