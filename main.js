const quotes=[
    "Life is what happens when you re busy making other plans.  John Lennon",
    "The purpose of our lives is to be happy.  Dalai Lama",
    "Get busy living or get busy dying.   Stephen King",
    "You only live once, but if you do it right, once is enough.   Mae West",
    "Life is short, and it s up to you to make it sweet.   Sarah Louise Delany",
    "In the end, we only regret the chances we didn t take.  Lewis Carroll",
    "Life is made of ever so many partings welded together.  Charles Dickens",
    "Do not take life too seriously. You will never get out of it alive.  Elbert Hubbard",
    "Life itself is the most wonderful fairy tale.  Hans Christian Andersen",
    "Life is either a daring adventure or nothing at all.   Helen Keller",
    "Life is really simple, but we insist on making it complicated.   Confucius",
    "Life is a succession of lessons which must be lived to be understood.   Ralph Waldo Emerson",
    "Keep calm and carry on.   Winston Churchill",
    "The greatest pleasure of life is love.  Euripides",
    "Life is 10% what happens to us and 90% how we react to it.  Charles R. Swindoll",
    "Life is a question and how we live it is our answer.   Gary Keller",
    "In three words I can sum up everything I ve learned about life: It goes on.   Robert Frost",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.   Mark Twain",
    "The best way to predict your future is to create it.   Peter Drucker",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away.   Maya Angelou"
];


const usedIndexes=new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if(usedIndexes.size>=quotes.length){
        usedIndexes.clear()
    }

    while(true){
        const randomIdx=Math.floor(Math.random()*quotes.length)

        if(usedIndexes.has(randomIdx))continue

        const quote=quotes[randomIdx]
        quoteElement.innerHTML=quote;
        usedIndexes.add(randomIdx)
        break
    }
}