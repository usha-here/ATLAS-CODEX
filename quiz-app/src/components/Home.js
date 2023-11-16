import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Home =() =>{ 
    

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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a  class="quizplay-btn" ><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

                                    <li>
                                        <div class="q-pic">
                                            <img src="https://c4.wallpaperflare.com/wallpaper/1003/716/866/space-sun-hd-wallpapers-cool-desktop-background-images-widescreen-1-wallpaper-preview.jpg" alt="banner"/>
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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/blackhole" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                            
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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                            
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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>

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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
                                            </div>
                                            <div class="item_foo">
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div class="qz_info"><div class="quiz_by"><small>By :</small> NASA.ORG</div></div>
                                    </li>
                                    
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
                                                        5 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a class="quizplay-btn"><Link to="/play/instructions" >Play</Link></a>             
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
        </Fragment>
    
    );
}


export default Home;
