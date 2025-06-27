function right(slideshowElem) {
	const slideshow = slideshowElem;
	const style = slideshow.style;
	const pos = style.getPropertyValue('right');

	let posSliced = Number(pos.slice(0, pos.length - 2));
	posSliced += 400;

	if (posSliced > 1600) {
		posSliced = 0;
	}

	const newPos = posSliced + 'px';
	console.log(newPos);
	style.right = newPos;
}

function left(slideshowElem) {
	const slideshow = slideshowElem;
	const style = slideshow.style;
	const pos = style.getPropertyValue('right');

	let posSliced = Number(pos.slice(0, pos.length - 2));
	posSliced -= 400;

	if (posSliced < 0) {
		posSliced = 1600;
	}

	const newPos = posSliced + 'px';
	console.log(newPos);
	style.right = newPos;
}

export { right, left };
