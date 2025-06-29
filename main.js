function sendMessage() {
      const userInput = document.getElementById('user-input');
      const message = userInput.value.trim();
      if (message === '') return;

      appendMessage('user', message);
      userInput.value = '';

      // Simulated bot response
      setTimeout(() => {
        const response = getBotReply(message);
        appendMessage('bot', response);
      }, 500);
    }

    function appendMessage(sender, text) {
      const chatBox = document.getElementById('chat-box');
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message ' + sender;
      messageDiv.innerHTML = `<p>${text}</p>`; 
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotReply(input) {
      input = input.toLowerCase();
      if (input.includes('admission')) return 'Admissions start from July every year. Please visit our website for more details.';
      if (input.includes('fee')) return 'The annual fee is approximately ₹90,000 for B.Tech programs.';
      if (input.includes('hostel')) return 'Yes, hostel facilities are available for both boys and girls.';
      if (input.includes('courses')) return 'We offer B.Tech in CSE, IT, ECE, and Mechanical branches.';
      return "Sorry, I couldn't understand that. Please contact the college admin for detailed info.";
    }