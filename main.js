const options = ['buy', 'sell'];
const stocks = ['TSLA', 'NVDA', 'AAPL', 'AMZN', 'LCID', 'ASO', 'MRNA', 'MSFT', 'NIO', 'NKLA', 'FB', 'AMD'];
// will create a range of dates from the day the program is run
const dates = []

const today = new Date();

function generateDates() {
    let numAdded = 0;
    while (numAdded < 7) {
        let date = new Date(today.getTime() + 86400000 * numAdded);
        dates.push(date.toDateString());
        numAdded++;
    }
}

function randomOption() {
    return options[Math.floor(Math.random()* options.length)];
}

function randomStock() {
    return stocks[Math.floor(Math.random() * stocks.length)];
}

function randomDate() {
    return dates[Math.floor(Math.random() * dates.length)];
}

generateDates();

let option = randomOption();
let stock = randomStock();
let date = randomDate();

console.log(`You will ${option} ${stock} on ${date}.`);