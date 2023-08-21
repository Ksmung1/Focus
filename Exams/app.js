const container = document.querySelector('.container');
const body = document.querySelector('body');
const examContainer = document.getElementById('exam-container');



document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');

  if (section === 'nda') {

    examContainer.innerText = '';
    examContainer.classList.add('hidden')

    const ndaelements = [{

      title: 'UPSC NDA & NA Exam',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>NDA & NA</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Twice a year (April and September)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Written Test</li><li> SSB Interview</li></ul></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Exam (Objective):<br> <br>Total Questions: 270<br>Full Marks


: 900<br>Passing Marks: 355 (39%) <br>Marking Scheme: Maths (2.5 Marks per Question) & GAT (4 Marks per Question)<br>Negative Marking: -0.83 for Maths, -1.33 for GAT<ul><li>Maths: 120 Questions (33.3%)</li> <li>GAT: 150 Questions (66.7%) (Mostly Class 11 and 12)</li></td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass</td>
                                         </tr>
                                        
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>16.5 yrs - 19.5 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>395 (NDA & NA 2 2023)</td>
                                         </tr>
                                         <td><strong>Post</strong></td>
                                         <td>Lieutenant</td>
                                       </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const ndaContent = ndaelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${ndaContent}</div>`
    )
  }
  else if (section === 'armyTes') {

    examContainer.innerText = ''
    console.log('army-tes')
    const armyTeselements = [{

      title: 'ARMY TES Exam',
      imgURL: 'images/Picsart_23-08-15_11-11-59-523.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>Army TES </td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Twice a year</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>JEE Mains</li><li> SSB Interview </li> <li>Medical Examination</li></ul></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Examination: JEE Mains</td>
                                         </tr>
                                       
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass (PCM 70% min)</td>
                                         </tr>
                                      
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>16.5 yrs - 19.5 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>90 (TES 50 2023)</td>
                                         </tr>
                                         <tr>
                                          <td><strong>POST</strong></td>
                                           <td>Lieutenant</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const armyTesContent = armyTeselements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${armyTesContent}</div>`
    )
  }
  else if (section === 'agniveer') {
    examContainer.innerText = ''
    console.log('agniveer')
    const agniveerelements = [{

      title: 'Agniveer Army GD Exam',
      imgURL: 'images/Picsart_23-08-15_11-44-00-547.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>Agnipath / Agniveer</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (April)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Common Entrance Exam(CEE)</li> <li>Physical Fitness Test </li> <li>Medical Test </li></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>
                                          Written Exam (Objective): <br><br>Total Questions: 50 <br>Full Marks
: 100<br>Passing Marks: 80<br>Marking Scheme: 2 marks for each correct answer <br> Negative Marking: -0.5 marks for each incorrect answer<p>
                                          <ul><li>General Knowledge: 15 Questions (30%) <li> General Science: 20 Questions (40%) </li>Maths: 10 Questions (20%) <li>Logical Reasoning: 5 Questions (10%)</li></ul>
                                          </td>
                                         </tr>
                      
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>10th pass</td>
                                         </tr>
                                        
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>17.5 yrs - 23 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>40000 approx.</td>
                                         </tr>
                                         <td><strong>post</strong></td>
                                           <td>Agniveer Indian Army (GD)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.30000 - Rs.40000</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const agniveerContent = agniveerelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${agniveerContent}</div>`
    )
  }
  else if (section === 'sscGd') {
    examContainer.innerText = ''
    console.log('sscGd')
    const sscGdelements = [{

      title: 'SSC Constable GD Exam',
      imgURL: 'images/Picsart_23-08-15_12-23-52-339.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>SSC Constable GD</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (January - February)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><br><ul> <li>Computer Based Test-CBT</li><li> Physical Efficiency Test (PET) / Physical Standards Test (PST) </li> <li>Medical Examination </li> </ul></td>
                                         </tr>
                                         <tr>
                                          <td><strong>EXAM PATTERN</strong></td>
                                          <td>Computer Based Test-CBT (Objective type)<p></p> Total Questions: 80 <br> Full Marks: 160 <br> Passing Marks: 54 - 76 Marks<br>Marking Scheme: 2 Marks for each correct answer <br> Negative Marking: -0.50 marks for each incorrect answer


<p>
                                          <ul>
                                          <li>General Intelligence and <span styles='margin-left: 45px'>Reasoning</span>: 20 Questions (25%)</li>
                                          <li>General Knowledge and General Awareness: 20 Questions (25%)</li>
                                          <li>Elementary Mathematics: 20 Questions (25%)</li>
                                          <li>English / Hindi: 20 Questions (25%)</li>
                                          </ul>
                                          </td>
                                         </tr>
                                        
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>10th pass</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>18 yrs - 23 yrs (+5 age relaxation for reserved categories)</td>
                                         </tr>
                                        
                                         <tr>
                                         <td><strong>Vacancy</strong></td>
                                          <td>50000</td>
                                        </tr>
                                        <tr>
                                        <td><strong>post</strong></td>
                                         <td>Constable GD</td>
                                       </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.21700 - Rs.69100</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const sscGDContent = sscGdelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${sscGDContent}</div>`
    )
  }
  else if (section === 'agniveerTechnical') {
    examContainer.innerText = ''
    console.log('agniveerTechnical');
    const technicalelements = [{

      title: 'Agniveer Technical Exam',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>Agniveer Technical</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (April)</td>
techx                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Common Entrance Exam (CEE)</li><li>Physical Fitness Test</li><li>Medical Test</li></ul> </td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Exam (Objective): CEE <br><br>
                                          Total Questions: 50<br>Full Marks


: 200<br>Passing Marks: 80 <br> Marking Scheme: 4 marks for each correct answer<br> Negative Marking: -1 marks for each incorrect answer<br>
                                          <ul><li>General Knowledge: 10 Questions (20 %)</li><li>Mathematics: 15 Questions (30%)</li><li>Physics: 15 Questions (30%)</li><li>Chemistry: 10 Questions (20%)</li></ul></td>
                                         </tr>
                                         <tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass (With Physics, Chemistry, Maths and English)</td>
                                         </tr>
                                         
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>17.5 yrs - 23 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>40000 approx. (Agnipath Scheme)</td>
                                         </tr>
                                         <tr>
                                         <td><strong>post</strong></td>
                                         <td>Agniveer Technical</td>
                                        </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.30000 - Rs.40000</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const technicalContent = technicalelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${technicalContent}</div>`
    )
  }
  else if (section === 'agniveerClerk') {
    examContainer.innerText = ''
    console.log('agniveerClerk')
    const capfelements = [{

      title: 'Agniveer Clerk Exam',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>Agniveer Clerk</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (April)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Common Entrance Exam (CEE)</li><li>Physical Fitness Test</li><li>Medical Test</li></ul> </td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>
                                          Written Exam (Objective): CEE <br><br>
                                          Total Questions: 50<br>Full Marks


: 200<br>Passing Marks: 80 <br> Marking Scheme: 4 marks for each correct answer<br> Negative Marking: -1 marks for each incorrect answer<br> <br>
                                          Part 1:<ul><li>General Knowledge: 5 Questions (10 %)</li><li>General Science: 5 Questions (10%)</li><li>Mathematics: 10 Questions (20%)</li><li>Computer Science: 5 Questions (10%)</li></ul>Part 2:<ul><li>General English: 25 Questions (50%)</li></ul>

                                          
                                          </td>
                                         </tr>
                     
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass (Any Stream)</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>17.5 yrs - 23 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>40000 (Agnipath Scheme)</td>
                                         </tr>
                                         <tr>
                                         <td><strong>post</strong></td>
                                          <td>Agniveer Clerk</td>
                                        </tr>

                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.30000 - Rs.40000</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const capfContent = capfelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${capfContent}</div>`
    )
  }
  else if (section === 'cds') {
    examContainer.innerText = ''
    console.log('cds')
    const cdselements = [{

      title: 'UPSC CDS Exam',
      imgURL: 'images/Picsart_23-08-14_22-11-51-357.jpg',
      paragraph: `
                    <div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>CDS</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Twice a year (April and September)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Written Test </li> <li>SSB Interview</li></ul></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written (Objective type)<br><br>Total Questions: 340 <br> Total Marks: 300<br>Passing Marks: 140 (46%)<br>Marking Scheme: English 0.83 Marks,General Knowledge 0.83 Marks, Maths 1 Mark<br>Negative Marking: -0.27 Marks for English & Gk and -1 Mark for Maths<ul><li>English: 120 Questions (33.2%) </li> <li>General Knowledge: 120 Questions (33.2%) </li><li>Elementary Mathematics: 100 Questions(33.6%) (Mostly 10th level)</li></ul></td>
                                         </tr>
                          
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
                                         </tr>
                                        
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>19 yrs - 25 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>349 (CDS 2 2023)</td>
                                         </tr>
                                         <tr>
                                         <td><strong>post</strong></td>
                                          <td>Lieutenant</td>
                                        </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
                                         </tr>
                              </table>
                    </div>`

    }

    ];
    const cdsContent = cdselements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${cdsContent}</div>`
    )
  }
  else if (section === 'capf') {
    examContainer.innerText = ''
    console.log('capf')
    const capfelements = [{

      title: 'UPSC CAPF Exam',
      imgURL: 'images/capf.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>CAPF</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (August)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Written Test</li> <li>Physical Fitness Test </li><li> Interview</li></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Paper 1 (Objective) <br><br>Total Questions: 125 <br>Full Marks


: 250 Marks<br>Passing Marks (Qualifying): 120 - 125 Marks<br>Marking Scheme: 2 marks for each correct answer<br>Negative Marking: -0.66 marks for each incorrect answer<ul><li>General & Mental Ability</li></ul>
                                          <br>
                                              Paper 2 (Descriptive) <br><br>Total Questions: 6 <br> Full Marks
 = 200<br>Passing Marks: Minimum 25%<br>Marking Scheme: 33.3 marks for each correct answer<br>Negative Marking: Nil<ul><li>General Studies</li> <li>Essay & Comprehension</li></ul>
                                          </td>
                                         </tr>
                                     
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
                                         </tr>
                                       
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>20 yrs - 25 yrs (+5 years relaxation for reserved categories)</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>322 (UPSC CAPF 2023)</td>
                                         </tr>
                                         <td><strong>Post</strong></td>
                                         <td>Assistant Commandant (AC)</td>
                                       </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
                                         </tr>
                                        </table>
</div>`

    }];
    const capfContent = capfelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${capfContent}</div>`
    )
  }
  else if (section === 'afcat') {
    examContainer.innerText = ''
    console.log('afcat')
    const afcatelements = [{

      title: 'AFCAT Exam',
      imgURL: 'images/Picsart_23-08-14_23-11-55-466.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>AFCAT</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Twice a year (February and August)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Written Exam</li><li> AFSB Interview</li> <li>Medical Test</li></ul></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Exam<br><br> Total Questions: 100<br>Full Marks


: 300<br>Passing Marks: 140-190 marks<br>Marking Scheme: 3 marks for each correct answer<br> Negative Markings: -1 mark for each incorrect answer<ul> <li>Generel Awareness: 25 Questions (25%)</li> <li>English: 30 Questions (30%)</li><li> Numerical Ability: 20 Questions (20%)</li> <li>Reasoning and Military Aptitude Test: 25 Questions (25%)</li></ul></td>
                                         </tr>
                                       
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td><ul><li>60% in Maths and Physics in 10+2</li> <li> Graduate</li></td>
                                         </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>Flying Branch: 20 yrs - 24 yrs<br> Ground Duty: 20 yrs - 26 yrs</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>276</td>
                                         </tr>
                                         <td><strong>POST</strong></td>
                                         <td>FLying Officer (Flying Lieutenant)</td>
                                       </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const afcatContent = afcatelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${afcatContent}</div>`
    )
  }
  else if (section === 'ib') {
    examContainer.innerText = ''
    console.log('ib')
    const ibelements = [{

      title: 'IB ACIO Exam',
      imgURL: 'images/Picsart_23-08-14_23-14-47-585.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>IB ACIO</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (July)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <ul><td><li>Tier 1: Objective type</li><li>Tier 2: Descriptive type <li>Interview</li></ul>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>
                                          Tier 1: <br><br>Total Questions = 100 <br>Full Marks


: 100<br>Passing Marks (Qualifying): 33-35<br>Marking Scheme: 1 mark for each correct answer<br> Negative Marking: -0.25 marks for each incorrect answer <ul><li>English: 20 Questions (20%)</li><li>Numerical/Analytical/Logical Ability & Reasoning: 20 Questions (20%)</li> <li>Quantitive Aptitude: 20 Questions (20%)</li> <li>General Studies: 20 Questions (20%)</li> <li> General Awareness: 20 Questions(20%)</li></ul>
                                           <p></p>
                                             Tier 2:<br><p><ul><li>Essay: 60%</li> <li>English Comprehension and precis writing: 40% </li></ul> <p></p>
                                              Tier 3: <ul><li>Interview</li></ul></td>
                                             
                                         </tr>
                                     
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
                                         </tr>
                                        
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>18 yrs - 27 yrs (+5 age relaxation for reserved categories)</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>150 (IB ACIO Grade 2 Executive Post)</td>
                                         </tr>
                                         <tr>
                                         <td><strong>POST<strong></td>
                                         <td>Grade 2 Executive</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.44900 - Rs.142400</td>
                                         </tr>
                                        </table>
</div>`

    }

    ];
    const ibContent = ibelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${ibContent}</div>`
    )
  }
  else if (section === 'ssc') {
    examContainer.innerText = ''
    console.log('ssc')
    const sscelements = [{

      title: 'SSC CPO Exam',
      imgURL: 'images/Picsart_23-08-15_08-30-36-839.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>SSC CPO</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year (October)</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td>Tier 1: Written Exam <ul><li> Physical Endurance Test (PET) or Physical Standard Test (PST)</li> </ul>Tier 2: Written Exam <br><br><li>Medical Examination</li></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Tier 1: Paper 1<br><br> Total Questions: 200<br>Full Marks


: 200:<br>Passing Marks (Qualifying): 78-102<br> Marking Scheme: 1 mark for each correct answer<br>Negative Marking: -0.33 marks for each incorrect answer <ul><li>General Intelligence and Reasoning: 50 Questions (25%)</li> <li>General Awareness and Knowledge: 50 Questions (25%) </li><li>Quantitative Aptitude: 50 Questions (25%) </li><li>English language: 50 Questions (25%)</li></ul><br>Tier 2: Paper 2<br><br> Total Questions: 200<br> Full Marks


: 200<br>Passing Marks: 113-153 (Paper 1 + Paper 2)<ul><li> English Language and Comprehension </li></ul> </td>
                                         </tr>
                                   
                                         <tr>
                                         <td><strong>Qualification</strong></td>
                                         <td>Graduate</td>
                                       </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>20 yrs - 25 yrs (+5 years relaxation for reserved categories)</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Vacancy</strong></td>
                                           <td>1876</td>
                                         </tr>
                                         <tr>
                                         <td><strong>POST<strong></td>
                                         <td>SI and ASI</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.35400 - Rs.112400</td>
                                         </tr>
                                        
                                  
                                        </table>
</div>`

    }

    ];
    const sscContent = sscelements.map(element => `
                              <div class='card'>
                              <div>
                                        <h2>${element.title}</h2>
                                        <img src="${element.imgURL}"></img>
                                        </div>
                                        <p>${element.paragraph}</p>
                              </div>`).join('')



    container.innerHTML = (`<div class='ndapage'> ${sscContent}</div>`
    )
  }

});

function buyCourse(product) {
  window.location.href = `../index.html?purchased=$(product)`;
}