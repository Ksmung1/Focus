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
                                           <td>Written Test and SSB Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Maths: 33.3%, English: 33.3%, General Knowledge: 33.3%, Elementary Mathematics: 33.3% (Mostly 10th level)</td>
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
                                           <td>Written Test, Physical Fitness Test and Interview</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Paper 1 (objective): General Ability & Intelligence
                                          <br>
                                              Paper 2 (Descriptive): General Studies, Essay & Comprehension
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
                                           <td>Written Exam, AFSB Interview, Medical Test</td>
                                         </tr>
                                         <tr>
                                          <td><strong>  EXAM PATTERN</strong></td>
                                          <td>Generel Awareness, English, Numerical Ability, Reasoning and Military Aptitude Test</td>
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
          else if (section === 'ssc') {
                    console.log('ssc')
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


});