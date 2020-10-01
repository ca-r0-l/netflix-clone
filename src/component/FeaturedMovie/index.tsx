import React from 'react';
import './FeaturedMovie.css';

interface Props {
    movie: any
}

function FeaturedMovie(props: Props) {   
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{props.movie.original_name}</div>
                    <div className="featured--info">
                        { props.movie.vote_average ? <div className="featured--points">{props.movie.vote_average} pontos</div> : null}
                        { props.movie.first_air_date ? <div className="featured--year">{new Date(props.movie.first_air_date).getFullYear()}</div> : null}
                        { props.movie.number_of_seasons ? <div className="featured--seasons">{props.movie.number_of_seasons} temporada{props.movie.number_of_seasons !== 1 ? "s": ""}</div> : null}
                    </div>
                    { props.movie.overview ? <div className="featured--description">{props.movie.overview}</div> : null}
                    {
                        props.movie.original_name ?
                            <div className="featured--buttons">
                                <a className="featured--buttons--watch" href={`watch/${props.movie.id}`}>► Assistir</a>
                                <a className="featured--buttons--add" href={`add/${props.movie.id}`}>+Minha Lista</a>
                            </div>
                        : null
                    }
                    { props.movie.genres ? <div className="featured--genres"><strong>Gêneros</strong>: {props.movie.genres.map((g:any) => g["name"]).join(", ")}</div> : null}
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;