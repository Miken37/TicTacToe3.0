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
    container.classList.add("menu-container");             //Gives container class: menu-container
    const titleText = document.createElement("h1");         
    const startGameBtn = document.createElement('input')
    startGameBtn.classList.add('start-button');
    const playerNameOne = document.createElement('input');
    playerNameOne.classList.add('inputs');
    const playerNameTwo = document.createElement('input');
    playerNameTwo.classList.add('inputs');

    //Giving DOM Elements HTML content
    titleText.innerHTML = "Tic-Tac-Toe";

    startGameBtn.setAttribute('type', 'submit');
    startGameBtn.setAttribute('value', 'PLAY'); 

    playerNameOne.setAttribute('placeholder', 'Player 1');
    playerNameOne.setAttribute('name', 'playerOneName');
    playerNameTwo.setAttribute('placeholder', 'Player 2');
    playerNameTwo.setAttribute('name', 'playerTwoName');

    //Appending elements to body/container
    body.appendChild(container);                //Adds form to body
    container.appendChild(titleText);
    container.appendChild(startGameBtn);
    container.appendChild(playerNameOne);
    container.appendChild(playerNameTwo);

    //Start Event Listener
    startGameBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const playerOneData = container.elements['playerOneName'].value;
        const playerTwoData = container.elements['playerTwoName'].value;
        startGame();        //Start game
        playerData(playerOneData, playerTwoData);       //Seperate function to take player name data
    });

    
}

function startGame(){
    document.querySelector('.menu-container').style.display = 'none';
    log("started game");
}

function playerData(playerOne, playerTwo){
    log(`P1: ${playerOne}\nP2: ${playerTwo}`);
}