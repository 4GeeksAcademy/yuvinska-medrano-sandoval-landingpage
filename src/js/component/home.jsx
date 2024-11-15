import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Pino",
		description: "Parque con lindos pinos",
	},
	{
		image: "https://picsum.photos/id/17/200/300",
		title: "Pasto",
		description: "lindo paisaje y el pasto de decoracion",
	},
	{
		image: "https://picsum.photos/id/28/200/300",
		title: "Arbusto",
		description: "Bosque lleno de arbusto",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "Nuves",
		description: "Montaña con nuves ",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;