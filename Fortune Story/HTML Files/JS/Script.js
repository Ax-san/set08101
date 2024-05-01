const cardContainer = document.querySelector('.cards-container');
const shuffleBtn = document.getElementById('shuffle-btn');
const totalCards = 22;

let chosenCard = null;
let chosenFrontCard = null;

const tarotCards = [
    {
        header: "You've Got The Fool Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Fool.png",
        meaning: "The Fool represents new beginnings, innocence, and a sense of adventure. It suggests taking a leap of faith and embracing the unknown with enthusiasm and optimism. Today, embrace your inner adventurer! Take a leap of faith and try something new and exciting. Who knows what magical surprises await you on your journey?",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Magician Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Magician.png",
        meaning: "The Magician represents manifestation, resourcefulness, power, and inspired action. You're the master of manifestation today! Channel your inner wizard and make your dreams a reality. With a flick of your wand, you have the power to create wonders!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The High Priestess Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The High Priestess.png",
        meaning: "The High Priestess represents intuition, mystery, and understanding. Trust your intuition, oh wise one! Dive into the depths of your subconscious and uncover hidden treasures. Your psychic powers are strong today, so don't be afraid to tap into them!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Empress Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Empress.png",
        meaning:  "The Empress represents femininity, fertility, nurturing, and abundance. It's time to pamper yourself, darling! Indulge in some self-care and surround yourself with beauty. Whether it's treating yourself to a luxurious bath or spending time in nature, embrace the goddess within you!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Emperor Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Emperor.png", 
        meaning: "The Emperor represents authority, structure, stability, and control. Rule your kingdom with confidence today! Take charge of your life and make decisions like a boss. Your authority is respected, so lead with strength and grace.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Hierophant Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Hierophant.png", 
        meaning: "The Hierophant represents tradition, conformity, and spiritual guidance. Seek wisdom from the ancient scrolls today! Dive into the teachings of the wise ones who came before you. Whether it's through books, mentors, or your own inner guru, let knowledge be your guide.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Lovers Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Lovers.png", 
        meaning:  "The Lovers represents love, relationships, harmony, and choices. Love is in the air, my dear! Whether it's romantic, platonic, or self-love, embrace the connections that light up your heart. Today is all about spreading love like confetti!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Chariot Card.",
        frontImage:  "photo gallery/Rider Waite Tarot Deck/The Chariot.png", 
        meaning: "The Chariot represents determination, willpower, and victory through effort. Giddy up, adventurer! Charge forward with determination and drive. Your chariot awaits, so grab the reins and ride towards your dreams with gusto!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Strength Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Strength.png", 
        meaning: "Strength represents courage, inner strength, and resilience. Roar like a lion today, mighty warrior! Tap into your inner strength and face challenges head-on. You're a force to be reckoned with, so don't let anything hold you back!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Hermit Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Hermit.png",
        meaning: "The Hermit represents introspection, solitude, and seeking inner guidance. It's time for a cozy night in, wise sage! Retreat into your hermit cave and bask in the solitude. Reflect on life's mysteries and recharge your spiritual batteries.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got Wheel of Fortune Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/Wheel of Fortune.png", 
        meaning: "The Wheel of Fortune represents destiny, luck, and changes beyond control. Lady Luck is on your side today! Spin the wheel of destiny and see where it takes you. With a little bit of magic and a whole lot of optimism, anything is possible!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Justice Card.",
        frontImage:  "photo gallery/Rider Waite Tarot Deck/The Justice.png",
        meaning: "Justice represents fairness, balance, and accountability. Stand tall like the lady of justice today! Seek balance and fairness in all your dealings. Your scales are finely tuned, so trust in your sense of right and wrong.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Hanged Man Card.",
        frontImage:  "photo gallery/Rider Waite Tarot Deck/The Hanged Man.png", 
        meaning: "The Hanged Man represents surrender, letting go, and seeing things from a new perspective. Hang loose, my friend! Embrace the upside-down moments and see things from a new perspective. Sometimes, flipping your world upside down can lead to the most enlightening discoveries!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got Death Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/Death.png", 
        meaning: "Death represents endings, transformation, and new beginnings. Embrace the cycle of life today! Let go of what no longer serves you and make room for new beginnings. Like a phoenix rising from the ashes, transformation awaits!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got Temperance Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/Temperance.png", 
        meaning: "Temperance represents balance, moderation, and harmony. Mix it up like a cosmic bartender today! Find harmony in the cocktail of life by blending different flavors and energies. Sip slowly and savor the sweet symphony of balance.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Devil Card.",
        frontImage:  "photo gallery/Rider Waite Tarot Deck/The Devil.png", 
        meaning: "The Devil represents materialism, bondage, and unhealthy attachments. Release your inner rebel today! Break free from the chains of conformity and embrace your wild side. Dance with your demons and celebrate your quirks!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Tower Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Tower.png", 
        meaning: "The Tower represents sudden change, upheaval, and revelation. Brace yourself for a cosmic shake-up today! Like a lightning bolt from the sky, change is coming. Embrace the chaos and trust that something magical awaits on the other side!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Star Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Star.png",
        meaning: "The Star represents hope, inspiration, and spiritual guidance. Twinkle like a star in the night sky today! Shine bright and spread your light to all who cross your path. You're a celestial being, so don't be afraid to sparkle!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Moon Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Moon.png",
        meaning: "The Moon represents illusions, subconscious, and uncertainty. Dive into the sea of mystery today! Let your intuition be your guide as you navigate the waves of the unknown. Embrace the shadows and uncover the hidden gems within.",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The Sun Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The Sun.png",
        meaning:  "The Sun represents success, joy, and vitality. Soak up the sunshine today, radiant being! Bask in the warm glow of positivity and let your inner light shine. With a skip in your step and a smile on your face, the world is your playground!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got Judgement Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/Judgement.png", 
        meaning: "Judgement represents reflection, accountability, and inner calling. It's time for a cosmic review today! Reflect on your past choices and celebrate how far you've come. Embrace your growth and step into your power like the divine being you are!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    {
        header: "You've Got The World Card.",
        frontImage: "photo gallery/Rider Waite Tarot Deck/The World.png", 
        meaning: "The World represents completion, fulfillment, and accomplishment. Today, you're the star of the show, darling! Dance like nobody's watching and celebrate your accomplishments. You've reached the final level, so take a bow and enjoy the standing ovation!",
        backImage: "photo gallery/tarotDeck-back.png"
    },
    
];


 // Function to shuffle cards
