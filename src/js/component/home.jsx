import React from "react";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    const navLinks = [
        { id: 1, label: 'Home', url: '#' },
        { id: 2, label: 'About', url: '#' },
        { id: 3, label: 'Services', url: '#' },
        { id: 4, label: 'Contact', url: '#' }
    ];

    return (
        <div>
            <Nav navIcon="Start Bootstrap" navLinks={navLinks}/>
            <div className="container-fluid px-4">
				<Jumbotron title="A Warm Welcom!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." btnJumbotron="Call to action!"/>
				<div className="row mb-4">
					<div className="col-md-3">
					<Card img="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." btnCard="Find Out More!"/>
					</div>
					<div className="col-md-3">
					<Card img="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." btnCard="Find Out More!"/>
					</div>
					<div className="col-md-3">
					<Card img="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." btnCard="Find Out More!"/>
					</div>
					<div className="col-md-3">
					<Card img="https://via.placeholder.com/500x325" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." btnCard="Find Out More!"/>
					</div>
				</div>
            </div>
            <Footer copy="Copyright &copy;" webName="Your Website"/>
		</div>
	);
};

export default Home;
