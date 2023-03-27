import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
		<div className='gpt3__footer section__padding'>
			<div className='gpt3__footer-heading'>
				<h2 className='gradient__text'>Do you want to step into the future before others</h2>
			</div>
			<div className='gpt3__footer-btn'>
				<button>Request Early Access</button>
			</div>
			<div className='gpt3__footer-links'>
				<div className='gpt3__footer-links_logo'>
					<a href='#home'>
						<img
							src={gpt3Logo}
							alt='GPT3 Logo'
						/>
					</a>
					<p>
						Crechterwoord K12 182 DK Alkjkcb, <br /> All Rights Reserved
					</p>
				</div>
				<div className='gpt3__footer-link_div'>
					<div className='gpt3__footer-link_div-bar'></div>
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className='gpt3__footer-link_div'>
					<div className='gpt3__footer-link_div-bar'></div>
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className='gpt3__footer-link_div'>
					<div className='gpt3__footer-link_div-bar'></div>
					<h4>Get in Touch</h4>
					<p>Crechterwoord K12 182 DK Alkjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>
			<div className='gpt3__footer-copyright'>
				<p>© 2021 GPT-3, All Rights Reserved</p>
			</div>
		</div>
	);
}

export default Footer