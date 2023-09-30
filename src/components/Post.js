import React, { useState } from 'react';

const Post = ({ data, setTitle }) => {
	const { title, author, date, tags, body, isPublished } = data;

	const [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount((prevState) => prevState + 1);
		setTitle(title);
	};

	return (
		<div className="post">
			<div className="post-heading">
				<h2>{title}</h2>
				{isPublished ? <p>{body}</p> : 'Coming soon!'}
			</div>
			<div className="post-author">Author: {author}</div>
			<div className="post-date">Published: {date}</div>
			<div>
				<button onClick={clickHandler}>Like</button>
				<span>Likes: {count}</span>
			</div>
			<h3>Tags:</h3>
			<ul>
				{tags.map((tag, index) => (
					<li key={index}>{tag}</li>
				))}
			</ul>
		</div>
	);
};

export default Post;
