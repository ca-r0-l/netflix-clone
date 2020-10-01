import React, { useEffect, useState } from "react";
import "./App.css";

import * as Tmdb from "./Tmdb";
import MovieRow from "./component/MovieRow";
import FeaturedMovie from "./component/FeaturedMovie";
import Header from "./component/Header";

type MovieList = {
	title: string;
	slug: string;
	items: any[];
}

function App() {
	const [movieList, setMovieList] = useState([] as MovieList[]);
	const [featuredData, setFeatureData] = useState({});
	const [blackHeader, setBlackHeader] = useState(false);

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

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 50) {
				setBlackHeader(true)
			} else {
				setBlackHeader(false)
			}
		}

		window.addEventListener("scroll", scrollListener);

		return () => {
			window.removeEventListener("scroll", scrollListener)
		}
	}, []);

	return (
		<div className="page">
			<Header isBlackHeader={blackHeader} />

			<FeaturedMovie movie={featuredData} />
			
			<section className="lists">
				{
					movieList !== null && movieList.map((list, key) => (
						<MovieRow key={key} title={list.title} items={list.items} />
					))
				}
			</section>

			<footer>
				Feito com <span role="img" aria-label="Emoji de coração">❤</span> por Caroline Ribeiro. <br />
				Direitos de imagem para Netflix. <br />
				Dados pegos do site Themoviedb.org.
			</footer>
		</div>
	);
}

export default App;
