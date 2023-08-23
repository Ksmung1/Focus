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
const exitChat = document.querySelector('.back-chat');
const mediaElements = document.querySelectorAll('.media-element');
const mediaScroller = document.querySelector('.media-scroller');
const hiddenBlog = document.querySelector('.hidden-blog')

const pTime = document.querySelector('.time');

// Get the current date and time
const currentDate = new Date();

// Extract different components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the components as desired
const formattedDate = `${year}-${month}-${day}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Display the current date and time
console.log("Current Date:", formattedDate);
console.log("Current Time:", formattedTime);

pTime.innerHTML = `${formattedDate}`

function openPopup() {
  popupWindow.classList.toggle('hidden')
}

function openPopupCourses() {
  popupWindowAllCourses.classList.toggle('hidden')
}

collapseBar.addEventListener('click', () => { openPopup(); popupWindowAllCourses.classList.add('hidden') })

let currentPos = 0;

function scrollImages() {
  currentPos += mediaElements[0].clientWidth;
  if (currentPos >= mediaScroller.scrollWidth) {
    currentPos = 0;
  }
  mediaScroller.scrollTo(currentPos, 0);
}

setInterval(scrollImages, 3000); // Scroll every 5 seconds

// //  Creating a blog post
// addBlog.addEventListener('click', () => {
//   document.querySelector('.blog-poster').classList.toggle('hidden')
// });

postBlog.addEventListener('click', () => {

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
  window.location.href = '../Login/login.html'
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
         Not available yet
        `;
  } else if (section === 'all-courses') {

  }

  const purchasedContent = document.getElementById('purchasedContent');
  const otherContent = document.getElementById('otherContent');


  // Function to handle purchase logic
  function buyCourse(product) {
    // Your purchase logic here
    console.log('Purchased successfully')
  }
});


////////////////////////////aRTICLE ///////////////////////////////////
const blog = document.querySelector('.blogs');
const blogContainer = document.querySelector('.blog-container');

