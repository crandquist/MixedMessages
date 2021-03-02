const quotes = [
    "Understandable. Have a nice day.",
    "Two bedrooms, no rugs.",
    "It's better to die with friends.",
    "Sounds sus.", "Mmm gross.",
    "Don't eat it.",
    "We're all together again! We're here, we're here!",
    "I'm down for whatever.",
    "Sounds gouda.",
    "If I was in the ocean, I would be a male seahorse.",
    "That is a lot and add a lot to people's lives.",
    "Don't celebrate too early.",
    "Weird flex, but ok.",
    "That be hittin different",
    "Hullo",
    "Alexa, play Bad and Boujee.",
    "10 out of 10 would do again.",
    "Thank you, fish, for being here.",
    "You love to see it.",
    "I'm sorry, but that's a no from me.",
    "Come see my house.",
    "I'm moving my house again.",
    "I was in Crag",
    "Shots fired",
    "I'mma go get a drink",
]

const chaosQuoter = (arr) => {
    let index = 0;
    let chosenQuotes = [];
    let n = 0
    while (n < 3) {
        index = Math.floor(Math.random() * (arr.length - 1))
        chosenQuotes.push(arr[index]);
        n++
    }
    console.log(chosenQuotes);
    chosenQuotes.forEach(q => console.log(q));
}

chaosQuoter(quotes);