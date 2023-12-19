import React from "react";

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">{props.navIcon}</a>
                <button className="navbar-toggler navbar-toggler-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {props.navLinks.map(link => (
                            <a key={link.id} className="nav-link active text-light" href={link.url}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
