// import { useState } from 'react';
import './App.css';
import RegistrationForm from './Registration';

function App() {
	return (
		<>
			<div className=" lg:h-screen bg-[#ff7a7a] bg-[url('../bg-intro-mobile.png')] bg-no-repeat bg-cover text-white text-center text-2xl lg:bg-[url('../bg-intro-desktop.png')]  lg:flex items-center  ">
				<div className='p-12 lg:pr-5 lg:pl-36 xl:pl-48 2xl:pl-64 lg:w-1/2 lg:text-start'>
					<h1 className='text-4xl lg:text-6xl lg:font-extrabold font-bold pt-12'>
						Learn to code by
						<br />
						watching others
					</h1>
					<p className='pt-8 px-2'>
						See how experienced developers solve problems in
						real-time. Watching scripted tutorials is great, but
						understanding how developers think is invaluable.
					</p>
				</div>
				<div className=' lg:w-1/2 lg:pl-5 lg:pr-36 xl:pr-48 2xl:pr-64'>
					<p className='rounded-2xl shadow-xl px-32 py-7 bg-[#6055a5] mx-12 drop-shadow-xl lg:text-xl'>
						<span className='font-bold'>Try it free 7 days</span>{' '}
						then $20/mo. thereafter
					</p>

					<div className='mt-10 text-gray-700'>
						<RegistrationForm />
					</div>
				</div>
			</div>
			<footer className=' bg-[#ff7a7a] text-white text-center text-sm font-bold'>
				<p className='attribution'>
					Challenge by{' '}
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noreferrer'>
						Frontend Mentor
					</a>
					. Coded by{' '}
					<a href='https://twitter.com/CyberRaff_'>Cyber Raff</a>.
				</p>
			</footer>
		</>
	);
}

export default App;
