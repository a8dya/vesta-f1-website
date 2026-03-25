// AI Chatbot Functionality for F1 in Schools

// Comprehensive F1 Knowledge Base
const f1KnowledgeBase = {
    "what is f1 in schools?": "F1 in Schools is a global competition where students design and build a miniature Formula 1 car.",
    "how does it work?": "Teams of students create their cars, which are then raced against each other.",
    "what skills do students learn?": "Students learn engineering, project management, teamwork, and problem-solving skills.",
    // Add more entries as needed
};

// Function to handle message input
function handleUserMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (f1KnowledgeBase[lowerCaseMessage]) {
        return f1KnowledgeBase[lowerCaseMessage];
    } else {
        return "I'm sorry, I can only answer questions related to F1 in Schools.";
    }
}

// Update the chat UI
function updateChatUI(userMessage, botResponse) {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML += `<div class='user-message'>${userMessage}</div>`;
    chatContainer.innerHTML += `<div class='bot-message'>${botResponse}</div>`;
}

// Message history array
let messageHistory = [];

// Function to send message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    userInput.value = '';
    if (message.trim() === '') return;  // Prevent empty messages
    const botResponse = handleUserMessage(message);
    messageHistory.push({ user: message, bot: botResponse });
    updateChatUI(message, botResponse);
    updateTypingIndicator(false);
}

// Function to show typing indicator
function updateTypingIndicator(isTyping) {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = isTyping ? 'block' : 'none';
}

// Event listener for user input
document.getElementById('user-input-form').addEventListener('submit', (e) => {
    e.preventDefault();
    updateTypingIndicator(true);
    setTimeout(sendMessage, 500);  // Simulate typing delay
});

// Error handling
window.onerror = function (message, source, lineno, colno, error) {
    console.error('Error detected:', message);
    alert('An error occurred. Please try again later.');
};

// Initial UI setup
updateChatUI('Bot', 'Hello! Ask me anything about F1 in Schools.');