blog.addEventListener('click', (e) => {
  const card = e.target.closest('.card');



  if (card) {
    const cardId = card.getAttribute('id')
    if (cardId === 'article1') {
      blogContainer.classList.remove('hidden');
      blogContainer.innerHTML = `
                    <div class="card-viewer">
                    <img src="magzine/Picsart_23-08-23_20-48-11-650.jpg" alt="">
                    <div>
                             <h3>Cracking the SSB Interview: Unveiling the Path to Success
                             </h3>
                             <p class="time"></p>
                             <p class='content'>
The Services Selection Board (SSB) interview is a monumental gateway for individuals aspiring to join the prestigious Indian Armed Forces as officers. This intensive evaluation process is designed to assess not just your cognitive abilities, but also your character, leadership potential, and interpersonal skills. Successfully navigating the SSB interview requires a holistic approach that combines preparation, self-awareness, and a commitment to personal growth. Here's a comprehensive guide on how to crack the SSB interview and embark on a journey towards becoming an officer.
<br>
<br>
1. Know the Terrain: Understanding the SSB Process

Before you embark on this journey, acquaint yourself with the intricacies of the SSB process. From the initial screening tests to the final personal interview, each stage evaluates specific aspects of your personality. Understand the qualities and attributes that the armed forces value, such as leadership, communication skills, adaptability, and teamwork.
<br>
<br>
2. Self-Assessment: The Foundation of Excellence

Successful candidates are those who possess self-awareness and a willingness to improve. Reflect on your strengths and weaknesses. Seek feedback from mentors, teachers, or friends to gain valuable insights into your character. Identifying areas for improvement is the first step towards personal growth.
<br>
<br>
3. Physical Fitness: A Prerequisite for Military Life

The armed forces demand physical fitness. Engage in regular exercise, sports, and outdoor activities to build endurance, strength, and agility. A healthy body not only demonstrates your commitment but also prepares you for the physical demands of military life.
<br>
<br>
4. Current Affairs and General Knowledge: Stay Informed

Stay updated with current affairs and general knowledge. Read newspapers, watch the news, and delve into national and international events. A well-informed candidate showcases intellectual curiosity and an understanding of the world around them.
<br>
<br>
5. Communication Skills: Articulate and Confident Expression

Effective communication is the cornerstone of leadership. Practice speaking clearly, confidently, and coherently. Engage in debates, discussions, and group activities to refine your communication skills.
<br>
<br>
6. OIR Test: Mastering Logical Reasoning


The Officer Intelligence Rating (OIR) test evaluates your logical reasoning and problem-solving abilities. Regular practice with puzzles, mathematical problems, and reasoning exercises enhances your cognitive agility and analytical thinking.
<br>
<br>

7. Psychological Tests: Express Your Inner Self

Psychological tests like the Thematic Apperception Test (TAT), Word Association Test (WAT), and Situation Reaction Test (SRT) delve into your thought process and creativity. Develop the ability to craft meaningful stories and responses that reflect your personality and values.
<br>
<br>
8. Group Tasks: Leadership and Teamwork

Group tasks assess your leadership, teamwork, and decision-making skills. Engage in group activities, sports, and simulations to hone your ability to work collaboratively and lead effectively.
<br>
<br>

9. Self-Description: Know Yourself Intimately

Be prepared to discuss your strengths, weaknesses, achievements, and aspirations. Genuine self-description reveals your authentic self, demonstrating maturity and self-awareness.
<br>
<br>

10. Mock Interviews: Polishing the Diamond

Practice mock interviews with experienced mentors. Constructive feedback will familiarize you with the interview setting, build your confidence, and fine-tune your responses.
<br>
<br>

11. Dress and Grooming: Impress with Professionalism

Dress neatly and professionally. Proper grooming and attire showcase your respect for the interview process and your understanding of the military's standards.
<br>
<br>

12. Confidence and Positivity: The Winning Mindset

Believe in yourself and your abilities. Maintain a positive attitude throughout the process. Confidence, optimism, and determination are magnetic traits that leave a lasting impression.
<br>
<br>

13. Immerse in Armed Forces Culture: Understanding the Calling

Research the values, history, and responsibilities of the armed forces. Aligning your aspirations with the organization's ethos reflects your genuine commitment to serve.

In conclusion, cracking the SSB interview demands more than just intellectual prowess; it necessitates character, adaptability, and the potential to lead. Prepare thoroughly, understand your strengths and areas for growth, and approach the process with a positive mindset. Remember, each interaction is an opportunity to showcase your potential to become an officer and a leader. As you embark on this transformative journey, embrace the challenge, embrace your growth, and step confidently towards realizing your dream of joining the ranks of the esteemed Indian Armed Forces.
               
<br>
<br>
</p>
                          
<button id='closeArticle'>Close</button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
                    </div>
                    </div>

                    `
      window.addEventListener('beforeunload', function (event) {
        // You can display a custom confirmation message here
        event.returnValue = "Are you sure you want to leave?"; // This message might not be shown in all browsers
      });


    } else if (cardId === 'article2') {
      blogContainer.classList.remove('hidden');
      blogContainer.innerHTML = `
                    <div class="card-viewer">
                    <img src="magzine/Picsart_23-08-23_21-32-16-006.jpg" alt="">
                    <div>
                             <h3>Cracking the SSB Interview: Unveiling the Path to Success
                             </h3>
                             <p class="time"></p>
                             <p class='content'>
                            

In the realm of elite military forces, the Para Special Forces stand as an epitome of courage, precision, and unparalleled dedication. The journey to become a part of this exceptional brotherhood is no ordinary feat; it's a relentless pursuit of excellence that tests one's physical endurance, mental fortitude, and unwavering commitment to the nation. In this comprehensive exploration, we delve into the rigorous selection process that shapes these elite warriors and the qualities that define those who walk the path to becoming a Para SF commando.

Origins and Aspirations: The Para Special Forces, renowned as the Para SF, were conceived in response to the dynamic challenges of modern warfare. Established in 1966, their mission was clear: to be a force of extraordinary individuals who could operate beyond the conventional realm and excel in unconventional scenarios. Aspiring to become a Para SF commando means embracing this legacy of exceptionalism.

The Crucible of Selection: The selection process for the Para SF is not for the faint-hearted. It's a grueling and unforgiving journey that demands physical prowess, mental resilience, and an unyielding spirit. Aspirants must conquer a series of arduous tests, including long-distance runs, obstacle courses, survival challenges, and parachute jumps. The aim is to identify individuals who can withstand immense pressure and still emerge as unshakable leaders.

Endurance Beyond Limits: Surviving the selection process requires more than just physical strength. Candidates endure sleep deprivation, pushing the boundaries of their mental and emotional capacities. This aspect of training prepares them to operate effectively even in the most challenging and demanding scenarios.

Mental Fortitude and Resilience: The path to becoming a Para SF commando is not solely about physical prowess. Mental fortitude and resilience play a pivotal role. Aspirants must demonstrate unwavering determination, the ability to think on their feet, and a willingness to face adversity head-on.

The Coveted Maroon Beret: A Symbol of Honor: Earning the maroon beret is the culmination of this grueling journey. This iconic headgear is more than a piece of uniform; it symbolizes membership in an elite brotherhood committed to the highest standards of discipline, courage, and service.

Building Brotherhood: Camaraderie and Unity: Throughout the selection process, candidates forge strong bonds with their fellow aspirants. This camaraderie, built on shared challenges and aspirations, forms a foundation that sustains them through the demanding training that follows.

Training and Transformation: Once selected, the transformation into a Para SF commando continues. Rigorous training sharpens skills in areas such as combat tactics, weapons proficiency, advanced survival techniques, and specialized warfare tactics. This training equips them to face a wide spectrum of challenges with precision and expertise.

Adapting to Diverse Roles: Para SF commandos are trained to be versatile and adept at various roles. From counter-terrorism operations to unconventional warfare and intelligence gathering, they are the Swiss Army knives of the military world, ready to adapt and excel in any situation.

An Ongoing Journey: The journey to become a Para SF commando doesn't end with training; it's an ongoing commitment to excellence. These elite warriors continually hone their skills, learn from experiences, and evolve to meet new and emerging threats.

A Legacy of Valor: The Para Special Forces are a living legacy of valor and dedication. The path to becoming a Para SF commando is a testament to the indomitable spirit of those who seek to serve their nation at the highest level. It's a journey of self-discovery, transformation, and unwavering commitment that shapes individuals into the epitome of military excellence – a Para SF commando.
                             </p>
                          
<button id='closeArticle'>Close</button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
                    </div>
                    </div>`
    }

  }
  const closeButtonArticle = document.querySelector('#closeArticle')

  closeButtonArticle.addEventListener('click', () => { blogContainer.classList.add('hidden') })

});