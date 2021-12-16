import './App.css';
import Comics from './lib';

function App() {
	return (
		<>
			<Comics tooltipZindex={1200} papers={[
				{
					background: '/img/comics/bg-01.png',
					objects: [
						{
							img: '/img/comics/protege.png',
							position: 'center',
							message: { text: 'Oh, cool!', order: 2 },
							action: 'look-top-left'
						},
					]
				},
				{
					background: '/img/comics/bg-01.png',
					objects: [
						{
							img: '/img/comics/mentor.png',
							position: 'bottom-left',
							message: { 
								text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!', 
								textPlacement: 'top',
								order: 3 
							},
							action: 'look-bottom-right'
						},
						{
							img: '/img/comics/protege.png',
							position: 'top-right',
							message: { 
								text: 'Okay...', 
								textPlacement: 'bottom',
								order: 4 
							},
							action: 'look-top-left'
						},
					]
				},
				{
					background: '/img/comics/bg-01.png',
					objects: [
						{
							img: '/img/comics/mentor.png',
							position: 'left',
							message: {
								text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!',
								textPlacement: 'right-start',
								order: 5
							},
							action: 'look-bottom-right'
						},
						{
							img: '/img/comics/protege.png',
							position: 'bottom-right',
							message: {
								text: 'You are weird..',
								textPlacement: 'left-end',
								order: 6
							},
							action: 'look-top-left'
						},
					]
				},
				{
					background: '/img/comics/bg-01.png',
					objects: [
						{
							img: '/img/comics/mentor.png',
							position: 'top-left',
							message: { text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!', order: 7 },
							action: 'look-bottom-right'
						},
						{
							img: '/img/comics/protege.png',
							position: 'center',
							message: { 
									text: 'Take the cookie!', 
									order: 8, 
									textPlacement: 'left',
									action: 'YES' },
							action: 'look-top-left'
						},
					]
				},
			]} />
		</>
	);
}

export default App;
