import React, { Component, useState, } from 'react'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Mapmobile from '../img/map-mobil.gif';
import ChooseOne from '../img/Choose-1.jpg';
import ChooseTwo from '../img/Choose-2.jpg';
import ChooseThree from '../img/Choose-3.jpg';
import ChooseFour from '../img/Choose-4.jpg';
import ChooseFive from '../img/Choose-5.jpg';
import Teamicon from '../img/team-icon.png';
import Teamicon2 from '../img/team-icon-2.svg';
import Teamicon3 from '../img/team-icon-3.svg';
import Teamicon4 from '../img/team-icon-4.svg';
import Teamicon5 from '../img/team-icon-5.svg';
import Teamicon6 from '../img/team-icon-6.svg';
import Teamicon7 from '../img/team-icon-7.svg';
import ResultOne from '../img/result-1.jpg';
import Result1 from '../img/results/results-1.jpg';
import Result2 from '../img/results/results-2.jpg';
import Result3 from '../img/results/results-3.jpg';
import Result4 from '../img/results/results-4.jpg';
import Result5 from '../img/results/results-5.jpg';
import Result6 from '../img/results/results-6.jpg';
import Result7 from '../img/results/results-7.jpg';
import Result8 from '../img/results/results-8.jpg';
import Result9 from '../img/results/results-9.jpg';
import Result10 from '../img/results/results-10.jpg';
import Result11 from '../img/results/results-11.jpg';
import Result12 from '../img/results/results-12.jpg';
import Result13 from '../img/results/results-13.jpg';
import Result14 from '../img/results/results-14.jpg';
import Result15 from '../img/results/results-15.jpg';
import Result16 from '../img/results/results-16.jpg';
import Result17 from '../img/results/results-17.jpg';
import Result18 from '../img/results/results-18.jpg';
import Result19 from '../img/results/results-19.jpg';
import Result20 from '../img/results/results-20.jpg';
import Result21 from '../img/results/results-21.jpg';
import Result22 from '../img/results/results-22.jpg';

import ResultLogoOne from '../img/result-logo.jpg';
import ResultLogoTwo from '../img/result-logo2.jpg';
import ResultLogoThree from '../img/result-logo3.jpg';
import ResultLogoFour from '../img/result-logo4.jpg';
import ResultLogoFive from '../img/result-logo5.jpg';
import WhatwedoOne from '../img/what-de-do-1.png';
import Whatwedotwo from '../img/what-de-do-2.png';
import WhatwedoThree from '../img/what-de-do-3.png';
import WhatwedoFour from '../img/what-de-do-4.png';
import WhatwedoFive from '../img/what-de-do-5.png';
import WhatwedoSix from '../img/what-de-do-6.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import ResultLogo1 from '../img/results/results-logo-1.jpg';
import ResultLogo2 from '../img/results/results-logo-2.jpg';
import ResultLogo3 from '../img/results/results-logo-3.jpg';
import ResultLogo4 from '../img/results/results-logo-4.jpg';
import ResultLogo5 from '../img/results/results-logo-5.jpg';
import ResultLogo6 from '../img/results/results-logo-6.jpg';
import ResultLogo7 from '../img/results/results-logo-7.jpg';
import ResultLogo8 from '../img/results/results-logo-8.jpg';
import ResultLogo9 from '../img/results/results-logo-9.jpg';
import ResultLogo10 from '../img/results/results-logo-10.jpg';
import ResultLogo11 from '../img/results/results-logo-11.jpg';
import ResultLogo12 from '../img/results/results-logo-12.jpg';
import ResultLogo13 from '../img/results/results-logo-13.jpg';
import ResultLogo14 from '../img/results/results-logo-14.jpg';
import ResultLogo15 from '../img/results/results-logo-15.jpg';
import ResultLogo16 from '../img/results/results-logo-16.jpg';
import ResultLogo17 from '../img/results/results-logo-17.jpg';
import ResultLogo18 from '../img/results/results-logo-18.jpg';
import ResultLogo19 from '../img/results/results-logo-19.jpg';
import ResultLogo20 from '../img/results/results-logo-20.jpg';
import ResultLogo21 from '../img/results/results-logo-21.jpg';
import ResultLogo22 from '../img/results/results-logo-22.jpg';
import DoTwo from '../img/do-2.png';
import DoThree from '../img/do-3.png';
import DoFour from '../img/do-4.png';
import DoFive from '../img/do-5.png';
import DoSix from '../img/do-6.png';
import DoSeven from '../img/do-7.png';
import DoEight from '../img/do-8.png';
import countries from '../img/countries.jpg';
import Slider from '../component/Home/slider.js';
import CountOne from '../Count/CountOne.js';
import CountTwo from '../Count/CountTwo.js';
import CountThree from '../Count/CountThree.js';
import Testimonials from '../component/Home/Testimonials';
import CountFour from '../Count/CountFour';
import CountFive from '../Count/CountFive.js';
import CountSix from '../Count/CountSix.js';
import CountSeven from '../Count/CountSeven.js';
import CountEight from '../Count/CountEight.js';
import CountNine from '../Count/CountNine.js';
import MapGif from '../component/Home/MapGif.js';
import InstagramApi from '../component/Home/InstagramApi.js';
import Facebook from '../img/facebook2.png';
import IN from '../img/in2.png';
import Insta from '../img/insta2.png';
import Tw from '../img/tw2.png';
import Youtube from '../img/youtube2.png';
import HomeEvent from '../component/Home/HomeEvent';
import RecentHome from '../component/Home/RecentHome';
import Marquee from "react-fast-marquee";
import Delphi from '../img/Delphi.mp4';



