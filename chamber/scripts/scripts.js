


  /*making the ammbuger menue*/

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector('.menu-inside');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const options = {
    // month: "short",
    // day: "numeric",
      year: "numeric" //for the assignment i only need this year only
    };
  
  // Question #5 (change)
  const currentYear = document.querySelector('#year');
  currentYear.innerHTML = new Date().toLocaleDateString("en-US", options);

  //using a last modifiled object
  let oLastModif = new Date(document.lastModified)

  document.querySelector("#lastModified").textContent = `Last Modified: ${oLastModif}.`;
