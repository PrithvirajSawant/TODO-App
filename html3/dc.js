// alert("hello")
// const MAX_DOUBLE_CLICK_TIME = 500;
// let lastClick = 0;
// let secondClick = false;

// const button = document.querySelector("body");
// const loader = document.querySelector('.loader')

// button.addEventListener("click", e =>{
//     const timeBetweenClicks = e.timeStamp - lastClick;
//     if(timeBetweenClicks > MAX_DOUBLE_CLICK_TIME){
//         lastClick = e.timeStamp;    
//         return;
//     }

//     secondClick = true;
//     loader.style.display="block";

//     const doubleClickEvent = new CustomEvent("custom:dubleClick", {
//         bubbles:true,
//         cancelable:true,
//         composed:true,
//         detail:{timeBetweenClicks}
//     })

//     e.target.dispatchEvent(doubleClickEvent);
//     lastClick = 0;
// })

// button.addEventListener("mouseup", e=>{
//     if(secondClick)
//         {
//             loader.style.display="none";
//             secondClick = false;
//         }
// });


// button.addEventListener("custom:dubleClick", e =>{
//     console.log("Double Click", e.detail.timeBetweenClicks);
//     // if (loader.style.display === "none" || loader.style.display === "") {
//     //     loader.style.display = "block";
//     // } else {
//     //     loader.style.display = "none";
//     // }
// })

const MAX_DOUBLE_CLICK_TIME = 500;
let lastClick = 0;
let doubleClickInitiated = false;

const button = document.querySelector("body");
const loader = document.querySelector('.loader');
const loader3 = document.getElementById('loader3');

const animation = lottie.loadAnimation({
    container: loader3,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Json/key.json'
});

button.addEventListener("mousedown", e => {
    const timeBetweenClicks = e.timeStamp - lastClick;
    if (timeBetweenClicks <= MAX_DOUBLE_CLICK_TIME) {
        doubleClickInitiated = true;
        loader.style.display = "block";
        loader3.style.display = "block";
    }
    lastClick = e.timeStamp;
});

button.addEventListener("mouseup", e => {
    if (doubleClickInitiated) {
        loader.style.display = "none";
        loader3.style.display = "none";;
        doubleClickInitiated = false;
    }
});

// Additional debug information
animation.addEventListener('DOMLoaded', () => {
    console.log('Lottie animation loaded');
});

animation.addEventListener('data_ready', () => {
    console.log('Lottie animation data ready');
});

// button.addEventListener("custom:doubleClick", e => {
//     console.log("Double Click", e.detail.timeBetweenClicks);
// });


// const MAX_DOUBLE_CLICK_TIME = 500;
// const lastClick = 0;
// let doubleClickInitiated = false;

// const button = document.querySelector('body');
// const loader = document.querySelector('.loader');

// function handleStart(e){
//     const timeBetweenClicks = e.timeStamp - lastClick;
//     if(timeBetweenClicks  <= MAX_DOUBLE_CLICK_TIME){
//         doubleClickInitiated = true;
//         loader.style.display = "block";
//     }
//     lastClick = e.timeStamp;
// }

// function handleEnd(e){
//     if(doubleClickInitiated){
//         loader.style.display="none";
//         doubleClickInitiated = false;
//     }
// }

// button.addEventListener.querySelector('mousedown', handleStart);
// button.addEventListener.querySelector('mouseup', handleEnd);

// button.addEventListener.querySelector('touchstart', handleStart);
// button.addEventListener.querySelector('touchend', handleEnd);

// const MAX_DOUBLE_CLICK_TIME = 500;
// let lastClick = 0;
// let doubleClickInitiated = false;

// const button = document.querySelector("button");
// const loader = document.querySelector('.loader');

// function handleStart(e) {
//     const timeBetweenClicks = e.timeStamp - lastClick;
//     if (timeBetweenClicks <= MAX_DOUBLE_CLICK_TIME) {
//         doubleClickInitiated = true;
//         loader.style.display = "block";
//     }
//     lastClick = e.timeStamp;
// }

// function handleEnd(e) {
//     if (doubleClickInitiated) {
//         loader.style.display = "none";
//         doubleClickInitiated = false;
//     }
// }

// button.addEventListener("mousedown", handleStart);
// button.addEventListener("mouseup", handleEnd);

// button.addEventListener("touchstart", handleStart);
// button.addEventListener("touchend", handleEnd);
