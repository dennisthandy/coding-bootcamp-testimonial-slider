const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const testiImage = document.getElementById('testimonial-img');
const testiText = document.getElementById('testimonial-text');
const testiName = document.getElementById('testimonial-name');
const testiTitle = document.getElementById('testimonial-title');

const data = [
	{
		img: './public/images/image-tanya.jpg',
		review:
			'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
		name: 'Tanya Sinclair',
		title: 'UX Engineer',
	},
	{
		img: './public/images/image-john.jpg',
		review:
			'“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
		name: 'John Tarkpor',
		title: 'Junior Front-end Developer',
	},
];

let number = 0;

const infiniteLoop = () => {
	if (number == 0) {
		number = 1;
	} else {
		number = 0;
	}
};

prevButton.addEventListener('click', () => {
	infiniteLoop();
	testiImage.setAttribute('src', data[number].img);
	testiText.innerText = data[number].review;
	testiName.innerText = data[number].name;
	testiTitle.innerText = data[number].title;
});

nextButton.addEventListener('click', () => {
	infiniteLoop();
	testiImage.setAttribute('src', data[number].img);
	testiText.innerText = data[number].review;
	testiName.innerText = data[number].name;
	testiTitle.innerText = data[number].title;
});
