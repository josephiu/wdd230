

/*for password*/

const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#passwordMessage");




password2.addEventListener("focusout", CheckSamePassword);


function CheckSamePassword() {
    console.log("inside the function");

	if (password1.value !== password2.value) {
        console.log("not thesame");
		// message.textContent = " Password DO NOT MATCH!";
		// message.style.visibility = "show";
		// p2.style.backgroundColor = "#fff0f3";
		// p2.value = "";
		// p2.focus();
	} else {
        console.log("is thesame")
	// 	message.style.display = "none";
	// 	p2.style.backgroundColor = "#fff";
	// 	p2.style.color = "#000";
	}
}
