// script.js
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateButton = document.getElementById('generate-quote');

const quotes = [
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'We can do anything we want to if we stick to it long enough.', author: 'Helen Keller' },
    { text: 'The fastest road to meaning and success: choose one thing and go all in.', author: 'Maxime Lagacé' },
    { text: 'Impossible is for the unwilling', author: 'John Keats' },
    { text: 'People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.', author: 'Carrie Ann Moss' },
    { text: 'At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it.', author: 'Dr. Phil' },
    { text: 'You are never too old to set another goal or to dream a new dream.', author: 'Malala Yousafzai' },
    { text: 'You define your own life. Don’t let other people write your script.', author: 'Oprah Winfrey' },
    { text: 'I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.', author: 'Taylor Swift' },
    { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
    { text: 'When you have a dream, you’ve got to grab it and never let go.', author: 'Carol Burnett' }, 
    { text: 'Nothing is impossible. The word itself says ‘I’m possible!', author: 'Audrey Hepburn' },
    { text: 'There is nothing impossible to they who will try.', author: 'Alexander the Great' }, 
    { text: 'The bad news is time flies. The good news is you’re the pilot.', author: 'Michael Altshuler' },
    { text: 'The essence of strategy is choosing what not to do.', author: 'Michael Porter' },
    { text: 'One cannot and must not try to erase the past merely because it does not fit the present.', author: 'Golda Meir' },
    { text: 'The essence of strategy is choosing what not to do.', author: 'Michael Porter' },
    { text: 'One cannot and must not try to erase the past merely because it does not fit the present.', author: 'Golda Meir' },
    { text: 'For everything you have lost, you have gained something else.', author: 'Unknown' },
    { text: 'I thank all those who laughed at my dreams; you taught me to grow respecting other people’s struggles', author: 'Paulo Coelho' },
    { text: 'Nobody is superior, nobody is inferior, but nobody is equal either. People are simply unique, incomparable.', author: 'Osho' },
    { text: 'The great man is he who does not lose his child’s-heart.', author: 'Mencius' },
    { text: 'Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind.', author: 'Dr Seuss' },
    { text: 'Good things come to those who believe, better things come to those who are patient, and the best things come to those who don’t give up.', author: 'Unknown' },
    { text: 'You don’t have to be great to get started, but you have to get started to be great.', author: 'Les Brown' },
    { text: 'How people treat you is their karma; how you react is yours.', author: 'Wayne W. Dyer' },
    { text: 'Never give up! Failure and rejection are only the first step to succeeding.', author: 'Jim Valvano' },
    { text: 'Can you remember who you were, before the world told you who you should be?', author: 'Charles Bukowski' },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteElement.textContent = text;
    authorElement.textContent = `- ${author}`;
}

generateButton.addEventListener('click', displayQuote);
displayQuote(); // Show initial quote on page load
