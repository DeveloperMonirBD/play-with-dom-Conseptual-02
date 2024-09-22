const quotesArray = [
    { quote: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
    { quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.', author: 'Martin Luther King Jr.' },
    { quote: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
    { quote: 'Life is 10% what happens to us and 90% how we react to it.', author: 'Charles R. Swindoll' },
    { quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { quote: 'Success is not the key to happiness. Happiness is the key to success.', author: 'Albert Schweitzer' },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: 'Steve Jobs' },
    { quote: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
    { quote: 'Get busy living or get busy dying.', author: 'Stephen King' },
    { quote: 'You have within you right now, everything you need to deal with whatever the world can throw at you.', author: 'Brian Tracy' }
];

document.getElementById('quote').addEventListener('click', function () {
    const p = document.getElementById('quote-p');
    const h2 = document.getElementById('name');

    // math.random --> 0 thake 1 ar moddhea randomly number dai.
    // Math.random() * quotesArray.length --> 0 thake 10 1r moddhea randomly number dibe. tobe Math.floor baboher korle niser mun ta dibe. tobe man 10 ta paua jabe na 9 porjonto paua jabe.

    const randomIndex = Math.floor(Math.random() * quotesArray.length);

  p.innerText = quotesArray[randomIndex].quote;
  h2.innerText = quotesArray[randomIndex].author
});
