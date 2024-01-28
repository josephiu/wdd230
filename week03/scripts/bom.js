const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



/************************************************************* */


// button.addEventListener("click", () => {
    	

//         /*creat a li element*/
//     const li = document.createElement("li");

//     /*creat a delete button*/
//     const deletButton = document.createElement("button");

//     /*populate the li elements textContent or innerHTML with the input value*/
//     li.innerHTML = input.value;

//     /*populate the button textContent with a ❌*/
//     deletButton.textContent = "❌";

//     /*append the li element with the delet button*/
//     li.append(deletButton);

//     /*append the li element to the unordered list in your HTML*/
//     list.append(li);

//     /*add an event listener to the delete button that removes the li element when clicked*/
//     deletButton.addEventListener("click", () => {
//         list.removeChild(li);
//         input.focus();
//     });

//     /*send the focus to the input element*/
//     input.focus();

//     /*change the input value to nothing or the empty string to clean up the interface for the user*/

//     input.value = "";



// });


/************************************************************* */


//The array declaration initializes the chaptersArray variable with the 
//list of chapters returned by the getChapterList() function or an empty 
//array if the function call returns null or undefined.//

let chaptersArray = getChapterList() || [];


//Now let's populate the displayed list of chapters. Use a forEach on the
// chaptersArray to process each entry named chapter. 
//Use an arrow function within the loop to call a new defined function named displayList 
//and pass it the argument of chapter. 
//That way each entry will be processed, i.e., appended to the list. 

let displayList = (item) => {
    let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener("click", () =>{
    list.removeChild(li); 
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage
    input.focus(); // set the focus back to the input
  })
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
};




chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


//Change the button click event listener to only do the following tasks 
//the other tasks in that original function will be used in a separate function named displayList): 


button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
  });




/**
 Define the setChapterList function to set the localStorage item that 
 you have already named. Use JSON.stringify() to stringify the array. 
 */

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }


  /**
   Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, 
   we will need to use JSON.parse on the string. 
   * 
   */

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }


  /**
   format the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method 
   to extract the last character. } chapter 
   */


  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    //Call the setChapterList function to update the localStorage item.
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    //Call the setChapterList function to update the localStorage item.
    setChapterList();
  }


 

