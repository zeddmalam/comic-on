*comics-on* module provides with a class which generates a comics. It's based on MUi.

# Installation

```
npm i @zeddmalam.com/comics-on --save
```

# Usage

```
import Comics from 'comics-on';

const amount = 1;

const papers = [
		{
			background: '/img/comics/map-bg.png',
			objects: [
				{
					img: '/img/comics/protege.png',
					position: 'center',
					message: {
						text: 'This is a big world. Would be nice to get some help here.',
						textPlacement: 'left-start',
						order: 1
					}
				},
			]
		},
		{
			background: '/img/comics/map-bg.png',
			objects: [
				{
					img: '/img/icon/ASSEMBLY_CONSTRUCTION.png',
					message: {
						text: 'Okay, next step... No rush...',
						textPlacement: 'right',
						order: 2
					},
					position: 'top-left'
				},
				{
					img: '/img/comics/protege.png',
					position: 'bottom-right',
					message: {
						text: 'That should be the place. I should go there!',
						textPlacement: 'left',
						order: 3
					}
				},
			]
		},
		{
			background: '/img/comics/bg-01.png',
			objects: [
				{
					img: '/img/comics/mentor.png',
					position: 'top-left',
					message: {
						text: 'Hi there! I\'m your mentor! I\'ll help you to grow and we\'ll do a lot of cool things together!',
						textPlacement: 'right-start',
						order: 4
					}
				},
				{
					img: '/img/comics/protege.png',
					position: 'bottom-right',
					message: {
						text: 'Okay!',
						textPlacement: 'left-end',
						order: 5
					}
				},
			]
		},
		{
			background: '/img/comics/bg-01.png',
			objects: [
				{
					img: '/img/comics/mentor.png',
					position: 'top-left',
					message: {
						text: amount ? 'See you later and here is a small gift for you' : 'See you later',
						order: 6
					}
				},
				{
					img: '/img/comics/protege.png',
					position: 'center',
					message: {
						text: amount ? 'Great! Thanks!' : 'See you!',
						order: 7,
						textPlacement: 'left'
					}
				},
			]
		},
	];


<Comics delay={250} papers={papers} />
```
## Positions

Each paper has 9 slots. position property determines which slot will be taken by which object.

top-left   | top    | top-right
----------------------------------
left       | center | right
----------------------------------
bottom-left| bottom | bottom-right

## Message placements

[MUI tooltips](https://mui.com/components/tooltips/#positioned-tooltips)


# Development

## Local build

```
npm run build
```

## Local start

```
npm start
```

## Local npm pack

```
npm pack
```

## Publish

```
npm login
npm publish --access public
```
