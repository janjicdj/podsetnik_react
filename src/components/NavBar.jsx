import React from 'react';
import {RiDraftFill} from "react-icons/ri";
import {Link} from "react-router-dom";
import PrikazStanjaB from "./PrikazStanjaB";

const NavBar = ({zavrseni,ukupno}) => {
    return (

        <nav className="navbar navbar-expand-xl navbar-light bg-light ">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <RiDraftFill size={40}/>Podsetnik</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                        aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link to="/novaB">
                                <button className="btn btn-outline-danger" type="button">Nova beleška</button>
                            </Link>
                        </li>
                    </ul>
                    <PrikazStanjaB className="container" zavrseni={zavrseni} ukupno={ukupno}/>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Pretraga" aria-label="Pretraga" />
                            <button className="btn btn-outline-success" type="submit">Pretraga</button>
                    </form>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;
