import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";

class Navigation extends React.Component {
	render() {
		return (
			<Router>
				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation__item">
							<Link to="/" className="navigation__link">Index</Link>
						</li>
						<li className="navigation__item">
							<Link to="/about" className="navigation__link">About</Link>
						</li>
						<li className="navigation__item">
							<Link to="/contact" className="navigation__link">Contact</Link>
						</li>
					</ul>

					<Route exact path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</nav>
			</Router>
		);
	}
}

export default Navigation;
