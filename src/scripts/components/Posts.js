import React from "react";

class Posts extends React.Component {
    render() {
        const postItems = [
            {
                id: 1,
                title: "Post #1",
                author: "Vladimir Galynsky",
                time: "01.05.17 14:00:05",
                text: "Post#1 Text"
            },
            {
                id: 2,
                title: "Post #2",
                author: "Vladimir Galynsky",
                time: "02.05.17 15:00:05",
                text: "Post#2 Text"
            },
            {
                id: 3,
                title: "Post #3",
                author: "Vladimir Galynsky",
                time: "03.05.17 16:00:05",
                text: "Post#3 Text"
            }
        ];

        let PostsList = postItems.map((item) => {
                return (
                    <li key={item.id} className="post">
    					<div className="post-wrapper">
    						<div className="post-header">
    							<h1 className="post__title">{item.title}</h1>
    							<ul className="post-list">
    								<li className="post-list__item">
    									<img src="assets/icons/author.svg" className="post__icon" />
    									<p className="post__info">{item.author}</p>
    								</li>
    								<li className="post-list__item">
    									<img src="assets/icons/date.svg" className="post__icon" />
    									<p className="post__info">{item.time}</p>
    								</li>
    							</ul>
    						</div>
    						<p className="post__text">{item.text}</p>
    					</div>
    				</li>
                );
            });

        return (
            <ul className="posts">
                { PostsList }
			</ul>
        );
    }
}

export default Posts;
