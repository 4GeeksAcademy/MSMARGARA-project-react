import React from "react";

const Card = props =>{
	return (
		<div className="mb-4 mb-md-0">
			<div className="card text-center">
				<img src={props.img} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">{props.btnCard}</a>
				</div>
			</div>
		</div>
	)
}

export default Card;