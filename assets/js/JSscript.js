// A list of Shakespeare's most famous sonets (s), divided into individual lines within arrays
let s18 = [
    "Shall I compare thee to a summer\'s day?",
    "Thou art more lovely and more temperate:",
    "Rough winds do shake the darling buds of May",
    "And summer\'s lease hath all too short a date:",
    "Sometime too hot the eye of heaven shines,",
    "And often is his gold complexion dimm\'d;",
    "And every fair from fair sometime declines,",
    "By chance or nature\'s changing course untrimm\'d;",
    "But thy eternal summer shall not fade",
    "Nor lose possession of that fair thou owest;",
    "Nor shall Death brag thou wander\'st in his shade",
    "When in eternal lines to time thou growest:",
    "So long as men can breathe or eyes can see,",
    "So long lives this and this gives life to thee."
];
let s30 = [
    "When to the sessions of sweet silent thought ",
    "I summon up remembrance of things past,",
    "I sigh the lack of many a thing I sought,",
    "And with old woes new wail my dear time\'s waste:",
    "Then can I drown an eye, unused to flow,",
    "For precious friends hid in death\'s dateless night,",
    "And weep afresh love\'s long since cancell\'d woe,",
    "And moan the expense of many a vanish\'d sight:",
    "Then can I grieve at grievances foregone,", 
    "And heavily from woe to woe tell o\'er",
    "The sad account of fore-bemoaned moan,",
    "Which I new pay as if not paid before.",
    "But if the while I think on thee, dear friend,",
    "All losses are restor\'d and sorrows end."
];
let s33 = [
    "Full many a glorious morning have I seen",
    "Flatter the mountain tops with sovereign eye,",
    "Kissing with golden face the meadows green,",
    "Gilding pale streams with heavenly alchemy;",
    "Anon permit the basest clouds to ride",
    "With ugly rack on his celestial face,",
    "And from the forlorn world his visage hide,",
    "Stealing unseen to west with this disgrace:",
    "Even so my sun one early morn did shine,", 
    "With all triumphant splendour on my brow;",
    "But out, alack, he was but one hour mine,",
    "The region cloud hath mask\'d him from me now.",
    "Yet him for this my love no whit disdaineth;",
    "Suns of the world may stain when heaven\'s sun staineth."
];
let s73 = [
    "That time of year thou mayst in me behold",
    "When yellow leaves, or none, or few, do hang",
    "Upon those boughs which shake against the cold,",
    "Bare ruined choirs, where late the sweet birds sang.",
    "In me thou see\'st the twilight of such day",
    "As after sunset fadeth in the west;",
    "Which by and by black night doth take away,",
    "Death\'s second self, that seals up all in rest.",
    "In me thou see\'st the glowing of such fire,", 
    "That on the ashes of his youth doth lie,",
    "As the death-bed, whereon it must expire,",
    "Consum\'d with that which it was nourish\'d by.",
    "This thou perceiv\'st, which makes thy love more strong,",
    "To love that well, which thou must leave ere long."
];
let s104 = [
    "To me, fair friend, you never can be old,",
    "For as you were when first your eye I ey\'d,",
    "Such seems your beauty still. Three winters cold,",
    "Have from the forests shook three summers\' pride,",
    "Three beauteous springs to yellow autumn turn\'d,",
    "In process of the seasons have I seen,",
    "Three April perfumes in three hot Junes burn\'d,",
    "Since first I saw you fresh, which yet are green.",
    "Ah! yet doth beauty like a dial-hand,", 
    "Steal from his figure, and no pace perceiv\'d;",
    "So your sweet hue, which methinks still doth stand,",
    "Hath motion, and mine eye may be deceiv\'d:",
    "For fear of which, hear this thou age unbred:",
    "Ere you were born was beauty\'s summer dead."
];
let s116 = [
    "Let me not to the marriage of true minds",
    "Admit impediments. Love is not love",
    "Which alters when it alteration finds,",
    "Or bends with the remover to remove:",
    "O, no! it is an ever-fixed mark,",
    "That looks on tempests and is never shaken;",
    "It is the star to every wandering bark,",
    "Whose worth\'s unknown, although his height be taken.",
    "Love\'s not Time\'s fool, though rosy lips and cheeks", 
    "Within his bending sickle\'s compass come;",
    "Love alters not with his brief hours and weeks,",
    "But bears it out even to the edge of doom.",
    "If this be error and upon me proved,",
    "I never writ, nor no man ever loved."
];
let s129 = [
    "The expense of spirit in a waste of shame",
    "Is lust in action: and till action, lust",
    "Is perjured, murderous, bloody, full of blame,",
    "Savage, extreme, rude, cruel, not to trust;",
    "Enjoyed no sooner but despised straight;",
    "Past reason hunted; and no sooner had,",
    "Past reason hated, as a swallowed bait,",
    "On purpose laid to make the taker mad.",
    "Mad in pursuit and in possession so;", 
    "Had, having, and in quest to have extreme;",
    "A bliss in proof, and proved, a very woe;",
    "Before, a joy proposed; behind a dream.",
    "All this the world well knows; yet none knows well",
    "To shun the heaven that leads men to this hell."
];
let s130 = [
    "My mistress\' eyes are nothing like the sun;",
    "Coral is far more red, than her lips red:",
    "If snow be white, why then her breasts are dun;",
    "If hairs be wires, black wires grow on her head.",
    "I have seen roses damasked, red and white,",
    "But no such roses see I in her cheeks;",
    "And in some perfumes is there more delight",
    "Than in the breath that from my mistress reeks.",
    "I love to hear her speak, yet well I know", 
    "That music hath a far more pleasing sound:",
    "I grant I never saw a goddess go,",
    "My mistress, when she walks, treads on the ground:",
    "And yet by heaven, I think my love as rare,",
    "As any she belied with false compare."
];

// Creating a 2D array of all the sonnets
let finalSArray = [s18, s30, s33, s73, s104, s116, s129, s130];

// Getting the empty HTML div
let sonnetPrint = document.getElementById("allLines");

// Creating an empty array for the randomized poem to be assembled in
let arrayGather = []

// Function for shuffleBtn
function shuffleBtn(){

    // Remove all the values in arrayGather
    arrayGather.splice(0, arrayGather.length)

    // For the length of the poem (13 indexes)...
    for(let i = 0; i <= 13; i++){
        // create a randomizer that can only pick numbers within the length of the finalSArray.
        let random = Math.floor(Math.random() * finalSArray.length);
        // Then randomly pick a poem array and pick the i index of that poem (i will increase each loop). Add that poem line to arrayGather 
        arrayGather.push(finalSArray[random][i]);
    }

    // Create a new array that adds a line break to the end of each arrayGather value
    let newLineArray = arrayGather.join("<br>");

    // Replace the empty HTML div value with the value of newLineArray
    sonnetPrint.innerHTML = newLineArray;

}
