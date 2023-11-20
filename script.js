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
