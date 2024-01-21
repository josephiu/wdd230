// Set up the Date format object parameter for toLocaleDateString method.
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


  /*making the ammbuger menue*/

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.myNav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



// making a dark mode them



const modeButton = document.querySelector("#darktheme");
const main = document.querySelector("main");
// const aandp = document.querySelector("section");
const aandp = document.querySelector(".card");
const si = document.querySelector("#card2");







modeButton.addEventListener("click", () => {
	if(main.classList.toggle('dark')){
    main.style.background = "#000";
    main.style.color = "#fff";
    aandp.style.backgroundColor = "#f7f4e6";
    si.style.backgroundColor = "#f7f4e6";

    


  

   
  }
  else {
    main.style.background = "#eee";
    main.style.color = "#000"; 
    
    aandp.style.backgroundColor = "white";
    si.style.backgroundColor = "white";


    

    
  };
 
	
});

// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("🕶️")) {
// 		main.style.background = "#000";
// 		main.style.color = "#fff";
// 		modeButton.textContent = "🔆";
// 	} else {
// 		main.style.background = "#eee";
// 		main.style.color = "#000";
//     main.
// 		modeButton.textContent = "🕶️";
// 	}
// });
