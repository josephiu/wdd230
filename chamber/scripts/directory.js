const baseURL = "https://josephiu.github.io/wdd230";

const linksURL = "https://josephiu.github.io/wdd230/data/members.json";


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const htmlcards= document.querySelector(".cards");


//Calling the getMembersData function  in  async method using fetch

// Another way to cal the fetch and respons property
// fetch(linksURL)
//     .then((response) => response.json())
//     .then((json) => console.log(json));


async function getMembersData() {
    const response = await fetch(linksURL);
    const data = await response.json(); 
    //refrencing the data object of the members array                                          
    displayMembers(data);                                                                                     

    console.log(data); // temporary testing of data retreival
  
}
  
getMembersData();


//build a display cards for each item in our members array 
const displayMembers = (members) => {

    members.forEach((member) => {       
   

        let card = document.createElement("section");

        // let cName = document.createElement("h4");
        // let cLogo = document.createElement("img");
        // let tele = document.createElement("p");
        // let yeahJoin = document.createElement("p");
        // let mLevel = document.createElement("p");
        // let address = document.createElement("p");
        // let web = document.createElement("A");




        // "company_name": "Atlantic Amusements Inc. ",
        // "address":    "95, Al fahidi Street, New City, Abu Dhabi, UAE" ,
        // "phone_number": "+971 (0) 5 458 4194",
        // "joinYear": "1988",
        // "icon": "chamber/images/directory-image/atlantic.jpeg",
        // "membershipLevel": "Gold",
        // "website":"http://www.atlanticamusements.ie/"        


        //  Build the h2 content out to show the member's 
        cName.textContent = member.companies[0].company_name; 

        card.appendChild(cName);

        htmlcards.appendChild(card);        
    






    
    });

}






// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }
