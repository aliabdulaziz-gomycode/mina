/*
Some of the common events in javascript
----------------------------------------
change:	    An HTML element has been changed
click:	    The user clicks an HTML element
mouseover:	The user moves the mouse over an HTML element
mouseout:	The user moves the mouse away from an HTML element
keydown:	The user pushes a keyboard key
load: 	    The browser has finished loading the page (used on window)
----------------------------------------
You have three things:
event: example -> click
event listerner: addEventListener()
event handler: the code which will be executed when the even occurs.
*/

// Example: show alert when page is loaded
// The addEventListener takes two parameters: event + handler
// window.addEventListener('load', function (event) {
//     alert("This was triggered on (" + event.type + ") event!");
// });

// Example: show alert when button is clicked
document.querySelector("#my-button").addEventListener('click', function (event) {
    alert("This was triggered on (" + event.type + ") event!")
});

// This functions is used inside the HTML file. (Line: 17)
function showAlert(event) {
    alert("This was triggered on (" + event.type + ") event!")
}

// Example: to use javascript to add items to HTML
// This code is copied from the following:
// https://www.w3schools.com/jsref/met_node_appendchild.asp
window.addEventListener("load", function () {
    let myButton = this.document.createElement("button");
    let textnode = this.document.createTextNode("Click on me! (3)");
    myButton.appendChild(textnode);
    myButton.id = "button-3";
    this.document.getElementById("app").appendChild(myButton);
});

// Example: add image using javascript
window.addEventListener("load", function () {
    let imgUrl = "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg";
    let img = document.createElement("img");
    img.src = imgUrl;
    img.width = 200;
    img.style.display = "block";
    img.style.marginTop = "30px";
    img.onclick = function () {
        alert("This is image");
    }
    document.querySelector("#app").appendChild(img);
});

// Example: add element using innerHTML
document.querySelector("#add-element-button").addEventListener("click", function () {
    let element = document.createElement("div");
    element.innerHTML = "<p class='text-red'>this is a paragraph!</p>";
    document.querySelector("#app2").appendChild(element);
});


// The following code doesn't work because it tries to select 
// "#button-3" which is still not existing on page, because 
// this element is being added by javascript
//---------------------------------------------
// document.querySelector("#button-3").addEventListener("click", function (even) {
//     alert("This is button 3");
// });
//------------------------------------------

// This is the solution to solve the previous problem.
document.body.addEventListener("click", function (event) {
    if (event.target.id == "button-3") {
        let img = createNewImag();
        document.querySelector("#app").appendChild(img);
    }
});

function createNewImag() {
    let imgUrl = "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg";
    let img = document.createElement("img");
    img.src = imgUrl;
    img.width = 200;
    return img;
}
