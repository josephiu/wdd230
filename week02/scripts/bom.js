const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

/*adding a click to the button and checking if the input element is not empty*/

// button.addEventListener("click", () => {
// 	/* code checking of the input element is empty*/
// 	if (input.value != "") {
// 		console.log("not empty");
// 	} else {
// 		console.log("Box is empty");
// 	}
// });



button.addEventListener("click", () => {
    	

        /*creat a li element*/
    const li = document.createElement("li");

    /*creat a delete button*/
    const deletButton = document.createElement("button");

    /*populate the li elements textContent or innerHTML with the input value*/
    li.innerHTML = input.value;

    /*populate the button textContent with a ❌*/
    deletButton.textContent = "❌";

    /*append the li element with the delet button*/
    li.append(deletButton);

    /*append the li element to the unordered list in your HTML*/
    list.append(li);

    /*add an event listener to the delete button that removes the li element when clicked*/
    deletButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    });

    /*send the focus to the input element*/
    input.focus();

    /*change the input value to nothing or the empty string to clean up the interface for the user*/

    input.value = "";



});




