import './styles.css';
import {
	right,
	left,
	select,
	addELstners,
	resetTimer,
} from './modules/slideshow.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const slideshow = document.querySelector('.slides');
const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');

btnRight.addEventListener('click', () => {
	right(slideshow);
});

btnLeft.addEventListener('click', () => {
	left(slideshow);
});

select(slideshow);

addELstners(slideshow);

resetTimer(slideshow);
