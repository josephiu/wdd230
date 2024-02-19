const baseURL = "https://josephiu.github.io/wdd230";

const linksURL = "https://josephiu.github.io/wdd230/data/members.json";


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");


//Calling the getMembersData function  in  async method using fetch

// Another way to cal the fetch and respons property
// fetch(linksURL)
//     .then((response) => response.json())
//     .then((json) => console.log(json));


async function getMembersData() {
    const response = await fetch(linksURL);
    const data = await response.json(); 
    //refrencing the data object of the prophet array                                          
    // displayProphets(data.prophets);


    
                                                                                      

    console.log(data); // temporary testing of data retreival
  
}
  
getMembersData();







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
