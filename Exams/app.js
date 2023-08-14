const container = document.querySelector('.container');


document.addEventListener("DOMContentLoaded", function () {
          const urlParams = new URLSearchParams(window.location.search);
          const section = urlParams.get('section');

          if (section === 'nda') {

                    const ndaelements = [{

                              title: 'UPSC NDA & NA Exams',
                              imgURL: 'images/girlfriend.png',
                              paragraph: `<div class=pbox>
                              <ul><li>Exam name:</li> <li class='no-need-bullet'>NDA & NA</li>
                              <li>Frequency of Exam:</li> <li class='no-need-bullet'>Twice a year(Apr and Sept)</li>
                              <li>Selection process:</li> <li class='no-need-bullet'>Written Test and SSB Interview</li>
                              <li>Syllabus:</li> <li class='no-need-bullet'>Maths: 33.3%, GAT: 66.7% (Highly Class 11 and 12)</li>
                              <li>Quialification:</li> <li class='no-need-bullet'>12 & 12 pass</li>
                              <li>Age limit:</li> <li class='no-need-bullet'>16.5 - 19.5 yrs </li>
                              <li>Vacancy:</li> <li class='no-need-bullet'>395 (NDA & NA 2 2023)</li>
                              <li>Salary:</li> <li class='no-need-bullet'>Rs.56100 - Rs.177500</li>
                              </ul></div>`

                    },

                    ];
                    const ndaContent = ndaelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h4>${element.title}</h4>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



                    container.innerHTML = (`<h2> NDA</h2> <div class='ndapage'> ${ndaContent}</div>`
                    )
          }
          else if (section === 'armyTes') {
                    console.log('army-tes')
          }
          else if (section === 'agniveer') {
                    console.log('agniveer')
          }
          else if (section === 'sscGd') {
                    console.log('sscGd')
          }
          else if (section === 'agniveerTechnical') {
                    console.log('agniveerTechnical')
          }
          else if (section === 'agniveerClerk') {
                    console.log('agniveerClerk')
          }
          else if (section === 'cds') {
                    console.log('cds')
          }
          else if (section === 'capf') {
                    console.log('capf')
          }
          else if (section === 'afcat') {
                    console.log('afcat')
          }
          else if (section === 'ib') {
                    console.log('ib')
          }
          else if (section === 'ssc') {
                    console.log('ssc')
          }

          else if (section === '') {
                    console.log('')
          }
          else if (section === '') {
                    console.log('')
          }
});