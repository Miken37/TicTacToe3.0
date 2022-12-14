function log(text){
    return console.log(text);
}

(function menuCreate(){                 //Instantiates upon load of page. Could just run menuDOM(); but
    menuDOM();                          //want to have more control over what runs at start
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
        const playerOne = playerData(playerOneData, 0);       //Factory function for both players
        const playerTwo = playerData(playerTwoData, 1);       //Can change 0 and 1 to function to randomly generate
        startGame(playerOne, playerTwo);        //Start game
        container.style.display = 'none';
    });
}

function startGame(playerOne, playerTwo){
    log("started game");
    log(`Player One is ${playerOne.name} and is ${playerOne.mark}`);
    log(`Player Two is ${playerTwo.name} and is ${playerTwo.mark}`);
    drawBoard();
    log(drawBoard().cells)
}

function playerData(playerName, markIndex){
    const name = playerName;
    let marks = ['x', 'o']
    mark = marks[markIndex];
    return {name, mark};
};

function drawBoard(){
    const boardContainer = document.createElement('div');
    boardContainer.classList.add("game-container");
    document.querySelector('body').appendChild(boardContainer); //appends to body
    let cells = [];   //Empty array for the squares
    for (let i = 0; i < 9; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', `cell${i}`);
        boardContainer.appendChild(square);
        cells.push(square);         //Adds each square to the empty array
    }
    return {cells};
}
