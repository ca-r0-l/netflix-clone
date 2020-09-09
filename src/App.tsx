import React, { useEffect, useState } from "react";
import "./App.css";

import * as Tmdb from "./Tmdb";
import MovieRow from "./component/MovieRow/MovieRow";
import FeaturedMovie from "./component/FeaturedMovie/FeaturedMovie";

type MovieList = {
	title: string;
	slug: string;
	items: any[];
}

function App() {
	const [movieList, setMovieList] = useState([] as MovieList[]);
	const [featuredData, setFeatureData] = useState({});

	useEffect(() => {
		const loadAll = async () => {
			const list = await Tmdb.getHomeList();
			setMovieList(list);

			const originals = list.filter(movie => movie.slug === "originals");
			const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			const chosen = originals[0].items.results[randomChosen];
			const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
			setFeatureData(chosenInfo)
		};

		loadAll();
	}, []);

	return (
		<div className="page">
			<FeaturedMovie movie={featuredData} /> : null
			
			<section className="lists">
				{
					movieList !== null && movieList.map((list, key) => (
						<MovieRow key={key} title={list.title} items={list.items} />
					))
				}
			</section>
		</div>
	);
}

export default App;