function shuffleCards() {
    
    for (let i = tarotCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tarotCards[i], tarotCards[j]] = [tarotCards[j], tarotCards[i]];
    }
    return tarotCards;
}

// Function to display back cards
function displayBackCards() {
    const container = document.getElementById("cards-container");

    container.innerHTML = '';

    const horizontalIncrement = 40;

    tarotCards.forEach((card, index) => {

        const img = document.createElement("img");
        img.src = card.backImage;
        img.alt = `Back Card ${index}`;
        img.className = "back-card"; 
        img.style.zIndex = (totalCards - index).toString();
        
       const horizontalPosition = (totalCards - index - 1) * horizontalIncrement;

        img.style.left = `${horizontalPosition}px`; 

        img.addEventListener('click', handleCardClick);

        img.addEventListener('mouseover', function() {
            document.addEventListener('click', function playHoverSound() {
                const hoverSound = document.getElementById('hover-sound');
                console.log("hover sound played");

                hoverSound.play().catch(function(error) {
                    console.error('Failed to play hover sound:', error);
                });
                document.removeEventListener('click', playHoverSound);
            }, { once: true });
        });

        img.addEventListener('mouseout', function() {
            const hoverSound = document.getElementById('hover-sound');
            hoverSound.pause();
            hoverSound.currentTime = 0; 
        });

        container.appendChild(img);
    });
}

let shuffledCards = shuffleCards(); 
displayBackCards(shuffledCards);

function handleCardClick(event) {
    const clickedCard = event.target;

    const backCardIndex = Array.from(document.querySelectorAll('.cards-container .back-card')).indexOf(clickedCard);
    
    flipCard(clickedCard, backCardIndex);

    setTimeout(() => {
        showCardMeaning(backCardIndex);
    }, 900); 
}

