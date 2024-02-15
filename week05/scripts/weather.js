// SELTECT HTML ELEMENTS IN THE DOCUMENT
const currentTemp = document.querySelector("#current-temp");
const weatheIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=17bec3e286d041d570e41d41ce1bd59f"

async function apiFecth() {
    try {             
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
             console.log(data); // this will test it to the browser inspector console
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatheIcon.setAttribute("src",iconsrc);
    weatheIcon.setAttribute("alt", "image of day weather");
    captionDesc.textContent = `${desc}`;
}
