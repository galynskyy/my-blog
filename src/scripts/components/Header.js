import React from "react";
import Navigation from "../components/Navigation";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-wrapper">
					<div className="header-brand">
						<h1 className="header__title">My Blog</h1>
					</div>
					<Navigation />
				</div>
			</div>
		);
	}
}

export default Header;
