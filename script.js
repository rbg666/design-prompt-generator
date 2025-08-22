// Data Arrays
const formats = ["a logo", "an album cover", "a book cover", "a poster for an event", "a packaging label", "a social media template", "a t-shirt graphic", "a set of 3 app icons", "an animated GIF", "a landing page hero section", "an Instagram carousel post (3-5 slides)", "a YouTube thumbnail", "a mobile app login screen", "a weather app interface", "a music player UI", "a set of custom UI buttons (primary, secondary, destructive)", "a website footer design", "an e-commerce product card", "an email newsletter header", "a custom emoji/sticker pack for Discord/Slack", "a desktop wallpaper", "a dashboard widget", "a business card", "a record sleeve for a vinyl LP", "a skateboard deck graphic", "a coffee mug design", "a restaurant menu", "a trifold brochure", "an event invitation suite (invitation, RSVP, details card)", "a beer/wine bottle label", "a brand mascot character", "a brand pattern", "a brand style guide one-sheet", "a logo and wordmark combination", "a monogram logo", "an animated logo reveal (3-5 seconds)", "a short loading screen animation", "an animated micro-interaction (like a button click or toggle)", "a TikTok/Reels video overlay", "a set of 6 spot illustrations for a blog post", "a small infographic explaining a process", "a character turnaround sheet", "a stylized chart or graph design"];
const subjects = ["a lunar exploration startup", "an artisan pickle company", "a fictional shoegaze band", "a mysterious, hidden bookstore", "a mobile dog grooming service", "a podcast about forgotten history", "a community-run rooftop garden", "a retro-futuristic airline", "a company that sells haunted objects", "an apiary (bee farm)", "a record shop", "a gay underground rave collective", "an independent video game studio", "a flea market", "a vinyl listening bar", "a theme park"];
const constraints = ["using only 2 specific colors.", "using only typography.", "using a free font from Google Fonts.", "in under 60 minutes.", "without using the letter 'A'.", "designed for a dark mode interface.", "in a perfect square format.", "using only geometric shapes."];

// Styles as an array of objects (image property removed)
const styles = [
    { name: "in a Frutiger Aero style", link: "https://aesthetics.fandom.com/wiki/Frutiger_Aero" },
    { name: "in a brutalist & raw style", link: "https://en.wikipedia.org/wiki/Brutalist_websites" },
    { name: "in the Swiss International Typographic style", link: "https://en.wikipedia.org/wiki/International_Typographic_Style" },
    { name: "in a modern Glassmorphism style", link: "https://www.nngroup.com/articles/glassmorphism/" },
    { name: "in a Y2K & futuristic style", link: "https://aesthetics.fandom.com/wiki/Y2K" },
    { name: "in a grunge & distressed style", link: "https://artincontext.org/grunge-art/" },
    { name: "in an optimistic Solarpunk style", link: "https://en.wikipedia.org/wiki/Solarpunk" },
    { name: "in a psychedelic & vibrant style", link: "https://en.wikipedia.org/wiki/Psychedelic_art" },
    { name: "in an Art Deco & luxurious style", link: "https://en.wikipedia.org/wiki/Art_Deco" },
    { name: "in a cottagecore & rustic style", link: "https://aesthetics.fandom.com/wiki/Cottagecore" },
    { name: "in a realistic Skeuomorphic style", link: "https://en.wikipedia.org/wiki/Skeuomorph" },
    { name: "in a clean Flat Design style", link: "https://en.wikipedia.org/wiki/Flat_design" },
    { name: "in a soft Neumorphic style", link: "https://en.wikipedia.org/wiki/Neumorphism" },
    { name: "in a functional Bauhaus style", link: "https://en.wikipedia.org/wiki/Bauhaus" },
    { name: "in a bold Maximalist style", link: "https://en.wikipedia.org/wiki/Maximalism" },
    { name: "in a minimalist & clean style", link: "https://en.wikipedia.org/wiki/Minimalism" }
];

// Get references to our HTML elements
const promptOutput = document.getElementById('prompt-output');
const generateBtn = document.getElementById('generate-btn');
const resourceContainer = document.getElementById('resource-container');
const styleLink = document.getElementById('style-link');

function generatePrompt() {
    const randomFormat = formats[Math.floor(Math.random() * formats.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];

    // Pick a random style OBJECT from the new array
    const randomStyleObject = styles[Math.floor(Math.random() * styles.length)];

    // Use the 'name' property from the object for the prompt text
    const finalPrompt = `Design ${randomFormat} for ${randomSubject} ${randomStyleObject.name}, with the constraint of ${randomConstraint}`;

    promptOutput.textContent = finalPrompt;

    // Populate and show the resource container link
    styleLink.href = randomStyleObject.link;
    styleLink.textContent = `Learn More About: ${randomStyleObject.name.replace("in a ", "").replace(" style", "")}`;
    
    resourceContainer.style.display = "block"; // Make the container visible
}

generateBtn.addEventListener('click', generatePrompt);