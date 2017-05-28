import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Posts />
			</div>
		);
	}
}

export default App;
