// script.js

// Chatbot functionality
class Chatbot {
    constructor(knowledgeBase) {
        this.knowledgeBase = knowledgeBase;
    }

    respondToMessage(message) {
        // Basic message handling
        const lowerCaseMessage = message.toLowerCase();

        if (this.knowledgeBase[lowerCaseMessage]) {
            return this.knowledgeBase[lowerCaseMessage];
        } else {
            return "I'm sorry, I don't understand. Can you ask something else?";
        }
    }
}

// F1 in Schools knowledge base
const f1KnowledgeBase = {
    "what is f1 in schools?": "F1 in Schools is a global educational program that engages students in STEM, where they design, build, and race miniature F1 cars.",
    "how do you participate?": "Students form teams, create a car model, and compete against others in regional and international competitions.",
    "what are the age limits?": "Participants are typically between 9 and 19 years old, depending on the region's rules.",
};

// Instantiate the chatbot
const myChatbot = new Chatbot(f1KnowledgeBase);

// Example interaction
const userMessage = 'What is F1 in Schools?';
console.log(myChatbot.respondToMessage(userMessage));

// Interactive features (pseudo-code)
function onUserSendMessage(message) {
    const response = myChatbot.respondToMessage(message);
    displayResponse(response);
}

function displayResponse(response) {
    // Code to display the response in the chat UI
}