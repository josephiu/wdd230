


  /*making the ammbuger menue*/

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector('.menu-inside');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


