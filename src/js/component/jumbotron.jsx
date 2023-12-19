import React from "react";

const Jumbotron = props =>{
    return (
        <div className="my-4">
            <div className="card bg-light">
                <div className="card-body">
                    <h1 className="card-title">{props.title}</h1>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.btnJumbotron}</a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