// Function to flip the card
function flipCard(clickedCard, cardIndex) {
    const frontImageUrl = tarotCards[cardIndex].frontImage;
    
    const frontCard = new Image();
    frontCard.src = frontImageUrl;
    frontCard.classList.add('front-card'); 
    
    frontCard.style.position = 'absolute';
    frontCard.style.top = clickedCard.style.top;
    frontCard.style.left = clickedCard.style.left;
    
    frontCard.classList.add('flipped');
    
    const container = document.querySelector('.cards-container');
    container.appendChild(frontCard);
    
    clickedCard.remove();
}

// Function to show card meaning
function showCardMeaning(cardIndex) {
    hideContent();

    const chosenCard = tarotCards[cardIndex];

    const popup = document.getElementById('card-meaning-popup');
    popup.style.display = 'block';
    popup.classList.add('popup');

    const chosenCardImage = popup.querySelector('.chosen-card-image');
    chosenCardImage.src = chosenCard.frontImage;

    const headerElement = popup.querySelector('.header');
    const meaningElement = popup.querySelector('.meaning');
    headerElement.textContent = chosenCard.header;
    meaningElement.textContent = chosenCard.meaning;


    const playAgainButton = document.getElementById('play-again');
    playAgainButton.addEventListener('click', function() {
     StartAgain();
    });
}

// Function to hide the container and shuffle button
function hideContent() {
    const introText = document.querySelector('.intro-text');
    const promptTextbox = document.querySelector('.prompt-textbox');
    const promptText = document.querySelector('.prompt-text');
    const container = document.querySelector('.cards-container');

    container.addEventListener('animationend', function(event) {
        if (event.animationName === 'fadeOut') {
            container.style.display = 'none';
            introText.style.display = 'none';
            promptTextbox.style.display = 'none';
            promptText.style.display = 'none';
            container.classList.remove('animate-out');
        }
    });

    container.classList.add('animate-out');
}

const backCardImages = document.querySelectorAll('.cards-container .back-cards');
backCardImages.forEach(backCard => {
    backCard.addEventListener('click', flipCard);
});

  displayPageOnLoad(shuffledCards);

  //Function to start again
function StartAgain() {
    const cardMeaningPopup = document.getElementById('card-meaning-popup');
    cardMeaningPopup.style.display = 'none';

    console.log("Start Again button clicked");

    resetElements();
    shuffledCards = shuffleCards();
    resetContainer(shuffledCards);
    displayPageOnLoad(); 
}

//Function to display the content body
function displayPageOnLoad() {
    const introText = document.querySelector('.intro-text');
    const promptTextbox = document.querySelector('.prompt-textbox');
    const promptText = document.querySelector('.prompt-text');
    const container = document.querySelector('.cards-container');
    setTimeout(function() {
        
        introText.classList.add('show');
        introText.style.display = 'block';

        setTimeout(function() {
            promptTextbox.classList.add('show');
            promptTextbox.style.display = 'block';

            setTimeout(function() {
                promptText.classList.add('show');
                promptText.style.display = 'block';

                setTimeout(function() {
                    container.classList.add('show');
                    container.style.display = 'block';

                    container.classList.add('animate-in');

                    console.log("container displayed");
                }, 800);
            }, 700); 
        }, 700); 
    }, 700);
}

//Funtion to reset the content body
function resetElements() {
    const introText = document.querySelector('.intro-text');
    const promptTextbox = document.querySelector('.prompt-textbox');
    const promptText = document.querySelector('.prompt-text');
    const container = document.querySelector('.cards-container');

    introText.classList.remove('show');
    promptTextbox.classList.remove('show');
    promptText.classList.remove('show');
    container.classList.remove('show', 'animate-in');

    introText.style.display = 'none';
    promptTextbox.style.display = 'none';
    promptText.style.display = 'none';
    container.style.display = 'none';
}

//Function to reset the card container
function resetContainer() {
    const container = document.querySelector('.cards-container');
    const cards = container.querySelectorAll('.card');

    cards.forEach(card => {
        const frontImage = card.querySelector('.front-image');
        if (frontImage) {
            frontImage.remove();
        }
    });

    displayBackCards(shuffledCards);
}


