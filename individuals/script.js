document.addEventListener("DOMContentLoaded", function () {
          const urlParams = new URLSearchParams(window.location.search);
          const section = urlParams.get('section');

          const contentDiv = document.querySelector('.container');



          if (section === "all-courses") {

                    console.log('All courses');
                    const elements = [{
                              title: 'ALL Courses',
                              paragraph1: `<div class='card'>
                              <h3>JOBS</h3>
                              <ul>
                              <li><a href = '../Exams/index.html'>Defence Exams</a></li>
                              <li><a>SSC CGL</a></li>
                              <li><a>Defence Exams</a></li>
                              <li><a>Defence Exams</a></li>
                              </ul></div>`,
                              paragraph2: `<div class='card'>
                              <h3>ENTRANCES</h3>
                              <ul>
                              <li><a>JEE</a></li>
                              <li><a>NEET</a></li>
                              </ul></div>`
                    }];



                    const allCoursesContent = elements.map(element => `
                    <h2>${element.title}</h2>
                    <div class='card-holder'>
                    ${element.paragraph1 + element.paragraph2}
                    </div>`).join('')
                    contentDiv.innerHTML = `${allCoursesContent}`



          } else if (section === "news") {
                    console.log('News')


          } else if (section === "current-affairs") {
                    console.log('current-affairs')

          } else if (section === "magazines") {
                    console.log('magazines')

          } else if (section === "facts") {
                    console.log('facts')

          } else if (section === "upcoming-exams") {
                    console.log('Upcoming exams')
          }
});
