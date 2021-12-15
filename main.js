

 function addList () {

    //1)
    let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-fi", "Documentary"]

    //2)
    let unorderedList = document.createElement("ul")
    let listItem 
    //3)
    for (let i =0; i<genres.length; i++) {

        listItem = document.createElement("li")
        listItem.innerText = genres[i]
        unorderedList.appendChild(listItem)

    }
        

    //4)


    //5)

     //6)
    
    let div = document.getElementById("div")
        div.appendChild(unorderedList)
}
 
/*  MANDATORY JS EXERCISES (continue from yesterday's file for this exercise)
    1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text
    2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"
    3) Grab the inputs references via DOM manipulation and save them in variables
    4) Create a function and attach it to the "Apply Colors" button click event
    5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console 
        each item from the loop every time the button gets clicked
    6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.

    If you receive black as a color check where you have the inputs references.
    You should now see the list-items color and background-color change at the click of the button.
*/

 /* 1 */   

const section = document.getElementsByTagName("section") [0]

const inputOne = document.createElement("input")
section.appendChild(inputOne)
const inputTwo = document.createElement("input")
const colorBtn = document.createElement("button")

colorBtn.innerText = "Apply Colors"

inputOne.type = "color"
inputTwo.type = "color"

/* section.appendChild(inputOne) */

section.appendChild(inputTwo)
section.appendChild(colorBtn)

/* 2 + 3 */

addList()
const listItems = document.getElementById("div") 

const inputA = document.getElementsByTagName("input") [0]
const inputB = document.getElementsByTagName("input") [-1]

console.log(inputB)

/* 4 */

const applyColors = function() {
for (let i=0; i < unorderedList.length; i++) {
    console.log(unorderedList)
    console.log(unorderedList[i]) 
}
}

colorBtn.addEventListener("click", applyColors) 
