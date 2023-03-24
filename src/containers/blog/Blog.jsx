import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';


const Blog = () => {
    return (
		<div className='gpt3__blog section__padding'>
			<div className='gpt3__blog-heading'>
				<h2 className='gradient__text'>A lot is happening, we are blogging about it.</h2>
			</div>
			<div className='gpt3__blog-container'>
				<div className='gpt3__blog-container_groupA'>
					<Article
						imgUrl={blog1}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sept 26, 2022'
					/>
				</div>
				<div className='gpt3__blog-container_groupB'>
					<Article
						imgUrl={blog2}
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sept 26, 2022'
					/>
					<Article
						imgUrl={blog3}
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sept 26, 2022'
                        link="#"
					/>
					<Article
						imgUrl={blog4}
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sept 26, 2022'
					/>
					<Article
						imgUrl={blog5}
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sept 26, 2022'
					/>
				</div>
			</div>
		</div>
	);
}

export default Blog
