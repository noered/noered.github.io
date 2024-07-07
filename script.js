let botState = 0; // 用于跟踪聊天机器人的状态
let userName = '';
let userGender = '';
let userAge = '';

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === '') return;

    displayMessage(message, 'user');
    userInput.value = '';

    processUserMessage(message);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = message;

    if (sender === 'bot') {
        const avatar = document.createElement('img');
        avatar.src = 'sarah-avatar.png'; // 确保这个路径指向你的头像图片
        messageElement.appendChild(avatar);
        messageElement.appendChild(textElement);
    } else {
        messageElement.appendChild(textElement);
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserMessage(message) {
    let botResponse = '';
    switch (botState) {
        case 0:
            botResponse = 'Hello! What is your name?';
            botState++;
            break;
        case 1:
            userName = message;
            botResponse = `Nice to meet you, ${userName}! How are you?`;
            botState++;
            break;
        case 2:
            botResponse = 'What is your gender?';
            botState++;
            break;
        case 3:
            userGender = message;
            botResponse = 'Got it. How old are you?';
            botState++;
            break;
        case 4:
            userAge = message;
            botResponse = `Thank you. How are things going at work or in life recently? Any stress?`;
            botState++;
            break;
        case 5:
            botResponse = `Perhaps you'd like to talk more about it, ${userName}?`;
            botState = 0; // 重置状态以便重新开始对话
            break;
        default:
            botResponse = 'I am not sure what you mean.';
            botState = 0;
    }
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 500);
}
