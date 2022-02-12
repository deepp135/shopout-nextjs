import React from 'react';
import Advertise from '../components/Advertise';
import ChatPart from '../components/chatpart';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Slider from '../components/slider';
import VideoPart from '../components/videopart';

function Demo() {
	return (
		<div>
			<Navbar />
			<Advertise />
			<div className="chat-part">
				<VideoPart />
				<ChatPart />
			</div>
			<Slider />
			<Footer />
		</div>
	);
}

export default Demo;
