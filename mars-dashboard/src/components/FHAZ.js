import React from 'react';

import {useState} from 'react';
import { Link } from 'react-router-dom';

import './FHAZ.css'

function FHAZ() {
    const [roverdata, setRoverdata] = React.useState({});
    //const[isLoading,setIsLoading]=useState(true);
    //const [first,setFirst] = React.useState(0); // or useState(null)

    React.useEffect(() => {
        const getRoverdata = async () => {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-11-10&api_key=KrowpvWp7tc75hUO5whRzW4YGsKQSDjuVMPa0DUQ&camera=FHAZ');
            const data = await response.json();
            setRoverdata(data);
        };
        getRoverdata();
        //setIsLoading(false);
    
    }, []);
    
    
    //const{sol}=photos[0];
    
    //if(!isLoading){
      //  const {photos}=roverdata;
        //const {sol}=photos[0];
        //console.log(sol);
    //}
        
    
    
    
    

    return (
        <section className="FHAZ">
            
            <h2 id="hubblesite"> 1. <a>FHAZ Image</a> </h2>
            <ul className="quiz-list">					
                <li>
                    <div className="q-pic">
                        <img src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04003/opgs/edr/fcam/FLB_752860376EDR_F1050418FHAZ00400M_.JPG" alt="banner"/>
                    </div>
                    <div className="description_wrapper"> 
                        
                        
                        <div className="item_foo">
                            <p>Sol(day on mars):</p>
                            <p>Camera Name:</p>
                            <p>Earth Date:</p>
                            <p>Rover Name:</p>
                            <p>Launch Date:</p>
                            <p>Landing Date:</p>
                            <p>Status:</p>
                        </div>
                    </div>
                    
                </li>

                <li>
                    <div class="q-pic">
                        <img src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04003/opgs/edr/fcam/FLB_752860376EDR_F1050418FHAZ00400M_.JPG" alt="banner"/>
                    </div>
                    <div class="description_wrapper"> 
                        
                        
                        <div class="item_foo">
                            <p>Sol(day on mars):</p>
                            <p>Camera Name:</p>
                            <p>Earth Date:</p>
                            <p>Rover Name:</p>
                            <p>Launch Date:</p>
                            <p>Landing Date:</p>
                            <p>Status:</p>
                        </div>
                    </div>
                    
                </li>

               

            </ul>
            
        </section>
        
    );
};

export default FHAZ;