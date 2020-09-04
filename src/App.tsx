import React, { useEffect, useState } from "react";
import "./App.css";

import * as Tmdb from "./Tmdb";
import MovieRow from "./component/MovieRow";

type MovieList = {
	title: string;
	slug: string;
	items: any[];
}

function App() {
	const [movieList, setMovieList] = useState([] as MovieList[]);

	useEffect(() => {
		const loadAll = async () => {
			let list = await Tmdb.getHomeList();
			setMovieList(list);
		};

		loadAll();
	}, []);

	return (
		<div className="page">
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
