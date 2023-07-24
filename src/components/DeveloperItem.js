import React from 'react';

export const DeveloperItem = ({
	image,
	name,
	title, 
	association,
	linkedin,
	github,
	contact,
	title_description,
	bio,
	tech_stack}) => {
	return (

		<div className='card-container'>
			<div className='cardSlot'>
				<div className="card">
						<img src={image} alt="team-member"/>
						<h1 name={name}>{name}</h1>
						<p className="title">{title}</p>
						<p>{association}</p>
						<div className='social-links'> 
							<a href={linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>  

							<a href={github} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a> 
						</div>
						<p><button>Contact</button></p>
				</div>

				<div className='think-bubbles'>
					<div className="speech-wrapper">
						<div className="bubble">
							<div className="txt">
								<p className="name">{title}</p>
								<p className="message">{title_description}</p>
							</div>
						<div className="bubble-arrow"></div>
						</div>
					</div>

					<div className="speech-wrapper">
						<div className="bubble">
							<div className="txt">
								<p className="name">Bio</p>
								<p className="message">{bio}</p>
							</div>
							<div className="bubble-arrow"></div>
						</div>
					</div>

					<div className="speech-wrapper">
						<div className="bubble">
							<div className="txt">
								<p className="name">Tech Stack</p>
								<ul className="message" >
									{tech_stack.map((skill, index) => (
										<li key={index}>{skill}</li>
									))}
								</ul>
							</div>
							<div className="bubble-arrow"></div>
						</div>
					</div>
					
				</div>
			</div>
		</div>		
	)
} 