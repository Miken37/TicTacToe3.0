function log(text){
    return console.log(text);
}

log("Connected");

(function menuCreate(){                 //Insantiates upon load of page.
    menuDOM();
})();

function menuDOM(){
    const body = document.querySelector("body")
    const container = document.createElement('form');        //Creates form container
    container.classList = "menu-container";             //Gives container class: menu-container
    const titleText = document.createElement("h1");         
    

    //Giving DOM Elements HTML content
    titleText.innerHTML = "Tic-Tac-Toe";

    //Appending elements to body/container
    body.appendChild(container);                //Adds form to body
    container.appendChild(titleText);
    
}

