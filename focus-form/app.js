
const message = document.querySelector('.message');
const sendButton = document.querySelector('.send-button');
const chatArea = document.querySelector('.chat-area');

sendButton.addEventListener('click', (e) => {
          e.preventDefault();
          const messageValue = message.value;
          // Create a new Date object
          const currentDate = new Date();

          // Get the current hour (0-23)
          const currentHour = currentDate.getHours();

          // Get the current minute (0-59)
          const currentMinute = currentDate.getMinutes();

          // Format the hour and minute with leading zeros
          const formattedHour = currentHour.toString().padStart(2, '0');
          const formattedMinute = currentMinute.toString().padStart(2, '0');

          const time = `${formattedHour}:${formattedMinute}`
          // Display the current time in hh:mm format
          console.log(`Current time: ${formattedHour}: ${formattedMinute}`);

          // to check if itsssend by the user or not
          const isUserMessage = true;

          const chatMessage = document.createElement('div');
          const messageParagraph = document.createElement('p');
          messageParagraph.textContent = messageValue;
          const timeParagraph = document.createElement('p');
          timeParagraph.classList.add('time');
          timeParagraph.textContent = time;


          if (isUserMessage) {
                    messageParagraph.classList.add('userMessage');
                    chatMessage.classList.add('right')
                    // Add the user message class

          } else {
                    messageParagraph.classList.add('notUserMessage'); // Add the user message class
                    chatMessage.classList.add('left')
          }


          chatMessage.appendChild(messageParagraph);
          chatMessage.appendChild(timeParagraph);


          chatArea.appendChild(chatMessage);

          console.log(messageValue)
          message.value = ''

          chatArea.scrollTop = chatArea.scrollHeight;
})


