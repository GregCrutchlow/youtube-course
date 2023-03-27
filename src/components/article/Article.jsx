import React from 'react';
import './article.css';


const Article = ({ imgUrl, title, date, link }) => {
  return (
		<div className='gpt3__blog-container_article'>
			<div className='gpt3__blog-container_article-image'>
				<a href={link}>
					<img
						src={imgUrl}
						alt='blog'
					/>
				</a>
			</div>
			<div className='gpt3__blog-container_article-content'>
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
					<a href={link}>Read Full Article</a>
				</div>
			</div>
		</div>
  );
}

export default Article