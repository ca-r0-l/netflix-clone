import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

interface Props {
    title: string
    items: any
}

function MovieRow(props: Props) {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        
        if (x > 0) {
            x = 0;
        }
        
        setScrollX(x)
    }
    
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        const listWidth = props.items.results.length * 150;

        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60;
        }

        setScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{props.title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: props.items.results.length * 150
                }}>
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