// alert("hello");

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
//red
// red.addEventListener("click", e=>{
//     console.log("red capture");
// } , {capture:true})

// red.addEventListener("click", e => {
//     console.log("red bubble");
// })

//blue
// blue.addEventListener("click", e => {
//     console.log("blue capture")
// } , 
//     {capture:true}
// )

// blue.addEventListener("click", e => {
//     console.log("blue bubble")
// } , {once:true})  //if we want our even to run only once

//green
// green.addEventListener("click", e =>{
//     console.log("green capture")
// } , {capture:true})

// green.addEventListener("click", e =>{
//     console.log("green bubble");
//     // e.stopPropagation();  //if we want to stop the event's propogation
// })

//document
// document.addEventListener("click", e =>{
//     console.log("document capture")
// } , {capture:true})
// 
// document.addEventListener("click", e =>{
//     console.log("document bubble")
// })

///////////////////////////////////////////////////////
// removeEventListener()
// function printHi(){
//     console.log("Hi");
// }

// blue.addEventListener("click", printHi)

// setTimeout(() => {
//     blue.removeEventListener("click", printHi)
// }, 2000)


const divs = document.querySelectorAll('div');

// divs.forEach(div => {
//     div.addEventListener("click", () => {
//         console.log("hi")
//     })
// })

// deligation
// document.addEventListener("click", e => {
//     if(e.target.matches("div")) console.log("hi")
// } )

globalEventListener("click", "div", e =>{
    console.log("Hi");
})

function globalEventListener(type, selector, callback){
    document.addEventListener(type, e =>{
        if(e.target.matches(selector)) callback(e);
    })
}

const newDiv = document.createElement("div")
newDiv.style.width="400px";
newDiv.style.height="400px";
newDiv.style.background="purple";
// newDiv.addEventListener("click", () =>{
//     console.log("hi")
// } )
document.body.append(newDiv);

// /////////////////////////////////////////
// Custom event -  Has 3 Step

// 1. Creating a new Event
const myEvent = new CustomEvent("myCustomEvent", {detail: {hello:"world"}})

// 2. Listening to the Event
// document.addEventListener("myCustomEvent", e =>{
//     console.log(e);
// })

// 3. Triggering an Event
// document.dispatchEvent(myEvent);

/////////////////////////////////////////////////////

// Click Event
const button = document.querySelector("button");

button.addEventListener("myCustomEvent", e =>{
    // e.preventDefault()
    console.log("Button", e.detail);
    
});

// document.addEventListener("myCustomEvent", e =>{
//     console.log("Document", e.defaultPrevented);
// })

button.dispatchEvent(myEvent);

//////////////////////////////////////////////////////
const headerTag = document.querySelector('.blue');

headerTag.addEventListener('numberChanged' , function(e) {
    headerTag.style.background = e.detail.background;
});

function changeNumber(c){
    const event = new CustomEvent('numberChanged' , {
        detail : {
            background : c
        }
    });
    headerTag.dispatchEvent(event);
}

// changeNumber("#ffffff");


// 5 Powerful JS Events

window.addEventListener("offline", () => {
    alert("You are offline !!!");
});







