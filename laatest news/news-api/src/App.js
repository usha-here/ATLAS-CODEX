import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [myapp , setMyApp] =useState([]);

  const fetchData=async()=>{                                  //this is used to hit the api and render the data //await is used with async
    let response= await fetch("https://api.spaceflightnewsapi.net/v4/articles/") //await used:  till the data is achied wait
    let data=await response.json();                          //data ko json file mai convert krne ka wait
    setMyApp(data.results)
  }

  useEffect(()=>{                                    //fetchData() is called using useEffect() ,, 
    fetchData();                                        //useEffect works when the bootstrap card data is rendered


  },[])                                              //empty bracket so that it works only one time,,,
  
  return(
    <div>
    {
      myapp.map((ele)=>{                             //map is used to loop the array data
      console.log(ele)
        
      return(
          <>
          <article >
            <div class="main">
                <div class="content">
                    <div class="image">
                    <div class="link ">
                            <img src={ele.image_url} alt="..."/>
                        </div>
                       
                    </div>
                    <div class="text">
                        <div class="EntryTitle">
                            <h4><b>{ele.title}</b></h4>
                            <br></br>
                        </div>
                        <div class="EntryMetadata EntryMetadata--magazine">
                            <div class="EntryMetadataBasic__source-info">
                                <span>{ele.news_site}</span>             
                                <span>   {ele.published_at}</span>
                                
                            </div>
                            
    </div>
    <div class="EntrySummary EntrySummary--magazine">
        <div> {ele.summary}
        </div>
    </div>
    <br></br>
    <a href={ele.url} target="_blank" class="btn btn-primary">Read More...</a>
</div>
</div>
</div>

<footer class="line"></footer>

</article>


          </>

        );

      })
    }
    </div>
  );
  
}

export default App

