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
	}
}));

const pos2placement = {
	'top-left': 'right-start',
	'top': 'bottom',
	'top-right': 'bottom',
	'left': 'right',
	'center': 'top',
	'right': 'left',
	'bottom-left': 'top',
	'bottom': 'top',
	'bottom-right': 'left-start',
};

function Item({ paper, position, visibleMessages, tooltipZindex }) {
	return (<>
		{paper.objects.filter(o => o.position === position).map((o, oIndex) => o.message ? (<LightTooltip
				title={(<Badge badgeContent={o.message.order || 0} color="primary">{o.message.text}</Badge>)}
				arrow={!!o.img}
				open={visibleMessages >= (o.message.order || 0)}
				placement={o.message.textPlacement || pos2placement[position]}
				PopperProps={{
					style:{zIndex:tooltipZindex}
				}}
				key={`object-${oIndex}`}>
				{o.img ? (<img height={128} src={o.img} alt="" />) : <span>&nbsp;</span>}
			</LightTooltip>) : (<img height={128} src={o.img} alt="" key={`object-${oIndex}`}/>)
		)}
	</>);
}

export default function Comics({ papers, delay = 500, tooltipZindex=1500 }) {
	const [visibleMessages, setVisibleMessages] = useState(0);

	useEffect(() => {
		const count = papers.reduce((accu, p) => Math.max(accu, ...p.objects.map(o => (o.message || {order:0}).order)), 0);
		if (visibleMessages >= count) {
			return;
		}
		const interval = setInterval(() => {
			setVisibleMessages(visibleMessages + 1);
		}, delay);
		return () => clearInterval(interval);
	}, [visibleMessages, papers, delay]);

	return (<Grid container spacing={2} style={{ backgroundColor: '#ffffff' }}>
		{papers.map((paper, index) => {
			const leftWidth = '128px';//paper.objects.filter(o => ['top-left', 'left', 'bottom-left'].includes(o.position)).length ? '128px' : null;
			const centerWidth = paper.objects.filter(o => ['top', 'center', 'bottom'].includes(o.position)).length ? '128px' : null;
			const rightWidth = paper.objects.filter(o => ['top-right', 'right', 'bottom-right'].includes(o.position)).length ? '128px' : null;
			
			const topHeight = '128px';//paper.objects.filter(o => ['top-left', 'top', 'top-right'].includes(o.position)).length ? '128px' : null;
			const centerHeight = paper.objects.filter(o => ['left', 'center', 'right'].includes(o.position)).length ? '128px' : null;
			const bottomHeight = paper.objects.filter(o => ['bottom-left', 'bottom', 'bottom-right'].includes(o.position)).length ? '128px' : null;
			return (<Grid item xs={12} md={papers.length === 1 ? 12 : 6} key={`card-${index}`}><Card component={Paper} elevation={8} style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${paper.background})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}>
				<CardContent>
					{/*<Grid container>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="top-left"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="top"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="top-right"/></Grid>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="left"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="center"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="right"/></Grid>
						<Grid item xs={4} align="left"><Item paper={paper} visibleMessages={visibleMessages} position="bottom-left"/></Grid>
						<Grid item xs={4}><Item paper={paper} visibleMessages={visibleMessages} position="bottom"/></Grid>
						<Grid item xs={4} align="right"><Item paper={paper} visibleMessages={visibleMessages} position="bottom-right"/></Grid>
					</Grid>*/}
					<table style={{ minWidth: '100%' }}>
						<tbody>
							<tr>
								<td style={{ textAlign: 'left', verticalAlign:'center',   width: leftWidth,   height: topHeight}}><Item paper={paper} visibleMessages={visibleMessages} position="top-left" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'center', verticalAlign:'center', width: centerWidth, height: topHeight}}><Item paper={paper} visibleMessages={visibleMessages} position="top" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'right', verticalAlign:'center',  width: rightWidth,  height: topHeight}}><Item paper={paper} visibleMessages={visibleMessages} position="top-right" tooltipZindex={tooltipZindex}/></td>
							</tr>
							<tr>
								<td style={{ textAlign: 'left', verticalAlign:'center',   width: leftWidth,   height: centerHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="left" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'center', verticalAlign:'center', width: centerWidth, height: centerHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="center" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'right', verticalAlign:'center',  width: rightWidth,  height: centerHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="right" tooltipZindex={tooltipZindex}/></td>
							</tr>
							<tr>
								<td style={{ textAlign: 'left', verticalAlign:'center',   width: leftWidth,   height: bottomHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="bottom-left" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'center', verticalAlign:'center', width: centerWidth, height: bottomHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="bottom" tooltipZindex={tooltipZindex}/></td>
								<td style={{ textAlign: 'right', verticalAlign:'center',  width: rightWidth,  height: bottomHeight }}><Item paper={paper} visibleMessages={visibleMessages} position="bottom-right" tooltipZindex={tooltipZindex}/></td>
							</tr>
						</tbody>
					</table>
				</CardContent></Card></Grid>);
		})}
	</Grid>);
}
