const collapseBar = document.querySelector('.collapse-bar');
const popupWindow = document.querySelector('.popup-window');
const popupWindowAllCourses = document.querySelector('.popup-window-all-courses');
const coursesBtn = document.getElementById('all-courses-btn');
const blogTitle = document.getElementById('blog-heading');
const blogContent = document.getElementById('blog-content');
const postBlog = document.getElementById('post-blog');
const addBlog = document.querySelector('.add-blog');
const openChatButton = document.querySelector('#chat-opener');
const chatSystem = document.querySelector('.chat-body');
const chatBody = document.getElementById('chat-body');
const exitChat = document.querySelector('.back-chat')

function openPopup() {
          popupWindow.classList.toggle('hidden')
}

function openPopupCourses() {
          popupWindowAllCourses.classList.toggle('hidden')
}

collapseBar.addEventListener('click', () => { openPopup(); popupWindowAllCourses.classList.add('hidden') })


//  Creating a blog post
addBlog.addEventListener('click', () => {
          document.querySelector('.blog-poster').classList.toggle('hidden')
});

postBlog.addEventListener('click', () => {
          console.log('clicked');

          const card = document.createElement('div');
          card.classList.add('card');

          const blog = document.querySelector('.blogs');

          const content = document.createElement('div');
          content.classList.add('content');
          const justADiv = document.createElement('div')
          const Title = document.createElement('h1');
          Title.textContent = blogTitle.value; // Assuming you have an input element with the ID 'blogTitle'

          const Content = document.createElement('p');
          Content.textContent = blogContent.value; // Assuming you have a textarea element with the ID 'blogContent'

          const imageContainer = document.createElement('div');
          imageContainer.classList.add('img-container');

          const image = document.createElement('img');
          image.classList.add('width');
          const imageInput = document.getElementById('blog-image'); // Assuming you have an input element with the ID 'blog-image'
          const selectedImageFile = imageInput.files[0];
          if (selectedImageFile instanceof Blob || selectedImageFile instanceof File) {
                    const imgURL = URL.createObjectURL(selectedImageFile);
                    image.src = imgURL // Get the selected image
          } else {
                    console.error('invalid')
          }
          imageContainer.appendChild(image); // Append the image to the imageContainer
          content.append(imageContainer)

          blog.appendChild(card);

          // Append the elements to their respective parents
          card.appendChild(imageContainer);
          card.append(justADiv)
          justADiv.append(Title, Content)




          // Clear input values after posting
          blogTitle.value = '';
          blogContent.value = '';

          // Revoke the blob URL to prevent memory leaks


          document.querySelector('.blog-poster').classList.toggle('hidden');
});


back.addEventListener('click', () => {
          document.querySelector('.blog-poster').classList.toggle('hidden');
})

const signupLogin = document.querySelector('.Signup-button');

signupLogin.addEventListener('click', () => {
          window.location.href = '../Focus/Login/login.html'
});

// for chat system
openChatButton.addEventListener('click', () => {
          chatSystem.classList.remove('hidden')
});






exitChat.addEventListener('click', () => {
          chatSystem.classList.add('hidden')
});



const messageText = document.getElementById('message-text');
const sendMessage = document.getElementById('send-message');


const replies = {
          hello: ["Hello, How may I help you?", "Hi there! How can I assist you?"],
          bye: ["See ya!", "Goodbye! Have a great day!"],
          other: ["Try saying 'Hello'", "I'm not sure what you mean."]
};


document.addEventListener('DOMContentLoaded', () => {
          const urlParams = new URLSearchParams(window.location.search);
          const section = urlParams.get('section');
          const purchasedProduct = urlParams.get('purchased');

          if (section === 'profile') {
                    const body = document.querySelector('body');
                    body.innerHTML = `
          <!-- Your profile content here -->
        `;
          }

          const purchasedContent = document.getElementById('purchasedContent');
          const otherContent = document.getElementById('otherContent');

          if (purchasedProduct === 'pencil') {
                    purchasedContent.innerHTML = "<p>You have purchased a pencil!</p>";
                    purchasedContent.style.display = 'block';
                    otherContent.style.display = 'none';
          } else if (purchasedProduct === 'pen') {
                    purchasedContent.innerHTML = "<p>You have purchased a pen!</p>";
                    purchasedContent.style.display = 'block';
                    otherContent.style.display = 'none';
          } else {
                    otherContent.style.display = 'block';
                    purchasedContent.style.display = 'none';
          }

          // Function to handle purchase logic
          function buyCourse(product) {
                    // Your purchase logic here
          }
});