export default class Home extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {

		return (
			<>
			
			<Helmet>
              <title>Athena Education</title> 
			  <meta name="description" content="Athena Education was founded nine years ago by two Princeton graduates, passionate about bringing visionary education to India. They founded Athena to enable high-school students to receive a world-class education, gain admission into Ivy League and other elite universities worldwide, and become the best version of themselves. Our robust team of writing counseling experts, in-house tech, research, and art mentors, and Harvard admissions consultant provide one-on-one support in all areas—from extracurricular profile development, college applications, and even essential life-skill building. Athena Education is now a leading education consulting firm modeled after the Ivy Leagues with students in fifteen countries."/>
          </Helmet>
	  
	 
			<div>
				
				<Slider />
				<section className='recent-acceptance-home-frame home-new heading'>
					<div className="container">
						<h1>Our recent acceptances</h1> 
						<RecentHome />
					</div>
				</section>
				<section className='why-choese-us-home-page mobile'>
					<div className="container">
						<div className='why-choese-us-home-page-heading'>
							<h3>Why Choose Us</h3>
							<h2 className='Endless-possibilities'>Endless possibilities <span className='begin-n'>begin here</span></h2>
						</div>
						<div className='why-choese-us-home-page-heading-middle'>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={countries} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon7} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<p className='Served_home'>Served</p>
										<h4>
											<CountFour />
										</h4>
										<p><span className='none'>Served</span> Students from <span>15 countries</span></p>
									</div>
								</div>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseOne} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon2} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountFive />
										</h4>
										<p>elite university admissions</p>
									</div>
								</div>

							</div>
							<div className='why-choese-us-home-page-heading-middle-left '>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseTwo} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon3} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountSix />
										</h4>
										<p>students got the university of their choice</p>
									</div>
								</div>


							</div>
							<div className='why-choese-us-home-page-heading-middle-left new'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseThree} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon4} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountSeven />
										</h4>
										<p>acceptances in 2022</p>
									</div>
								</div>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseFour} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon5} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountEight />
										</h4>
										<p>acceptances over 8 years</p>
									</div>
								</div>

							</div>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseFive} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon6} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountNine />
										</h4>
										<p>more likely to be accepted to elite universities in the US</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
				<section className='student-top-collage-section-us-uk home-page-new'>
					<div className="container--">
						<div className='student-top-collage-section-us-uk-left'>
							<div className='why-choese-us-home-page-heading'>
								<h3>Who are we?</h3>
								<div className='student-top-collage-section-us-uk-lef-three'>
									<p>We are striving to transform the academic landscape through <span>holistic education consulting.</span> We help students navigate their journey to the top universities across the globe.</p>
								</div>
							</div>

							<div className='student-top-collage-section-us-uk-left-tow'>
								<div className='student-top-collage-section-us-uk-left-tow-border'></div>
								<ul>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoFour} alt="" />
											<p>Personalized</p>
										</div>

									</li>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoFive} alt="" />
											<p>Process-driven</p>
										</div>
									</li>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoSix} alt="" />
											<p>Excellence-oriented</p>
										</div>
									</li>
								</ul>
							</div>

						</div>
						<div className='student-top-collage-section-us-uk-right'>
							<section className='what-we-do-section-page'>


								<div className='what-we-do-section-page-right'>
									<div className='what-we-do-section-page-right-middle'>
										<div className='why-choese-us-home-page-heading'>
											<h3>What We Do?</h3>
											<h2>Chart your journey to <br /><span class="begin-n">education overseas </span></h2>
										</div>
										<ul>
											<li>
												<div className='what-we-do-image-frame'>
													<img src={WhatwedoOne} alt="" />
													<p>Extracurricular<br /> profile development</p>
												</div>
											</li>
											<li>
												<div className='what-we-do-image-frame'>
													<img src={Whatwedotwo} alt="" />
													<p>College applications <br /> support</p>
												</div>
											</li>
											<li>
												<div className='what-we-do-image-frame'>
													<img src={WhatwedoThree} alt="" />
													<p>Essential life-skill <br />building</p>
												</div>
											</li>
										</ul>
										<div className='footer-top-map-img-button'>
											<Link className='footer-top-map-img-button-link' to='/about-athena'> Learn more <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section >
				<section className='upcomming-event'>
					<div className="container">
						<HomeEvent />
					</div>
				</section>


				<section className='our-result-home nnn'>
					<div className="container--">
						<div className='why-choese-us-home-page-heading'>
							<h3>OUR RESULTS</h3>
							<h2>Acceptances since 2015</h2>
						</div>
						<Marquee loop="10" className='OUR-RESULTS-mar-home' speed="80" direction="left">

							<div className='marquee-section'>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result1} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												03
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo1} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result2} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												01
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo2} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result3} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												12
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo3} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result4} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												47
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo4} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result5} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												12
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo5} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result6} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												03
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo6} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result7} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												06
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo7} alt="" />
									</div>
								</div> 
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result8} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												09
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo8} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result9} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												11
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo9} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result10} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												04
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo10} alt="" />
									</div>

								</div>



								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result11} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												19
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo11} alt="" />
									</div>

								</div>

								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result13} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												09
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo13} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result14} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												13
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo14} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result15} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												76
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo15} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result16} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												06
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo16} alt="" />
									</div>

								</div>


								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result17} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												06
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo17} alt="" />
									</div>

								</div>

								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result20} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												30
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo20} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result21} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												24
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo21} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={Result22} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												122
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogo22} alt="" />
									</div>

								</div>
								
							</div>

						</Marquee>
					</div>
				</section >

				<section className='track-your-college  home-page-new man'>
					<div className="container">
						<div className='row'>
							<div className='col-md-5'>
								<div className='track-your-college-left desktop not'>
									<h3>Athena's proprietary tech platform</h3>
									<h2 className='Track-your-college-application'>Track your college application progress in real time</h2>
									<p>Delphi is a world-class tech platform that automates Athena’s dynamic processes and caters to the specific needs of all our students and their families.</p>
									<div className='track-your-college-left-link'>
										<a target="_blank" className='footer-top-map-img-button-link ' href='https://calendly.com/athenaeducation/counseling-webinar'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
									</div>
								</div>
							</div>
							<div className='col-md-7'>
								<div className='track-your-college-right-img video'>

									<div className='track-your-college-right-img-video-2'>
										<video width="100%" playsInline
											autoPlay
											loop
											muted>
											<source src={Delphi} type="video/mp4" />
										</video>
									</div>
								</div>
								<div className='track-your-college-left mobile none'>
									<p>Delphi is a world-class tech platform that automates Athena’s dynamic processes and caters to the specific needs of all our students and their families.</p>
									<div className='track-your-college-left-link'>
										<a target="_blank" className='footer-top-map-img-button-link ' href='https://calendly.com/athenaeducation/counseling-webinar'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='Testimonials-home-middle new-arrow'>
					<div className='Testimonials-home-middle-right track-your-college mobile none'>
						<div className='track-your-college-left'>
							<h3>Testimonials</h3>
							<h2>What people say about us!</h2>
							<p>We take pride in delivering utmost quality to all our students. Hear what they have to say about Athena Education.</p>

						</div>
					</div>
					<div className='Testimonials-home-middle-left'>
						<Testimonials />
					</div>
					<div className='Testimonials-home-middle-right track-your-college desktop'>
						<div className='track-your-college-left'>
							<h3>Testimonials</h3>
							<h2>What people say about us!</h2>
							<p>We take pride in delivering utmost quality to all our students. Hear what they have to say about Athena Education.</p>
							<div className='track-your-college-left-link'>
								<Link className='footer-top-map-img-button-link ' to='/testimonials'> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
							</div>
						</div>
					</div>
				</section>

				<section className='footer-top-map home-page-new'>
					<div className="container">
						<div className='footer-top-map-img'>
							<div className='map-home desktop'>
								<MapGif />
							</div>
							<div className='map-home mobile none'>
								<img src={Mapmobile} alt="" />
							</div>

							<h4>We are a leading education consulting firm with <span>students in more than 15 countries</span></h4>
						</div>
						<div className='footer-top-map-img-button'>
							<a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
						</div>

					</div>
				</section>

				<section className='instagram-main-frame track-your-college home-page-new'>
					<div className='instagram-pic-frame-button mobile none'>
						<InstagramApi />
					</div>
					<div className="container">
						<div className="track-your-college-left text-center instagram-m">
							<h3>Stay in touch</h3>
							<h2>Check us out on social media</h2>
							<p className='Want-to-know-how-we'>Want to know how we help students navigate the journey to the top universities across the globe? <span>Follow us on social media to join our community! </span></p>
						</div>
						<div className='instagram-page-scol'>
							<ul>
								<li>
									<a href="https://www.facebook.com/athenaeducationindia" target="_blank">
										<img src={Facebook} alt="" />
									</a>

								</li>
								<li>
									<a href="https://www.linkedin.com/company/athena-education-india " target="_blank">
										<img src={IN} alt="" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/athena_education/" target="_blank">
										<img src={Insta} alt="" />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/AthenaEduIndia" target="_blank">
										<img src={Tw} alt="" />
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/channel/UCfANEYz13Ey2vE_ziHVHBXQ/videos" target="_blank">
										<img src={Youtube} alt="" />
									</a>
								</li>
							</ul>
						</div>


					</div>
					<div className='instagram-pic-frame-button desktop'>
						<InstagramApi />
					</div>

				</section>


			</div >
			</>
		)
	}
}
