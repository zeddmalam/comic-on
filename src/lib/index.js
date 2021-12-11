import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';

const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11,
		maxWidth: '128px',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderRadius: '12px'
	},
	[`& .${tooltipClasses.arrow}`]: {
		color: 'rgba(0, 0, 0, 0.87)'
	},
}));

const pos2placement = {
	'top-start': 'right-start',
	'top': 'bottom',
	'top-end': 'bottom',
	'left': 'right',
	'center': 'top',
	'right': 'left',
	'bottom-start': 'top',
	'bottom': 'top',
	'bottom-end': 'left-start',
};

function Item({ paper, position, visibleMessages }) {
	return (<>
		{paper.objects.filter(o => o.position === position).map((o, oIndex) => (<LightTooltip
			title={(<Badge badgeContent={o.message.order || 0} color="primary"><br />{o.message.text}</Badge>)}
			arrow
			open={visibleMessages >= (o.message.order || 0)}
			placement={o.message.textPlacement || pos2placement[position]}
			key={`object-${oIndex}`}>
			<img height={128} src={`/img/comics/${o.type}.png`} alt={o.type} />
		</LightTooltip>))}
	</>);
}

export default function Comics({ papers, delay = 500 }) {
	const [visibleMessages, setVisibleMessages] = useState(0);

	useEffect(() => {
		const count = papers.reduce((accu, p) => Math.max(accu, ...p.objects.map(o => o.message.order)), 0);
		if (visibleMessages >= count) {
			return;
		}
		const interval = setInterval(() => {
			setVisibleMessages(visibleMessages + 1);
		}, delay);
		return () => clearInterval(interval);
	}, [visibleMessages, papers, delay]);

	return (<Grid container spacing={2} style={{ maxWidth: `${128 * 6 + 16}px`, backgroundColor: '#ffffff', padding:'16px' }}>
		{papers.map((paper, index) => (
			<Grid item xs={12} md={6} key={`card-${index}`}><Card component={Paper} elevation={8} style={{
				backgroundSize: 'cover',
				backgroundImage: 'url(/img/comics/bg-01.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}>
				<CardContent>
					{/*<Grid container>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="top-start"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="top"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="top-end"/></Grid>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="left"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="center"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="right"/></Grid>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="bottom-start"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="bottom"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="bottom-end"/></Grid>
					</Grid>*/}
					<table style={{ minWidth: '100%' }}>
						<tbody>
							<tr>
								<td style={{ textAlign: 'left' }}><Item paper={paper} visibleMessages={visibleMessages} position="top-start" /></td>
								<td><Item paper={paper} visibleMessages={visibleMessages} position="top" /></td>
								<td style={{ textAlign: 'right' }}><Item paper={paper} visibleMessages={visibleMessages} position="top-end" /></td>
							</tr>
							<tr>
								<td style={{ textAlign: 'left' }}><Item paper={paper} visibleMessages={visibleMessages} position="left" /></td>
								<td><Item paper={paper} visibleMessages={visibleMessages} position="center" /></td>
								<td style={{ textAlign: 'right' }}><Item paper={paper} visibleMessages={visibleMessages} position="right" /></td>
							</tr>
							<tr>
								<td style={{ textAlign: 'left' }}><Item paper={paper} visibleMessages={visibleMessages} position="bottom-start" /></td>
								<td><Item paper={paper} visibleMessages={visibleMessages} position="bottom" /></td>
								<td style={{ textAlign: 'right' }}><Item paper={paper} visibleMessages={visibleMessages} position="bottom-end" /></td>
							</tr>
						</tbody>
					</table>
				</CardContent></Card></Grid>
		))}
	</Grid>);
}
