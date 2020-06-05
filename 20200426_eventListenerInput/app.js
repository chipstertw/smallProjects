const form = document.querySelector('#form');
const creditcard = document.querySelector('#creditcard');
const termsChecbox = document.querySelector('#cb');
const veggie = document.querySelector('#veggie');

const formData = { vg: veggie.value };

for (let input of [ creditcard, termsChecbox, veggie ]) {
	input.addEventListener('input', ({ target }) => {
		//destructure target in param, it takes HTML objects, and create key: target in an obj
		const { name, type, value, checked } = target; //destructure 4 elemts from object target (replace event.target)
		formData[name] = type === 'checkbox' ? checked : value; //target.value
		console.log(formData[name]);
		console.log(formData);
	});
}

// creditcard.addEventListener('input', (e) => {
// 	formData['Credit Card Number'] = e.target.value;
// });

// termsChecbox.addEventListener('input', (e) => {
// 	formData['Terms'] = e.target.checked;
// });

// veggie.addEventListener('input', (e) => {
// 	console.log(e);
// 	formData['Veggie'] = e.target.value;
// });
