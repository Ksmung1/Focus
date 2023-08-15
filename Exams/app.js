const container = document.querySelector('.container');


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');

  if (section === 'nda') {

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
                                          <td>Written Exam (Objective)<br> <br>Total Questions: 270<br>Total Marks: 900<ul><li>Maths: 33.3%</li> <li>GAT: 66.7% (Mostly Class 11 and 12)</li></td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass</td>
                                         </tr>
                                         <tr>
                                         <td><strong>Cut off</strong></td>
                                         <td></td>
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
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>12th pass</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  cut off</strong></td>
                                          <td></td>
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
    console.log('agniveer')
    const agniveerelements = [{

      title: 'Agniveer Army GD Exam',
      imgURL: 'images/Picsart_23-08-15_11-44-00-547.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>Agnipat / Agniveer</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td><ul><li>Common Entrance Exam(CEE)</li> <li>Physical Fitness Test </li> <li>Medical Test </li></td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Exam (Objective) <br><br>Total Questions: 50 <br>Total marks: 100<br><p><ul><li>General Knowledge: 15 Questions (30%) <li> General Science: 20 Questions (40%) </li>Maths: 10 Questions (20%) <li>Logical Reasoning: 5 Questions (10%)</li></ul></td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>10th pass</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Cut off</strong></td>
                                           <td>50 marks (50%)</td>
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
                                          <td>Computer Based Test-CBT (Objective type)<p></p> Total Questions: 80 <br> Total Marks: 160:<p>
                                          <ul>
                                          <li>General Intelligence and <span styles='margin-left: 45px'>Reasoning</span>: 20 Questions (25%)</li>
                                          <li>General Knowledge and General Awareness: 20 Questions (25%)</li>
                                          <li>Elementary Mathematics: 20 Questions (25%)</li>
                                          <li>English / Hindi: 20 Questions (25%)</li>
                                          </ul>
                                          </td>
                                         </tr>
                                         <tr>
                                         <td><strong>Cut off</strong></td>
                                         <td>
                                         <ul>
                                         <li>General: 65-78 Marks (48%)</li>
                                         <li>OBC: 63-77 Marks (48%)</li>
                                         <li>EWS: 62-75 Marks (46%)</li>
                                         <li>SC: 62-70 Marks (43%)</li>
                                         <li>ST: 55-65 Marks (40%)</li>
                                         <li>Ex-servicemen: 45-55 Marks (34%)</li>
                                         </ul>
                                         
                                         </td>
                                       </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>10th pass</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>18 yrs - 23 yrs</td>
                                         </tr>
                                        
                                         <tr>
                                         <td><strong>Vacancy</strong></td>
                                          <td>45000</td>
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
    console.log('agniveerTechnical');
    const capfelements = [{

      title: 'UPSC CAPF',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>CAPF</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td>Written Test and SSB Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Maths: 33.3%, GAT: 66.7% (Highly Class 11 and 12)</td>
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
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
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
  else if (section === 'agniveerClerk') {
    console.log('agniveerClerk')
    const capfelements = [{

      title: 'UPSC CAPF',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>CAPF</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Frequency of Exam</strong></td>
                                          <td>Once a year</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Selection process</strong></td>
                                           <td>Written Test and SSB Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Maths: 33.3%, GAT: 66.7% (Highly Class 11 and 12)</td>
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
                                         <tr>
                                           <td><strong>Salary</strong></td>
                                           <td>Rs.56100 - Rs.177500</td>
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
                                          <td>Written (Objective type)<br><br>Total Questions: 340 <br> 300 Marks<br><ul><li>English: 33.2% </li> <li>General Knowledge: 33.2% </li><li>Elementary Mathematics: 33.6% (Mostly 10th level)</li></ul></td>
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
                                          <td>Paper 1 (Objective) <br><br>Total Questions: 125 <br>Total Marks: 250 Marks <ul><li>General Ability & Intelligence</li></ul>
                                          <br>
                                              Paper 2 (Descriptive) <br><br>Total Questions: 6 <br> Total Marks = 200<br><br> <ul><li>General Studies</li> <li>Essay & Comprehension</li></ul>
                                          </td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
                                         </tr>
                                         <tr>
                                           <td><strong>Cut off</strong></td>
                                           <tr></td>
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
                                          <td>Written Exam<br><br> Total Questions: 100<br>Total Marks: 300 Marks<ul> <li>Generel Awareness: 25%</li> <li>English: 30%</li><li> Numerical Ability: 20%</li> <li>Reasoning and Military Aptitude Test: 25%<</li></ul></td>
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
                                          Tier 1: <br><br>Total Questions = 100 <br>Total Marks: 100 <ul><li>English: 20 Questions (20%)</li><li>Numerical/Analytical/Logical Ability & Reasoning: 20 Questions (20%)</li> <li>Quantitive Aptitude: 20 Questions (20%)</li> <li>General Studies: 20 Questions (20%)</li> <li> General Awareness: 20 Questions(20%)</li></ul>
                                           <p></p>
                                             Tier 2:<br><p><ul><li>Essay: 60%</li> <li>English Comprehension and precis writing: 40% </li></ul> <p></p>
                                              Tier 3: <ul><li>Interview</li></ul></td>
                                             
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
                                         </tr>
                                         <tr>
                                           <td><strong>cut off</strong></td>
                                           <td></td>
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
                                          <td>Tier 1:<br><br> Total Questions: 200<br>Total Marks: 200:<br> <ul><li>General Intelligence and Reasoning: 50 Questions (25%)</li> <li>General Awareness and Knowledge: 50 Questions (25%) </li><li>Quantitative Aptitude: 50 Questions (25%) </li><li>English language: 50 Questions (25%)</li></ul><br>Tier 2:<br><br> Total Questions: 200<br> Total Marks: 200<br><ul><li> English Language and Comprehension </li></ul> </td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>Graduate</td>
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