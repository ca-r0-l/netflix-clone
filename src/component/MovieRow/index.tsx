import React from 'react';
import './MovieRow.css';

interface Props {
    title: string
    items: any
}

function MovieRow(props: Props) {
    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {
                        props.items && props.items.results && props.items.results.length > 0 && props.items.results.map((item: any, key: string | number | null | undefined) => (
                            <div className="movieRow--item" key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieRow;