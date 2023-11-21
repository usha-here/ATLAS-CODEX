import FHAZ from './FHAZ';
//import IssData from '../../components/IssData/IssData';
import './FHAZ.css'
function Home() {
    return (
        <section className="Home">
            <div id="home">
                <div if="primary" className="site-content">
                    <div><h1>Mars Images By Curiosity</h1></div>
                    
                    <div className="live_wrapper">
                        <div className="container">
                            <div className="quiz-wrapper">
                                <div className="curiocity-img">
                                    <img  src="https://cms.accuweather.com/wp-content/uploads/2020/03/cropped-Screen-Shot-2020-03-05-at-9.06.09-PM.png" alt="banner"/>
                                </div>
                                <FHAZ />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            
        </section>
    );
}

export default Home;