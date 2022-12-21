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

function startGame(playerOne, playerTwo){       //Draws board and makes array for cells. Puts it into gameController
    let cells = drawBoard();            //cells is an array containing each square on the board
    cells.forEach(e => {
        e.addEventListener('click', function(){
            gameController(e.id, playerOne, playerTwo);
        });
    }); 
    
}

function playerData(playerName, markIndex){
    const name = playerName;
    let marks = ['x', 'o']
    mark = marks[markIndex];
    return {name, mark};
};

function drawBoard(){
    const mainContainer = document.createElement('div');        //Houses board, player info and win screen
    mainContainer.classList.add('main-container');              //Gives class
    document.querySelector('body').appendChild(mainContainer); //appends to body

    const headContainer = document.createElement('div');        //Contains player info per turn
    headContainer.classList.add('head-container');      
    mainContainer.appendChild(headContainer);

    const playerOneHeader = document.createElement('div');      
    headContainer.appendChild(playerOneHeader);
    playerOneHeader.classList.add('player-one-header')
    playerOneHeader.innerHTML = 'p1 name';

    const emptyDiv = document.createElement('div');
    headContainer.appendChild(emptyDiv);
    emptyDiv.classList.add('empty');

    const playerTwoHeader = document.createElement('div');
    headContainer.appendChild(playerTwoHeader);
    playerTwoHeader.classList.add('player-two-header')
    playerTwoHeader.innerHTML = 'p2 name';

    const boardContainer = document.createElement('div');       //Creates board grid
    boardContainer.classList.add("game-container"); 
    mainContainer.appendChild(boardContainer);                  //Assigns to be within mainContainer
    let cells = [];   //Empty array for the squares
    for (let i = 0; i < 9; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', `cell${i}`);
        boardContainer.appendChild(square);
        cells.push(square);         //Adds each square to the empty array
    }
    
    return cells;
}

function gameController(cell, playerOne, playerTwo){
    log(`Clicked: ${cell}`);
    let cellEle = document.querySelector(`#${cell}`);
    const p1 = playerOne.name;
    const p2 = playerTwo.name;
    let currentPlayer = findCurrentPlayer(playerOne.name, playerTwo.name); 
    log(currentPlayer);
    // if (currentPlayer == p1){
    //     cellEle.style.backgroundColor = "red";
    //     currentPlayer = p2;
    //     return currentPlayer;
    // } else{
    //     cellEle.style.backgroundColor = "blue";
    //     currentPlayer = p1;
    //     return currentPlayer;
    // }
    
}


function findCurrentPlayer(playeroneName, playertwoName){
    const playerTwo = document.querySelector('.player-two-header');
    const playerOne = document.querySelector('.player-one-header');
    if (playerOne.style.color == "cyan"){
        playerOne.style.color = "black";
        playerOne.style.fontSize = "20px";
        let currentPlayer = playerTwo.innerHTML;
        playerTwo.style.color = "cyan";
        playerTwo.style.fontSize = "35px";
        return currentPlayer;
    }
    let currentPlayer = playerOne.innerHTML;
    playerTwo.style.color = "black";
    playerTwo.style.fontSize = "20px";
    playerOne.style.color = "cyan";
    playerOne.style.fontSize = "35px";
    return currentPlayer;
}
