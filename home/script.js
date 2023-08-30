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
         <a href='index.html'>Back</a>
         <p>Check if you are log in or not</p>
         <button onclick = 'checkAuth'>Check </button>
        `;
  } else if (section === 'all-courses') {

  } else if (section === 'article') {
    const content = urlParams.get('content');

    body.innerHTML = decodeURIComponent(content);

  }



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

  const cardId = card.getAttribute('id')


  if (card) {
    if (cardId === 'article1') {
      const content = `
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
<strong>1. Know the Terrain: Understanding the SSB Process</strong>
<br>
<br>

Before you embark on this journey, acquaint yourself with the intricacies of the SSB process. From the initial screening tests to the final personal interview, each stage evaluates specific aspects of your personality. Understand the qualities and attributes that the armed forces value, such as leadership, communication skills, adaptability, and teamwork.
<br>
<br>
<strong>2. Self-Assessment: The Foundation of Excellence</strong>
<br>
<br>

Successful candidates are those who possess self-awareness and a willingness to improve. Reflect on your strengths and weaknesses. Seek feedback from mentors, teachers, or friends to gain valuable insights into your character. Identifying areas for improvement is the first step towards personal growth.
<br>
<br>
<strong>3. Physical Fitness: A Prerequisite for Military Life</strong>
<br>
<br>

The armed forces demand physical fitness. Engage in regular exercise, sports, and outdoor activities to build endurance, strength, and agility. A healthy body not only demonstrates your commitment but also prepares you for the physical demands of military life.
<br>
<br>
<strong>4. Current Affairs and General Knowledge: Stay Informed</strong>
<br>
<br>

Stay updated with current affairs and general knowledge. Read newspapers, watch the news, and delve into national and international events. A well-informed candidate showcases intellectual curiosity and an understanding of the world around them.
<br>
<br>
<strong>5. Communication Skills: Articulate and Confident Expression</strong>
<br>
<br>

Effective communication is the cornerstone of leadership. Practice speaking clearly, confidently, and coherently. Engage in debates, discussions, and group activities to refine your communication skills.
<br>
<br>
<strong>6. OIR Test: Mastering Logical Reasoning</strong>
<br>
<br>


The Officer Intelligence Rating (OIR) test evaluates your logical reasoning and problem-solving abilities. Regular practice with puzzles, mathematical problems, and reasoning exercises enhances your cognitive agility and analytical thinking.
<br>
<br>

<strong>7. Psychological Tests: Express Your Inner Self</strong>
<br>
<br>

Psychological tests like the Thematic Apperception Test (TAT), Word Association Test (WAT), and Situation Reaction Test (SRT) delve into your thought process and creativity. Develop the ability to craft meaningful stories and responses that reflect your personality and values.
<br>
<br>
<strong>8. Group Tasks: Leadership and Teamwork</strong>
<br>
<br>

Group tasks assess your leadership, teamwork, and decision-making skills. Engage in group activities, sports, and simulations to hone your ability to work collaboratively and lead effectively.
<br>
<br>

<strong>9. Self-Description: Know Yourself Intimately</strong>
<br>
<br>

Be prepared to discuss your strengths, weaknesses, achievements, and aspirations. Genuine self-description reveals your authentic self, demonstrating maturity and self-awareness.
<br>
<br>

<strong>10. Mock Interviews: Polishing the Diamond</strong>
<br>
<br>

Practice mock interviews with experienced mentors. Constructive feedback will familiarize you with the interview setting, build your confidence, and fine-tune your responses.
<br>
<br>

<strong>11. Dress and Grooming: Impress with Professionalism</strong>
<br>
<br>

Dress neatly and professionally. Proper grooming and attire showcase your respect for the interview process and your understanding of the military's standards.
<br>
<br>

<strong>12. Confidence and Positivity: The Winning Mindset</strong>
<br>
<br>

Believe in yourself and your abilities. Maintain a positive attitude throughout the process. Confidence, optimism, and determination are magnetic traits that leave a lasting impression.
<br>
<br>

<strong>13. Immerse in Armed Forces Culture: Understanding the Calling</strong>
<br>
<br>

Research the values, history, and responsibilities of the armed forces. Aligning your aspirations with the organization's ethos reflects your genuine commitment to serve.

In conclusion, cracking the SSB interview demands more than just intellectual prowess; it necessitates character, adaptability, and the potential to lead. Prepare thoroughly, understand your strengths and areas for growth, and approach the process with a positive mindset. Remember, each interaction is an opportunity to showcase your potential to become an officer and a leader. As you embark on this transformative journey, embrace the challenge, embrace your growth, and step confidently towards realizing your dream of joining the ranks of the esteemed Indian Armed Forces.
 
