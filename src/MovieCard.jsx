import React from 'react' ;

const MovieCard = ({dummyData}) => {

    return (
        <div className="movie">
            <div>
                <p>{dummyData.Year}</p>
            </div>
            <div>
                <img src={dummyData.Poster !== 'N/A' ? dummyData.Poster : 'https://via.placeholder.com/400'} alt={dummyData.title} />
            </div>
            <div>
                <span>{dummyData.Type}</span>
                <h3>{dummyData.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;