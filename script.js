const divs = document.querySelectorAll("div")

divs.forEach(function(element , index){
    if(index % 2 === 1){
        element.style.background = "red"
    }
    else{
        element.style.background = "yellow"
    }
    if((index +1)%5 === 0){
        element.style.background = "blue"
    }
})

// divs.forEach(function(element , index){
//     if(index % 2 === 1){
//         element.classList.add = "red"
//     }
//     else{
//         element.classList.add = "yellow"
//     }
//     if((index +1) %5 === 0){
//         element.classList.add = "blue"
//     }
// })
