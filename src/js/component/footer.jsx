import React from "react";

const Footer = props => {
	return (
	  <footer className="footer py-3 bg-dark text-center text-light mt-0">
		<div className="container">
		  <span>{props.copy} {new Date().getFullYear()} {props.webName}</span>
		</div>
	  </footer>
	);
};

export default Footer;
