
const cards = ["Charlie", "Samir", "Ali"];
const event = "surprise";

function writeCards(cards, event) {
    let messages = [];

    for(let i = 0; i < cards.length; i++) {
        let message = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
messages.push(message);
    }
    return messages;
}
function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }
}