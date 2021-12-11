import './App.css';
import Comics from './lib';

function App() {
	return (
		<>
			<Comics papers={[
				{
					background: '',
					objects: [
						{
							type: 'mentor',
							position: 'top-start',
							message: {
								text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!',
								textPlacement: 'right',
								order: 1
							},
							action: 'look-bottom-right'
						},
						{
							type: 'protege',
							position: 'bottom-end',
							message: { text: 'Oh, cool!', order: 2 },
							action: 'look-top-left'
						},
					]
				},
				{
					background: '',
					objects: [
						{
							type: 'mentor',
							position: 'bottom-start',
							message: { 
								text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!', 
								textPlacement: 'top',
								order: 3 
							},
							action: 'look-bottom-right'
						},
						{
							type: 'protege',
							position: 'top-end',
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
					background: '',
					objects: [
						{
							type: 'mentor',
							position: 'left',
							message: {
								text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!',
								textPlacement: 'right-start',
								order: 5
							},
							action: 'look-bottom-right'
						},
						{
							type: 'protege',
							position: 'bottom-end',
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
					background: '',
					objects: [
						{
							type: 'mentor',
							position: 'top-start',
							message: { text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things here!', order: 7 },
							action: 'look-bottom-right'
						},
						{
							type: 'protege',
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
