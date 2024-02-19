const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json(); 
    //refrencing the data object of the prophet array
    displayProphets(data.prophets);

    // console.table(data.prophets); // temporary testing of data retreival
  
}
  
getProphetData();



const displayProphets  = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {

        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDay = document.createElement("p");
        let birthPlace = document.createElement("p");




       

        //  Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 

    birthDay.textContent = `Date of Birth ${prophet.birthdate}`;

    birthPlace.textContent = `Place of Birth ${prophet.birthplace}`;




    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} `); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); 
    card.appendChild(birthDay)
    card.appendChild(birthPlace)
    
    card.appendChild(portrait);
    
    

    cards.appendChild(card);

    
  
    });
}