<br>
<br>
</p>
            
<br>

      </div>
      </div>

      `; // Your content here
      const encodedContent = encodeURIComponent(content);
      window.location.href = `index.html?section=article&content=${encodedContent}`

    } else if (cardId === 'article2') {

      const content = `
                    <div class="card-viewer">
                    <img src="magzine/Picsart_23-08-23_21-32-16-006.jpg" alt="">
                    <div>
                             <h3>The Path to Becoming a Para Special Forces Commando: A Journey of Grit and Valors
                             </h3>
                             <p class="time"></p>
                             <p class='content'>
                            

In the realm of elite military forces, the Para Special Forces stand as an epitome of courage, precision, and unparalleled dedication. The journey to become a part of this exceptional brotherhood is no ordinary feat; it's a relentless pursuit of excellence that tests one's physical endurance, mental fortitude, and unwavering commitment to the nation. In this comprehensive exploration, we delve into the rigorous selection process that shapes these elite warriors and the qualities that define those who walk the path to becoming a Para SF commando.
<br>
<br>
<strong>Origins and Aspirations: </strong>
<br>
<br>
The Para Special Forces, renowned as the Para SF, were conceived in response to the dynamic challenges of modern warfare. Established in 1966, their mission was clear: to be a force of extraordinary individuals who could operate beyond the conventional realm and excel in unconventional scenarios. Aspiring to become a Para SF commando means embracing this legacy of exceptionalism.
<br>
<br>
<strong>The Crucible of Selection:  </strong>
<br>
<br>
The selection process for the Para SF is not for the faint-hearted. It's a grueling and unforgiving journey that demands physical prowess, mental resilience, and an unyielding spirit. Aspirants must conquer a series of arduous tests, including long-distance runs, obstacle courses, survival challenges, and parachute jumps. The aim is to identify individuals who can withstand immense pressure and still emerge as unshakable leaders.
<br>
<br>
<strong>Endurance Beyond Limits: </strong> 
<br>
<br>
Surviving the selection process requires more than just physical strength. Candidates endure sleep deprivation, pushing the boundaries of their mental and emotional capacities. This aspect of training prepares them to operate effectively even in the most challenging and demanding scenarios.
<br>
<br>
<strong>Mental Fortitude and Resilience: </strong>
<br>
<br>
 The path to becoming a Para SF commando is not solely about physical prowess. Mental fortitude and resilience play a pivotal role. Aspirants must demonstrate unwavering determination, the ability to think on their feet, and a willingness to face adversity head-on.
 <br>
 <br>
 <strong>The Coveted Maroon Beret: A Symbol of Honor:  </strong>
<br>
<br>
Earning the maroon beret is the culmination of this grueling journey. This iconic headgear is more than a piece of uniform; it symbolizes membership in an elite brotherhood committed to the highest standards of discipline, courage, and service.
<br>
<br>
<strong>Building Brotherhood: Camaraderie and Unity:  </strong>
<br>
<br>
Throughout the selection process, candidates forge strong bonds with their fellow aspirants. This camaraderie, built on shared challenges and aspirations, forms a foundation that sustains them through the demanding training that follows.
<br>
<br>
<strong>Training and Transformation: </strong>
<br>
<br>
 Once selected, the transformation into a Para SF commando continues. Rigorous training sharpens skills in areas such as combat tactics, weapons proficiency, advanced survival techniques, and specialized warfare tactics. This training equips them to face a wide spectrum of challenges with precision and expertise.
 <br>
 <br>
 <strong>Adapting to Diverse Roles: </strong>
<br>
<br>
 Para SF commandos are trained to be versatile and adept at various roles. From counter-terrorism operations to unconventional warfare and intelligence gathering, they are the Swiss Army knives of the military world, ready to adapt and excel in any situation.
 <br>
 <br>
 <strong>An Ongoing Journey: </strong>
<br>
<br>
 The journey to become a Para SF commando doesn't end with training; it's an ongoing commitment to excellence. These elite warriors continually hone their skills, learn from experiences, and evolve to meet new and emerging threats.
 <br>
 <br>
 <strong>A Legacy of Valor:  </strong>
