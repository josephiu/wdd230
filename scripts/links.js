const baseURL = "https://josephiu.github.io/wdd230";

const linksURL = "https://josephiu.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
     displayLinks(data);
  }
  
  getLinks();


function displayLinks (data)  {
    // card build code goes here

    const generalCard = document.querySelector(".fromjs");
    
        
    const week1 = document.createElement("li");
    const week2 = document.createElement("li");
    const week3 = document.createElement("li");
    const week4 = document.createElement("li");
    const week5 = document.createElement("li");

    week1.innerHTML = `Week01: <a href="${data.weeks[0].links[0].url}"> ${data.weeks[0].links[0].title}</a> | <a href="${data.weeks[0].links[1].url}"> ${data.weeks[0].links[1].title}</a>`;

    week2.innerHTML = `Week02: <a href="${data.weeks[1].links[0].url}"> ${data.weeks[1].links[0].title}</a> | <a href="${data.weeks[1].links[1].url}"> ${data.weeks[1].links[1].title}</a> | <a href="${data.weeks[1].links[2].url}"> ${data.weeks[1].links[2].title}</a>`;

    week3.innerHTML = `Week03: <a href="${data.weeks[2].links[0].url}"> ${data.weeks[2].links[0].title}</a> | <a href="${data.weeks[2].links[1].url}"> ${data.weeks[2].links[1].title}</a> | <a href="${data.weeks[2].links[2].url}"> ${data.weeks[2].links[2].title}</a> | <a href="${data.weeks[2].links[3].url}"> ${data.weeks[2].links[3].title}</a>`;
    
    week4.innerHTML = `Week04: <a href="${data.weeks[3].links[0].url}"> ${data.weeks[3].links[0].title}</a> | <a href="${data.weeks[3].links[1].url}"> ${data.weeks[3].links[1].title}</a> | <a href="${data.weeks[3].links[2].url}"> ${data.weeks[3].links[2].title}</a> | <a href="${data.weeks[3].links[3].url}"> ${data.weeks[3].links[3].title}</a>`;

    week5.innerHTML = `Week05: <a href="${data.weeks[4].links[0].url}"> ${data.weeks[4].links[0].title}</a> | <a href="${data.weeks[4].links[1].url}"> ${data.weeks[4].links[1].title}</a> | <a href="${data.weeks[4].links[2].url}"> ${data.weeks[4].links[2].title}</a> | <a href="${data.weeks[4].links[3].url}"> ${data.weeks[4].links[3].title}</a>`;




    // const anchor1a = document.createElement("A");
    // const text1a = document.createTextNode("Tutorials");

    // anchor1a.setAttribute("href", "https://www.w3schools.com");

    generalCard.appendChild(week1);
    generalCard.appendChild(week2);
    generalCard.appendChild(week3);
    generalCard.appendChild(week4);
    generalCard.appendChild(week5);















    week1.innerHTML(anchor1a)
  

    
}





