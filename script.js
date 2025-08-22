// Step 3.1: Our arrays of prompt components
const formats = [
    "a logo",
    "an album cover",
    "a book cover",
    "a poster for an event",
    "a packaging label",
    "a social media template",
    "a t-shirt graphic",
    "a set of 3 app icons",
    "an animated GIF",
    "a landing page hero section",
    "an Instagram carousel post (3-5 slides)",
    "a YouTube thumbnail",
    "a mobile app login screen",
    "a weather app interface",
    "a music player UI",
    "a set of custom UI buttons (primary, secondary, destructive)",
    "a website footer design",
    "an e-commerce product card",
    "an email newsletter header",
    "a custom emoji/sticker pack for Discord/Slack",
    "a desktop wallpaper",
    "a dashboard widget",
    "a business card",
    "a record sleeve for a vinyl LP",
    "a skateboard deck graphic",
    "a coffee mug design",
    "a restaurant menu",
    "a trifold brochure",
    "an event invitation suite (invitation, RSVP, details card)",
    "a beer/wine bottle label",
    "a brand mascot character",
    "a brand pattern",
    "a brand style guide one-sheet",
    "a logo and wordmark combination",
    "a monogram logo",
    "an animated logo reveal (3-5 seconds)",
    "a short loading screen animation",
    "an animated micro-interaction (like a button click or toggle)",
    "a TikTok/Reels video overlay",
    "a set of 6 spot illustrations for a blog post",
    "a small infographic explaining a process",
    "a character turnaround sheet",
    "a stylized chart or graph design"
];

const subjects = [
    "a lunar exploration startup",
    "an artisan pickle company",
    "a fictional shoegaze band",
    "a mysterious, hidden bookstore",
    "a mobile dog grooming service",
    "a podcast about forgotten history",
    "a community-run rooftop garden",
    "a retro-futuristic airline",
    "a company that sells haunted objects",
    "an apiary (bee farm)",
    "a record shop",
    "a gay underground rave collective",
    "an independent video game studio",
    "a flea market",
    "a vinyl listening bar",
    "a theme park"
];

const styles = [
    "in a minimalist & clean style",
    "in a brutalist & raw style",
    "in a psychedelic & vibrant style",
    "in an Art Deco & luxurious style",
    "in a Swiss / International style",
    "in a grunge & distressed style",
    "in a Y2K & futuristic style",
    "in a cottagecore & rustic style",
    "in a solarpunk & optimistic style",
    "in a Frutiger Aero style",
    "in a realistic Skeuomorphic style",
    "in a clean Flat Design style", 
    "in a modern Glassmorphism style",
    "in a soft Neumorphic style",
    "in a functional Bauhaus style", 
    "in an optimistic Solarpunk style",
    "in a bold Maximalist style"
];

const constraints = [
    "using only 2 specific colors.",
    "using only typography.",
    "using a free font from Google Fonts.",
    "in under 60 minutes.",
    "without using the letter 'A'.",
    "designed for a dark mode interface.",
    "in a perfect square format.",
    "using only geometric shapes."
];

// Step 3.2: Get references to our HTML elements
const promptOutput = document.getElementById('prompt-output');
const generateBtn = document.getElementById('generate-btn');

// Step 3.3: Function to generate and display a new prompt
function generatePrompt() {
    // 1. Pick a random item from each array
    const randomFormat = formats[Math.floor(Math.random() * formats.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];

    // 2. Combine them into a sentence using a template literal (the backticks ``)
    const finalPrompt = `Design ${randomFormat} for ${randomSubject} ${randomStyle}, ${randomConstraint}`;

    // 3. Update the text on the page
    promptOutput.textContent = finalPrompt;
}

// Step 3.4: Add a 'click' event listener to the button
generateBtn.addEventListener('click', generatePrompt);