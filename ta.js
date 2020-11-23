
// Object-scheme for each card
function card(name, type, description, link, linkText, amtPulled, skips, deckCount) {
    this.name = name,
    this.type = type,
    this.description = description,
    this.amtPulled = amtPulled,
    this.skips = skips,
    this.deckCount = deckCount,
    this.link = link,
    this.linkText = linkText
}

//List of cards
var prohibitionCard= new card('Prohibition', 'miniGame', 'President, take a shot of moonshine', '', '',0, 0, 3);
var woodstockCard= new card('Woodstock', 'miniGame', 'President, choose a song and play it. First team to guess it wins. All other teams drink.', '', '',0, 0, 4);
var ddayCard = new card('D-Day', 'miniGame', 'Guys drink', '', '', 0, 0, 5);
var goldRushCard = new card('Gold Rush', 'bigGame', 'President, hide an object somewhere around the house. One member from each team is blindfolded. Their team guides them to the object using just their voices.', '', '', 0, 0, 1);
var bostontPartyCard= new card('Boston Tea Party', 'miniGame', 'Put your pinkies in the air, last one has to drink', '', '', 0, 0, 2);
var barackObamaCard= new card('Barack Obama', 'miniGame', 'Guess the presidents hometown, first team to guess it wins. All other teams drink', '', '', 0, 0, 2);
var southCard= new card('Neighbors to the South' , 'miniGame', 'Take a shot of hot sauce or take a drink', '', '', 0, 0, 3);
var monicaLCard= new card('Monica Lewinsky', 'miniGame', 'Play fuck, marry, kill with one person from each team', '', '', 0, 0, 1);
var souCard= new card('State of the Union', 'miniGame', 'Everyone name a state, no repeats. First person who messes up has to drink', '', '', 0, 0, 3);
var sbaCard= new card('Susan B. Anthony', 'miniGame', 'All women drink', '', '', 0, 0, 5);
var illuminatiCard= new card('Illuminati', 'miniGame', 'Play Paranoia', 'https://www.thestagcompany.com/stag-weekends-blog/paranoia-drinking-game', 'How to play Paranoia',0, 0, 2);
var abeCard= new card('Abraham Lincoln', 'miniGame', 'The president must take a shot', '', '', 0, 0, 3);
var coldWarCard= new card('Cold War', 'bigGame', 'Play a game of Russian Roulette. Fill some cups with water, some with water, and good luck.', '', '', 0, 0, 2);
var capitalCard= new card('Capital Punishment', 'miniGame', 'The president will go around the room and say a state. Each person must reply with the capital of that state, if they get it wrong, drink.', '', '', 0, 0, 2);
var flipCard= new card('Flip Cup', 'bigGame', 'Play flip cup, thats it', '', '', 0, 0, 1);
var vegasCard= new card('Vegas Baby', 'bigGame', 'Play Bet Your Liver',  'https://www.barnonedrinks.com/games/y/you-bet-your-liver-519.html', 'How to play Bet Your Liver', 0, 0, 3);
var rbgCard= new card('Ruth Bader Gin-sberg', 'bigGame', 'Play Rage Cage. Middle cup has to include gin', 'https://psycatgames.com/magazine/party-games/rage-cage/', 'How to play Rage Cage', 0, 0, 2);
var civilWarCard= new card('Civil War', 'bigGame', 'Play Civil War', 'https://www.drinkinggamezone.com/drinking-games/civil-war/#:~:text=Civil%20War%20is%20similar%20to%20both%20Beer%20Pong,their%20choice%20of%20the%20opposing%20team%20player%27s%20cups.', 'How to play Civil War', 0, 0, 2);
var gameOverCard= new card('Game Over', 'finish', 'You went through the whole deck! To keep going, just hit the start game button', '', '', 0, 0, 0)

var swap2 = new card("Assasination", 'movement', 'President switches seats with the player 2 spots to their left', '', '', 0, 0, 2);
var swap3 = new card("Assasination", 'movement', 'President switches seats with the player 3 spots to their right', '', '', 0, 0, 2);
var move4 = new card("Move 4", 'movement', 'Everyone moves clockwise 4 spots', '', '', 0, 0, 3);
var move2 = new card("Move 2", 'movement', 'Everyone moves clockwise 2 spots', '', '', 0, 0, 4);
var swap = new card("Cabinet Change", 'movement', 'The players directly left and right of the president switch places', '', '', 0, 0, 3);
var move3 = new card("Move 3", 'movement', 'Everyone moves clockwise 3 spots', '', '', 0, 0, 4);
var tall = new card("Tall People", 'movement', 'The tallest player switches places with the shortest player', '', '', 0, 0, 1);

var mvmtCards = [swap2, swap3, move4, move2, swap, move3, tall];

