/*----------------popup map--------------*/

const btnMap = document.querySelector('.btn__map');
const closeMap = document.querySelector('.close__map');
const mapPopup = document.querySelector('.map__popup');


btnMap.addEventListener('click', e =>{
	mapPopup.classList.add('full_width')

});

closeMap.addEventListener('click', e =>{
	mapPopup.classList.remove('full_width')
});

document.addEventListener('keydown', e =>{
	if (e.keyCode === 27) {
	mapPopup.classList.remove('full_width')
	}
});


/*----------------popup form tel--------------*/


const btnTel = document.querySelector('.head__tel__bottom')
const exitBtn = document.querySelector('.exit__btn');
const popupForm = document.querySelector('.popup__form__container')
const popupFormInner =document.querySelector('.poput__form__inner')



btnTel.addEventListener('click', e =>{
	popupForm.classList.remove('disabled')
})


exitBtn.addEventListener('click', e =>{
	popupForm.classList.add('disabled');
	}
)


document.addEventListener('keydown', e =>{
	if (e.keyCode === 27) {
	popupForm.classList.add('disabled');
	}
});

const inputCheckbox = document.querySelector('.input__checkbox')
const checkboxBlock = document.querySelector('.checkbox__block')
const btnSubmit = document.querySelector('.btn__submit')


inputCheckbox.addEventListener('change', e =>{
	if(inputCheckbox.checked == true){
		checkboxBlock.classList.add('checked')
		btnSubmit.disabled = false;
	}else{
		checkboxBlock.classList.remove('checked')
		btnSubmit.disabled = true;
	}
})



document.addEventListener('click', e =>{
	let click = e.composedPath()[0].className
	if(click !== 'poput__form__inner'){

	}
})
/*-----------------------header(menu)------------------------*/

const header = document.querySelector('.header')
const headerH = header.clientHeight / 3;

document.onscroll = () =>{
	let scroll = window.scrollY
	if(scroll > headerH){
		header.classList.add('fixed')
	}else{
		header.classList.remove('fixed')
	}
}


const burger = document.querySelector('.burger')

burger.addEventListener('click', e =>{
	if(header.classList.contains('burger-open')){
		header.classList.remove('burger-open')
	}else{
		header.classList.add('burger-open')
	}
});


/*-----------------------mask tel------------------------*/


const inputTel = document.querySelector('.input__tel')

const maskOptions = {
	mask: '+7 (0 0 0) 0 0 0 - 0 0 - 0 0',
	lazy:false
}

const mask = new IMask(inputTel, maskOptions);
