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


document.addEventListener("DOMContentLoaded", function () {
          const urlParams = new URLSearchParams(window.location.search);
          const section = urlParams.get('section');



          if (section === 'profile') {


                    const body = document.querySelector('body')
                    body.innerHTML = `<div>
                    <header><h3>FOCUS</h3> <p></p ></header >
                    
                    <div class="subscription">
                    <div class="items">
                              <div class="card">
                                        <p><a href="Exams/index.html?section=gsHistory">His</a></p>
                              </div>
                              <div class="card" style="background-color: rgb(87, 87, 255);">
                                        <p><a href="Exams/index.html?section=gsPolitics">Pol</a></p>
                              </div>
                              <div class="card" style="background-color:brown">
                                        <p><a href="Exams/index.html?section=gsMaths">Maths</a></p>
                              </div>
                              <div class="card" style="background-color: green">
                                        <p><a href="Exams/index.html?section=gsChemistry">Chem</a></p>
                              </div>
                              <div class="card " style="background-color: yellow">
                                        <p><a href="Exams/index.html?section=gsGK">GK</a></p>
                              </div>

                    </div>
                    <h6>One Stop Solution <br>For All Exam Preparation</h6>
                    <p>Mock tests, Personal Development, Career guidance <br>& Motivation
                              in one
                              package
                    </p>
                    <button type="button">Purchase</button>
                    <div class="row">
                              <div class="col">
                                        <h6>100+</h6>
                                        <p>Classes</p>
                              </div>
                              <div class="col">
                                        <h6>1+</h6>
                                        <p>Mock tests</p>
                              </div>
                              <div class="col">
                                        <h6>Many</h6>
                                        <p>Booster Tests</p>
                              </div>
                    </div>
          </div>
                    <button> <a href='quiz/quiz.html'>Start Quiz<a></button>

                    </div > `
          }
});