var listOfCards = [prohibitionCard, woodstockCard, goldRushCard, bostontPartyCard, flipCard, barackObamaCard, southCard, ddayCard, monicaLCard,
    souCard, sbaCard, illuminatiCard, abeCard, coldWarCard, capitalCard, vegasCard, rbgCard, civilWarCard];

fillPlayingDeck(listOfCards, test.cards);

console.log(test.cards.length);

function fillPlayingDeck(cards, emptydeck) {
    var bigCards = [];
    var miniCards = [];

    cards.forEach(function(c) {

        for (let i = 0; i < c.deckCount; i++) {
            if (c.type === 'bigGame') {
                bigCards.push(c);
            }
            else {
                miniCards.push(c);
            }
        }
    });
    bigCards = rand_shuffle(bigCards);
    miniCards = rand_shuffle(miniCards);

    var limit = Math.floor(Math.random() * 2) + 2;
    var counter = 0;

    for (i = miniCards.length - 1; i > 0; i--) {

        if (counter === limit) {
            counter = 0;
            emptydeck.push(bigCards.pop());
            limit = Math.floor(Math.random() * 2) + 3;
        }

        emptydeck.push(miniCards.pop());

        counter++;
    }

};

function rand_shuffle(array) {
    var j, x, i; 
    
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
};

function deck() {
    this.cards = [];
};


// function fillDeck(cards, emptydeck) {
//     cards.forEach((c) => {

//         for (let i = 0; i < c.deckCount; i++) {
//             emptydeck.cards.push(c);
//         }

//     } )
//     console.log(emptydeck.cards);
//     shuffleCards();
// };

function fillmvmtDeck(cards, emptydeck) {
    cards.forEach((c) => {

        for (let i = 0; i < c.deckCount; i++) {
            emptydeck.cards.push(c);
        }

    } );
    function shuffle(array) {
        var j, x, i; 
    
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
    
        return array;
    };
    shuffle(emptydeck.cards);
    console.log(emptydeck.cards);
};

var gamedeck = new deck();
var mvmtdeck = new deck();

// function shuffleCards() {
    
//     function shuffle(array) {
//         var j, x, i; 
    
//         for (i = array.length - 1; i > 0; i--) {
//             j = Math.floor(Math.random() * (i + 1));
//             x = array[i];
//             array[i] = array[j];
//             array[j] = x;
//         }
    
//         return array;
//     };

//     shuffle(gamedeck.cards);
//     console.log(gamedeck.cards);
//     extra_shuffle(gamedeck.cards);
//     console.log(gamedeck.cards);
// }

// function extra_shuffle(array) {
//     for (i = array.length - 1; i > 1; i--) {
//         cur = array[i];
//         nextcard = array[i - 1];
//         if (cur.name === nextcard.name || (cur.type === 'bigGame') && (nextcard.type === 'bigGame')) {
//             console.log(cur.name, nextcard.name);
//             temp = array[i-1];
//             array[i-1] = array[i-2];
//             array[i-2] = temp;
//         }
//     }
// };

var startButton = document.getElementById("startGame");

startButton.addEventListener("click", function() {
    fillPlayingDeck(listOfCards, gamedeck);
    fillmvmtDeck(mvmtCards, mvmtdeck);
});

startButton.addEventListener("click", function() {
    showCards("playingcard", "startGame");

});

var clicks = 0;

document.getElementById("nextCard").addEventListener("click", function() {
    next(clicks);
    if (clicks === 2) {
        clicks = 0;
    }
    else {
        clicks++;
    }

});

function next(count) {
    console.log(count);
    if (gamedeck.cards.length === 0) {
        var card = gameOverCard;
        restart();
    }
    else if (count === 2) {
        var card = mvmtdeck.cards.pop()
    }
    else {
        var card = gamedeck.cards.pop()
        console.log(card);
    }
    $('h5#cardTitle').text(card.name);
    $('p#cardText').text(card.description);
    $('a#cardLink').attr("href", card.link);
    $('a#cardLink').text(card.linkText);

}

function showCards(cardId, buttonId) {
    var game = document.getElementById(cardId);
    if (game.style.display === "none") {
        game.style.display = "block";
    }
    else {
        game.style.display = "none";
    }   
   var start_btn = document.getElementById(buttonId);
   start_btn.style.display = "none";
   var card = gamedeck.cards.pop();
   console.log(card, card.name)
   $('h5#cardTitle').text(card.name);
   $('p#cardText').text(card.description);
   $('a#cardLink').attr("href", card.link);
   $('a#cardLink').text(card.linkText);
}

function restart() {
    fillPlayingDeck(listOfCards, gamedeck);
    mvmtdeck.cards = [];
    fillmvmtDeck(mvmtCards, mvmtdeck);
    var card = gamedeck.cards.pop()
    $('h5#cardTitle').text(card.name);
    $('p#cardText').text(card.description);
    $('a#cardLink').attr("href", card.link);
    $('a#cardLink').text(card.linkText);
}