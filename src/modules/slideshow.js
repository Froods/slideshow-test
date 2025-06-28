const timeouts = [];

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
	style.right = newPos;

	select(slideshow);
	resetTimer(slideshow);
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
	style.right = newPos;

	select(slideshow);
	resetTimer(slideshow);
}

function select(slideshowElem) {
	clearSelectedClass();
	const curslide = slideshowElem;
	const style = curslide.style;
	for (let px = 0; px <= 1600; px += 400) {
		const pos = Number(style.right.slice(0, style.right.length - 2));

		if (pos === px) {
			if (px === 0) {
				const dot = document.querySelector('#dot-1');
				dot.classList.add('selected');
			} else {
				const nDot = px / 400 + 1;
				const dot = document.querySelector(`#dot-${nDot}`);
				dot.classList.add('selected');
			}
		}
	}
}

function clearSelectedClass() {
	for (let i = 1; i <= 5; i++) {
		const dot = document.querySelector(`#dot-${i}`);
		if (dot.classList.contains('selected')) {
			dot.classList.remove('selected');
		}
	}
}

function addELstners(slideshowElem) {
	const dots = document.querySelectorAll('.dot');
	const style = slideshowElem.style;
	dots.forEach((dot) => {
		dot.addEventListener('click', () => {
			const n = Number(dot.id.slice(4, 5));
			const px = n * 400 - 400;
			style.right = px + 'px';
			select(slideshowElem);
			resetTimer(slideshowElem);
		});
	});
}

function resetTimer(slideshowElem) {
	timeouts.forEach((timeout, index) => {
		clearTimeout(timeout);
		timeouts.splice(index, index);
	});
	timeouts.push(
		setTimeout(() => {
			right(slideshowElem);
		}, 5000),
	);
}

export { right, left, select, addELstners, resetTimer };
