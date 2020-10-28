function card(name, type, description, amtPulled, skips) {
    this.name = name,
    this.type = type,
    this.description = description,
    this.amtPulled = amtPulled,
    this.skips = skips
}

var prohibitionCard= new card('Prohibition', 'miniGame', 'Drink a shot of moonshine', 0, 0)
var woodstockCard= new card('Woodstock', 'miniGame', 'Choose a song, first team to guess it wins. All other teams drink.', 0, 0)
var bostontPartyCard= new card('Boston Tea Party', 'miniGame', 'Put your pinkies in the air, last one has to drink', 0, 0)
var barackObamaCard= new card('Barack Obama', 'miniGame', 'Guess the presidents hometown, first team to guess it wins. All other teams drink', 0, 0)
var southCard= new card('Neighbors to the South' , 'miniGame', 'Take a shot of hot sauce or take a drink', 0, 0)
var monicaLewinskyCard= new card('Monica Lewinsky', 'miniGame', 'Play fuck, marry, kill with one person from each team', 0, 0)
var souCard= new card('State of the Union', 'miniGame', 'Everyone name a state, no repeats. First person who messes up has to drink', 0, 0)
var sbaCard= new card('Susan B. Anthony', 'miniGame', 'All women drink', 0, 0)


console.log(woodstockCard);
