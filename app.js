setInterval(() = >{
    let topBackground = document.querySelector("section.background_img");
    if (topBackground.style.backgroundImage == "url(../images/日本櫻花.jpg)") {
        topBackground.style.backgroundImage = "url(../images/京都古城.jpg)" ;
    }  else if (topBackground.style.backgroundImage == "url(../images/京都古城.jpg)") {
        topBackground.style.backgroundImage = "url(../images/大阪街頭.jpg)" ;
    } else if (topBackground.style.backgroundImage == "url(../images/大阪街頭.jpg)") {
        topBackground.style.backgroundImage = "url(../images/日本櫻花.jpg)" ;
    } 
},5000)