<br>
<br>
The Para Special Forces are a living legacy of valor and dedication. The path to becoming a Para SF commando is a testament to the indomitable spirit of those who seek to serve their nation at the highest level. It's a journey of self-discovery, transformation, and unwavering commitment that shapes individuals into the epitome of military excellence – a Para SF commando.
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
      const encodedContent = encodeURIComponent(content);
      window.location.href = `index.html?section=article&content=${encodedContent}`


    }
    else if (cardId === 'article3') {
      const content = `
                    <div class="card-viewer">
                    <img src="indian.jpeg"></img>
                    <div>
                             <h3The Indian Army : The Exciting Journey - Living a Life Less Ordinary
                             </h3>
                             <p class="time"></p>
                             <p class='content'>

                             <strong>The Exciting Journey:
                             <br>
                            
                              The Indian Army - Living a Life Less Ordinary</strong>
                              <br>
                              <br>
                              <strong>Introduction:</strong>
                             <br>
                             <br>
                             The Indian Army stands as a remarkable institution that encapsulates the spirit of valor, sacrifice, and commitment. For those who choose to tread this path, it offers an exciting journey that transcends the ordinary and leads to a life filled with challenges, adventures, and the noble pursuit of serving the nation. The Indian Army offers individuals an opportunity to live a life less ordinary, where every step is marked by courage, camaraderie, and a sense of purpose.
                             <br>
                             <br>
                             <strong>The Call of Duty:</strong>
                             <br>
                             <br>
                             Joining the Indian Army is not just a profession; it's a calling. The allure of serving one's motherland, protecting its borders, and upholding its values becomes a powerful driving force for those who choose this extraordinary path. The sense of duty is embedded deep within every soldier, leading them to embrace challenges head-on, whether it's in the harsh terrains of Siachen or the dense jungles of the Northeast.
                             <br>
                             <br>
                             <strong>Courage in Adversity:</strong>
                             <br>
                             <br>
                             Living a life less ordinary in the Indian Army demands immense courage. Soldiers often find themselves in the midst of adversity, facing threats from both external forces and within. Whether it's battling the enemy on the frontlines or confronting personal fears, the Army hones an individual's resilience and determination, shaping them into unyielding pillars of strength.
                             <br>
                             <br>
                             <strong>Camaraderie and Brotherhood:</strong>
                             <br>
                             <br>
                             The Indian Army is a unique blend of diversity and unity. Soldiers from different backgrounds, languages, and regions come together under the banner of the Army, forging lifelong bonds of camaraderie and brotherhood. The shared experiences of training, operations, and life on the field create an unbreakable connection that transcends differences and fosters a strong sense of belonging.
                             
                             <br>
                             <br>
                             <strong> Leadership and Discipline:</strong>
                             <br>
                             <br>
                             To live a life less ordinary in the Indian Army is to embrace a disciplined lifestyle guided by principles of honor and integrity. Leadership skills are cultivated through real-world experiences, where individuals are entrusted with responsibilities that demand quick thinking, strategic planning, and ethical decision-making. These qualities not only shape exceptional soldiers but also outstanding individuals ready to contribute positively to society.
                             <br>
                             <br>
                             <strong>Adventures and Exploration:</strong>
                             <br>
                             <br>
                             The Indian Army offers its members a chance to explore the unexplored. From scaling icy peaks to navigating through dense forests, soldiers are exposed to environments that challenge their physical and mental limits. These adventures not only provide a rush of adrenaline but also instill a deep appreciation for the natural beauty of the country.
                             <br>
                             <br>
                             <strong>Humanitarian Aid and Nation Building:</strong>
                             <br>
                             <br>
                             Beyond the battlefield, the Indian Army plays a crucial role in nation-building and humanitarian aid. Whether it's disaster relief operations, medical assistance in remote areas, or infrastructure development, soldiers actively contribute to the welfare of the nation. This multifaceted role adds a sense of purpose to their extraordinary journey.
                             <br>
                             <br>
                             <strong>The Legacy of Heroes:</strong>
                             <br>
                             <br>
                             The history of the Indian Army is adorned with tales of bravery and sacrifice. From the valiant soldiers of the past to the present-day heroes, the legacy serves as a constant reminder of the honor associated with this journey. Joining the ranks of those who have laid down their lives for the country is a testament to the extraordinary nature of the path chosen.
                             <br>
                             <br>
                             <strong>Conclusion:</strong>
                             <br>
                             <br>
                             In a world that often leans towards the ordinary, the Indian Army offers a remarkable alternative. It beckons individuals to embrace challenges, embrace diversity, and embrace the cause of the nation. To live a life less ordinary as a soldier is to walk a path illuminated by courage, camaraderie, and an unshakeable commitment to the greater good. Aspiring to be a part of the Indian Army is aspiring to live a life that truly matters.
                              </p>
                    </div>
                    </div>
    
<br>
<br>`
      const encodedContent = encodeURIComponent(content);
      window.location.href = `index.html?section=article&content=${encodedContent}`

    }

  }
  const closeButtonArticle = document.querySelector('#closeArticle')

  closeButtonArticle.addEventListener('click', () => { blogContainer.classList.add('hidden') })

});