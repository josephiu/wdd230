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
const map = document.querySelector("#map");




modeButton.addEventListener("click", () => {
	if(main.classList.toggle('dark')){
    main.style.background = "#000";
    main.style.color = "#fff";
    aandp.style.backgroundColor = "#f7f4e6";
    si.style.backgroundColor = "#f7f4e6";
    map.style.backgroundColor = "black";

  

   
  }
  else {
    main.style.background = "#eee";
    main.style.color = "#000"; 
    
    aandp.style.backgroundColor = "white";
    si.style.backgroundColor = "white";
    map.style.backgroundColor = "white";    

    
  };
 
	
});


//populating the p span element with number of visit gotten from the localstorage


// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.




// ADDING WEATHER DYNAMICALLY USING THIRD PARTY WEATHER API


const cards = document.querySelector(".cards");




const cityName= document.createElement("h4");
const description = document.createElement("span");

const currentTemp = document.createElement("h5");
const weatheIcon = document.createElement("img");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=24.44&lon=54.37&units=imperial&appid=17bec3e286d041d570e41d41ce1bd59f"

async function apiFecth() {
    try {             
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //  console.log(data); // this will test it to the browser inspector console
             displayResults(data);

        }else {
            throw Error(await response.text());
        }

   } catch(error) {

    console.log(error);
   }

}
apiFecth()

function displayResults(data) {
    
  cityName.innerHTML = `${data.name} City, AE`;

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatheIcon.setAttribute("src",iconsrc);
    weatheIcon.setAttribute("alt", "image of day weather");
    description.textContent = `${desc}`;

        
    cards.appendChild(cityName);    
    cards.appendChild(weatheIcon);    
    cards.appendChild(currentTemp); 
    cards.appendChild(description);  


}

// //dynamically displaying my course card from jason

// const week1 = document.querySelector(".w1");
// const week2 = document.querySelector(".w2");
// const week3 = document.querySelector(".w3");
// const week4 = document.querySelector(".w4");
// const week5 = document.querySelector(".w5");

// fetch("data/links.json")
// // promise telling the computer to pass to json
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   week1.innerHTML = ` ${data.weeks[0].links[0].url}`;




// })













