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
                                           <td>Written Test<br> SSB Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written (Objective): 270 Questions, 900 Marks:<br>Maths: 33.3%<br> GAT: 66.7% (Mostly Class 11 and 12)</td>
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
    console.log('army-tes')
    const armyTeselements = [{

      title: 'UPSC CAPF',
      imgURL: 'images/Picsart_23-08-14_21-26-51-369.jpg',
      paragraph: `<div class=pbox>
                              <table class="exam-info-table">
                                         <tr>
                                           <td><strong>Exam name</strong></td>
                                           <td>ArmyTES</td>
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

      title: 'Agniveer',
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
    const capfelements = [{

      title: 'UPSC CAPF',
      imgURL: 'images/capf.jpg',
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
                                          <td><strong>Syllabu</strong></td>
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
                                           <td>Written Test <br> SSB Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written (Objective type):340 questions, 300 Marks<br>English: 33.2% <br> General Knowledge: 33.2% <br>Elementary Mathematics: 33.6% (Mostly 10th level)</td>
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
                                           <td>Written Test<br> Physical Fitness Test <br> Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Paper 1 (Objective): 125 Questions, 250 Marks<br> General Ability & Intelligence
                                          <br>
                                              Paper 2 (Descriptive): 6 Questions, 200 Marks<br> General Studies<br> Essay & Comprehension
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
                                           <td>Written Exam<br> AFSB Interview<br> Medical Test</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Written Exam (100 Questions, 300 Marks): <br>Generel Awareness: 25%<br> English: 30%<br> Numerical Ability: 20%<br> Reasoning and Military Aptitude Test: 25%</td>
                                         </tr>
                                        <tr>
                                           <td><strong>Qualification</strong></td>
                                           <td>60% in Maths and Physics in 10+2, Graduate</td>
                                         </tr>
                                         <tr>
                                          <td><strong>Age limit</strong></td>
                                          <td>Flying Branch: 20 yrs - 24 yrs; Ground Duty: 20 yrs - 26 yrs</td>
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
                                           <td>Tier 1: Objective type<br>Tier 2: Descriptive type <br>Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Tier 1 (100 Questions, 100 Marks): <br>English: 20%<br> Numerical/Analytical/Logical Ability & Reasoning: 20%<br> Quantitive Aptitude: 20%<br> General Studies: 20%<br> General Awareness: 20%<br> <p></p>
                                              Tier 2:<br> Essay: 60%,<br> English Comprehension and precis writing: 40% <br> <p></p>
                                              Tier 3: Interview</td>
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
                                           <td>Paper 1: Written Exam <br> Physical Endurance Test (PET) or Physical Standard Test (PST) <br>Paper 2: Written Exam <br>Medical Examination</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Paper 1 (200 Questions, 200 Marks):<br> General Intelligence and Reasoning: 25%<br> General Awareness and Knowledge: 25% <br>Quantitative Aptitude: 25% <br>English language: 25% <span><p></p></span><br>Paper 2 (200 Questions, 200 Marks):<br> English Language and Comprehension <br> </td>
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