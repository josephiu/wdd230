


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




  //populating the p span element with number of visit gotten from the localstorage

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;


// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");


const datandTimeofVisit = new Date( Date.now());
const datandTimeofVisitStr = datandTimeofVisit.toString();

const todayDateandTime = new Date(Date.now());


//const todayTime = todayDateandTime.getTime();

// then save the string form in local storage
localStorage.setItem('date', datandTimeofVisitStr);



//then get the string form from local storage on another page or wherever
const checkDateStr = localStorage.getItem('date');
const checkDate = new Date(checkDateStr);



const timestamp = todayDateandTime.getTime();


const differents = checkDate.getTime() - timestamp;



// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  if (differents < msToDays) {
    visitsDisplay.textContent = `Back so soon! Awesome! `;
    }else{
      visitsDisplay.textContent = ` You last visited ${ (differents /msToDays).toFixed(0) }days ago.`;
      
   }
  

	//visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);


