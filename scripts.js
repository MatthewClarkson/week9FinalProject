class Card{                                         //Made a card class with constructor suit, name, value

    constructor(suit, name, value){
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
}

class Deck{                                         //Deck class and added cards
    constructor() {
        this.cards = [];
        this.suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
        this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }

    createDeck() {                                  //function to create deck with for loops
        console.log('Creating a new Deck');
        for (let i = 0; i < this.suits.length; i++) {
            for (let n = 0; n < this.names.length; n++) {
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
            }
        }
    
    };

    shuffleDeck() {                                 //function to shuffle deck with for loop
        console.log('Shuffling Deck');
        const shuffledDeck = [];
        for (let i = 0; i < 52; i++) {
            let randomPosition = Math.floor((this.cards.length - i) * Math.random());
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffledDeck.push(...randomItem);
        }
        return shuffledDeck;
    }   

    dealDeck(players, shuffledCards) {              //function to deal with 2 arguments
        console.log('Dealing Cards');
        let dealingCards1 = shuffledCards.splice(0, 26);
        players[0].hands.push(...dealingCards1);
        let dealingCards2 = shuffledCards.splice(0, 26);
        players[1].hands.push(...dealingCards2);
    }
}

class Players {                                     //Player's class with constructor
        constructor(name) {
            this.name = name;
            this.points = 0;
            this.hands = [];
        }
    }
                        

class Game{                                         //Game class with constructor
    constructor(){
        this.players = [];
    }

    start() {                                       //start function with Me and You 
        this.players.push(new Players('Me'));           
        this.players.push(new Players('You'));
        console.log('DECLARE WAR!!', this.players);

        let myDeck = new Deck();
        myDeck.createDeck();
        let shuffledDeck = myDeck.shuffleDeck();
        myDeck.dealDeck(this.players, shuffledDeck);

        this.playGame();

        this.endGame();
    }

    playGame() {                                    //function to play with while loop and 
        console.log('DECLARE WAR!!');               //if else statements to play through 
        let player1 = this.players[0];              //all cards
        let player2 = this.players[1];
        let roundWinner = '';
        let turn = 0;

        while (player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;
                player1.points += 1;
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, 'of', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, 'of', player2Card.suit, "\n");
            }
            else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, 'of', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, 'of', player2Card.suit, "\n");
            }
            else {
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, 'of', player1Card.suit, '\nPlayer 2 card: ', player2Card.name, 'of', player2Card.suit, "\n");
            }
        }
    }

    endGame() {                                     //function to end game with
        let gameWinner = '';                        // if else statements and 
        let player1 = this.players[0];              //alerts with final scores
        let player2 = this.players[1];
        let winnerPoints = 0;

        if (player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert('GAME OVER! ' + gameWinner + " Won the game!\nFINAL SCORES:\n" + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nI Won!");
        } else if (player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER! ' + gameWinner + " Won the game!\nFINAL SCORES:\n" + player1.name + ": " + player1.points + "\n", player2.name + ': ', player2.points + "\nYou Won!");
        } else {
            alert('GAME OVER! \nTIED GAME\nFINAL SCORES:\n' + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nWe Tied!");
        }
    }
}
let game = new Game();                              //game variable and new game
game.start();                                       //start function