function card(name, type, description, amtPulled, skips, deckCount) {
    this.name = name,
    this.type = type,
    this.description = description,
    this.amtPulled = amtPulled,
    this.skips = skips,
    this.deckCount = deckCount
}

var prohibitionCard= new card('Prohibition', 'miniGame', 'Drink a shot of moonshine', 0, 0, 2);
var woodstockCard= new card('Woodstock', 'miniGame', 'Choose a song, first team to guess it wins. All other teams drink.', 0, 0, 2);
var bostontPartyCard= new card('Boston Tea Party', 'miniGame', 'Put your pinkies in the air, last one has to drink', 0, 0, 2);
var barackObamaCard= new card('Barack Obama', 'miniGame', 'Guess the presidents hometown, first team to guess it wins. All other teams drink', 0, 0, 2);
var southCard= new card('Neighbors to the South' , 'miniGame', 'Take a shot of hot sauce or take a drink', 0, 0, 2);
var monicaLCard= new card('Monica Lewinsky', 'miniGame', 'Play fuck, marry, kill with one person from each team', 0, 0, 2);
var souCard= new card('State of the Union', 'miniGame', 'Everyone name a state, no repeats. First person who messes up has to drink', 0, 0, 2);
var sbaCard= new card('Susan B. Anthony', 'miniGame', 'All women drink', 0, 0, 2);
var illuminatiCard= new card('Illuminati', 'miniGame', 'The first player whispers a who question into the ear of the person on the right. For example Who has the worst job here? The person asked the question says out loud the name of the person they think is the answer. That person, no matter where they are on the table, now has a decision to make. They can either find out the question that caused them to be the answer or they can play on and ask a new question. If they want to find out the question though they have to drink for the privilege. This can be either a shot or five-second drink from something weaker like beer or cider.', 0, 0, 2);
var abeCard= new card('Abraham Lincoln', 'miniGame', 'The president must take a shot', 0, 0, 2);
var coldWarCard= new card('Cold War', 'bigGame', 'All women drink', 0, 0, 2);
var capitalCard= new card('Capital Punishment', 'miniGame', 'The president will go around the room and say a state. Each person must reply with the capital of that state, if they get it wrong, drink.', 0, 0, 2);
var flipCard= new card('Flip Cup', 'bigGame', 'Play flip cup, thats it', 0, 0, 2);
var vegasCard= new card('Vegas Baby', 'bigGame', 'Players start their turn by wagering an amount of their drink by pouring it into the glass in the center of the table. Once they are satisfied with the amount they wagered, they will call red or black. The top card of the deck is flipped. If they were right the turn passes to the next player, but if they are wrong, they have to drink whatever is in the glass in the center, and not just a sip, they have to drink all of it.', 0, 0, 2);
var rbgCard= new card('Ruth Bader Ginsberg', 'bigGame', 'Grab 20-30 solo cups, fill them up at least 1/3rd with beer, and place them in the center of a round table. Pick up one more cup to be the center cup and fill it completely with a full beer. Disperse all players evenly around the table, pick two players to start the game, and give them each a pong ball. The game begins with a backward “3, 2, 1-” countdown. After “1”, the two players with the pong balls pick a cup closest to them, chug the beer, and attempt to rapidly bounce their ball into the empty cup. Once they succeed, they will pass the cup and the ball clockwise to the next player, and this continues until a player makes it into their cup while the next person is still bouncing. Once this happens, the player will stack their cup onto the next one, and the losing player will pass their stack clockwise, pick a new cup, drink the beer, and proceed playing. The game ends when all of the cups have been consumed (ending with the center cup that contains a full beer).', 0, 0, 2);
var civilWarCard= new card('Civil War', 'bigGame', 'Two teams of 3 face each other from across the table. Each player has their own 3 or 6 cup lifeline, arranged in the 3-2-1 triangle format. 2 water cups per team is recommended, as this game is much more fun (and faster paced) if beer is used inside the cups, although it is optional that a player use water as long as they drink for each cup made. Two teams of three square off in a rapid-fire game of pong, where each player has a 6 cup lifeline (3 can work if the table is small), and no balls are off limit for roll backs (so pay attention to rebounds). The drink-before-you-shoot rule is in play as usual, but there is no "turns", so any team/player can shoot any ball at any time, including passing balls off to their teammates (if for instance their cup is made and they have to drink). The first team to make all of the opposing teams cups wins. As its extremely unlikely that all three players lose at the same time, when players are knocked out of a game of civil war, they can rebound balls for their team (usually the 50/50 rule is enforced, where they cant step on their opponents side of the room to rebound a ball (but reaching is allowed while feet remain on their side). This adds an additional element of strategy to the game, as it might make more sense to leave a player with 1 cup in the game so he wont focus solely on rebounding after being shot out.', 0, 0, 2);

var listOfCards = [prohibitionCard, woodstockCard, bostontPartyCard, barackObamaCard, southCard, monicaLCard,
souCard, sbaCard, illuminatiCard, abeCard, coldWarCard, capitalCard, flipCard, vegasCard, rbgCard, civilWarCard];


function deck() {
    this.cards = [];
}

function fillDeck(cards, emptydeck) {
    cards.forEach((c) => {

        // emptydeck.cards.push(c);
        for (let i = 0; i < c.deckCount; i++) {
            emptydeck.cards.push(c);
        }

    } )
    console.log(emptydeck);
};

// Pulled this shuffle function from
// https://medium.com/@blakeeh723/how-to-build-a-card-game-with-object-oriented-programming-c43cd2cadb3a
function shuffleDeck(full_deck) {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
        location1 = Math.floor(( Math.random() * full_deck.cards.length ));
        location2 = Math.floor(( Math.random() * full_deck.cards.length ))

        tmp = full_deck.cards[location1];
        full_deck.cards[location1] = full_deck.cards[location2];
        full_deck.cards[location2] = tmp;
    }
}

var gamedeck = new deck();

fillDeck(listOfCards, gamedeck);
shuffleDeck(gamedeck);

gamedeck.cards.forEach((c) => {
    console.log(c.name);
})
console.log(gamedeck.cards);