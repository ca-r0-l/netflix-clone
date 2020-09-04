import React from 'react';
import './MovieRow.css';

interface Props {
    title: string
    items: any
}

function MovieRow(props: Props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="movieRow--listarea">
                {
                    props.items && props.items.results && props.items.results.length > 0 && props.items.results.map((item: any, key: string | number | null | undefined) => (
                        <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

                    ))
                }
            </div>
        </div>
    );
}

export default MovieRow;