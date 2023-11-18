import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';




const Home =({activeQuestion,setActiveQuestion}) =>{ 

    

    return (
        <Fragment>
            <Helmet><title>Quiz App - Home</title></Helmet>
            
            <div id="home">
                <div if="primary" class="site-content">
                    <div><h1>Quizzes</h1></div>
                    
                    <div class="live_wrapper">
                        <div class="container">
                            <div class="quiz-wrapper">
                                <h2>Topics</h2>
                                <ul class="quiz-list">					
                                    <li>
                                        <div class="q-pic">
                                            <img src="https://c4.wallpaperflare.com/wallpaper/1003/716/866/space-sun-hd-wallpapers-cool-desktop-background-images-widescreen-1-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Helious - The Sun</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a  class="quizplay-btn" onClick={() => setActiveQuestion(0)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>Learn :</small> Lessons on Sun</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://4kwallpapers.com/images/walls/thumbs_3t/9621.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Black Hole</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(10)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                            
                                    <li>
                                        <div class="q-pic">
                                            <img src="https://c4.wallpaperflare.com/wallpaper/848/971/640/clouds-comet-kimi-no-na-wa-sky-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>The Comets</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(20)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://c4.wallpaperflare.com/wallpaper/235/107/585/stars-space-galaxy-nebula-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Milky Way Galaxy</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(30)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://i.ytimg.com/vi/0Dnk4IThcYo/maxresdefault.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Jupitar a failed Star</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(40)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://cdn1.byjus.com/wp-content/uploads/2023/04/Life-Cycle-of-a-Star.png" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Journey of Stars from Birth to Death</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(50)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                            
                                    <li>
                                        <div class="q-pic">
                                            <img src="https://natureofgravity.files.wordpress.com/2012/04/slide52.gif" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Gravity a Space-Time curvature</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(60)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://img.jagranjosh.com/images/2023/April/2842023/what-is-the-differencce-between-solar-eclipse-and-lunar-eclipse.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Solar Eclipse and lunar Eclipse</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(70)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                                    
                                    <li>
                                        <div class="q-pic">
                                            <img src="https://i.ytimg.com/vi/O3wRlPNAnrA/sddefault.jpg" alt="banner"/>
                                        </div>
                                        <div class="description_wrapper"> 
                                            <h3>Nuclear Fusion in Stars</h3>
                                            <div class="quiz-period">
                                                <div class="start-time"><span>From :</span> Nov 12, 2023 </div>
                                                <div class="end-time"><span>To :</span> Nov 15, 2023  </div>
                                            </div>
                                            <div class="ques-block">
                                            <div class="question_detail">
                                                <div class="no_of_ques">
                                                    <div class="qcount">10</div>
                                                    Questions 
                                                </div>
                                                <div class="quiz_time">
                                                    <div class="time_duration">
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn" onClick={() => setActiveQuestion(80)}><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
            Topic(index);
        </Fragment>
        
    );
}


export default Home;
