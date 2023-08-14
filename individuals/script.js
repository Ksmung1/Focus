const contentTitle = document.getElementById('contentTitle');
const body = document.getElementById('body')
const card = document.getElementById('card')
const add = document.getElementById('+')
const form = document.querySelector('form');
document.addEventListener("DOMContentLoaded", function () {
          const urlParams = new URLSearchParams(window.location.search);
          const section = urlParams.get('section');

          const contentDiv = document.querySelector('#contentDisplay');

          if (section === "all-courses") {
                    console.log('All courses')
                    contentTitle.innerHTML = 'All Courses'
                    const img = document.createElement('img')
                    const p = document.createElement('p')
                    const h3 = this.document.createElement('h3')
                    p.innerText = 'JUST a demo';
                    h3.innerText = 'THE TITLE';



          } else if (section === "news") {
                    console.log('News')
                    contentTitle.innerHTML = 'News'

                    add.addEventListener('click', () => {
                              const fileInput = document.createElement('input');
                              fileInput.type = 'file';
                              fileInput.accept = 'image/*, video/*'; // Allow both image and video files

                              fileInput.addEventListener('change', (event) => {
                                        const selectedFile = event.target.files[0];
                                        if (selectedFile) {
                                                  const fileType = selectedFile.type.split('/')[0]; // Check whether selected file is an image or video
                                                  const mediaElement = fileType === 'image' ? document.createElement('img') : document.createElement('video');
                                                  const imageContainer = document.createElement('div');
                                                  imageContainer.classList.add('media-container');

                                                  mediaElement.classList.add('media');
                                                  mediaElement.src = URL.createObjectURL(selectedFile);
                                                  mediaElement.controls = true; // For video files

                                                  const p = document.createElement('p');
                                                  p.innerText = 'JUST a demo';

                                                  const div = document.createElement('div');
                                                  div.append(p);

                                                  imageContainer.append(mediaElement);
                                                  const card = document.querySelector('.card'); // Replace '.card' with the actual selector for your card element
                                                  card.append(imageContainer, div);
                                        }
                              });

                              fileInput.click(); // Simulate a click on the hidden input field
                    });


          } else if (section === "current-affairs") {
                    console.log('current-affairs')
                    contentTitle.innerHTML = 'Current-affairs'

          } else if (section === "magazines") {
                    console.log('magazines')
                    contentTitle.innerHTML = 'Magazines'

          } else if (section === "facts") {
                    console.log('facts')
                    contentTitle.innerHTML = 'Facts'

          } else if (section === "upcoming-exams") {
                    console.log('Upcoming exams')
                    contentTitle.innerHTML = 'Upcoming-exams'
          }
});
