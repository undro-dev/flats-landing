const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
};

mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach(input => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = '';
	});
	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = '';
	});
});

ymaps.ready(init);
function init() {
	var myMap = new ymaps.Map('map', {
		center: [59.943543, 30.338928],
		zoom: 16,
	});
	(myGeoObject = new ymaps.GeoObject(
		{
			geometry: {
				type: 'Point',
				coordinates: [59.943543, 30.338928],
			},
		},
		{
			preset: 'islands#blackStretchyIcon',
			draggable: false,
		}
	)),
		myMap.geoObjects.add(myGeoObject);
}
