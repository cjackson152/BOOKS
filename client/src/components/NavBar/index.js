import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                       <span className="navbar-toggler-icon"></span> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to ="/" className="nav-link">Search <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ="/saved" className="nav-link">Saved</Link>
                                </li>
                                </ul>
                                </div>                
                                </nav>
                                </div>
        )
    }
}  
export default Navbar