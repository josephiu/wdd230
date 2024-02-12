//// ------- join --------///



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





    const datE = document.querySelector("#datetime")
    console.log(oLastModif);
    
    datE.value = oLastModif ;



//     var d = new Date();

// // Set the value of the "date" field
// document.getElementById("date").value = d.toDateString();

// // Set the value of the "time" field
// var hours = d.getHours();
// var mins = d.getMinutes();
// var seconds = d.getSeconds();
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

    
    